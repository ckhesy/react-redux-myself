import * as HttpProps from './HttpProps'
import * as Utils from '../utils/ObjectUtil'
import * as Auth from '../utils/auth'
//import 'whatwg-fetch'

export default store => next => action => {
  const apiCall = action[HttpProps.REMOTE_API_CALL]
  if (typeof apiCall === 'undefined') {
    return next(action)
  }

  let {
    endpoint,
    method,
    contentType,
    dataType,
    payload,
    secured,
    success,
    fail,
    types
  } = apiCall
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  if (Utils.isNull(method)) {
    //default to GET
    method = HttpProps.GET
  } else {
    if (!HttpProps.SUPPORT_METHODS.includes(method)) {
      throw new Error('Expected method should be one of GET | POST | PUT | DELETE')
    }
  }

  if (Utils.isNull(contentType)) {
    contentType = HttpProps.DEFAULT_CONTENT_TYPE

    if (Utils.notNull(payload)) {
      //convert it into JSON string
      payload = JSON.stringify(payload)
    }
  }

  if (Utils.isNull(dataType)) {
    dataType = HttpProps.DEFAULT_DATA_TYPE
  }

  if (Utils.isNull(secured)) {
    secured = true
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[HttpProps.REMOTE_API_CALL]
    return finalAction
  }

  const token = Auth.getToken()

  let [requestType, successType, failureType] = types
  //trigger the request sending
  next(actionWith({
    type: requestType,
    data: payload
  }));

  return fetch(`${HttpProps.API_ROOT}/${endpoint}`, {
      method: method,
      mode: "cors", //resolve cross origin issue
      credentials: 'include', //includes cookie from api domain
      headers: {
        'Accept': dataType,
        'Content-Type': contentType,
        'token': token ? token : ''
      },
      body: payload
    }).then(HttpProps.validateStatus)
    .then(HttpProps.parseJSON)
    .then(data => {
      try {
        if (data.code && data.code !== null) {
          //business error occurred
          next(actionWith({
            type: failureType,
            error: {
              code: data.code,
              message: data.message
            }
          }))

          if (fail)
            fail({
              code: data.code,
              message: data.message
            })
        } else {
          next(actionWith({
            type: successType,
            data: data.data
          }));

          if (success)
            success(data.data)
        }
      } catch (e) {
        // console.error(e)
        throw new Error(e)
      }
    })
    .catch(err => {
      try {
        let message = err.message
        if (message === 'Failed to fetch' || message === 'NetworkError when attempting to fetch resource.' || message === 'Network request failed') {
          message = HttpProps.NET_CONNECT_ERROR
        }
        // console.log(err)
        if (err.code === 401) {
          //invalid token
          Auth.clearToken()
        }
        //sever error, such as 500
        next(actionWith({
          type: failureType,
          error: {
            code: err.code,
            message: message
          }
        }))

        if (fail) {
          fail({
            code: err.code,
            message: message
          })
        }
      } finally {
        throw new Error(err.message)
      }
    })
}