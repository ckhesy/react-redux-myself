import * as HttpProps from './HttpProps'
import * as Utils from '../utils/ObjectUtil'

export default store => next => action => {
  
  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[HttpProps.LEGACY_API_CALL]
    return finalAction
  }

  const apiCall = action[HttpProps.LEGACY_API_CALL]
  if (typeof apiCall === 'undefined') {
    return next(action)
  }

  let {endpoint, method, dataType, payload, start, success, fail} = apiCall
  
  if(start && typeof start !== 'function') {
    throw new Error('Specify a funtion for start callback.')
  }

  if(success && typeof success !== 'function') {
    throw new Error('Specify a funtion for success callback.')
  }

  if(fail && typeof fail !== 'function') {
    throw new Error('Specify a funtion for fail callback.')
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if(Utils.isNull(method)){
  	//default to GET
  	method = HttpProps.GET
  } else {
  	if(!HttpProps.SUPPORT_METHODS.includes(method)) {
  		throw new Error('Expected method should be one of GET | POST | PUT | DELETE')
  	} 
  }

  if(Utils.isNull(dataType)) {
    dataType = HttpProps.DEFAULT_DATA_TYPE
  }
  
  const { types} = apiCall
  if(types && Array.isArray(types)) {
    const [ requestType, successType, failureType ] = types
  }

  if(start) {
    next(start())
  } else {
    //trigger the request sending with the given payload
    next(actionWith({ type: requestType, payload: payload }))
  } 

  return fetch(`${HttpProps.LEGACY_API_ROOT}/${endpoint}`, {
            method: method,
            mode: "cors", //resolve cross origin issue
            headers: {
              'Accept': dataType,
            },
            body: payload
          })
          .then(HttpProps.validateStatus)
          .then(HttpProps.parseJSON)
          .then((data) => {
            if(success) {
              //customized handling
              return success(next, data)
            } else {
              // default handling
              if(data.code && data.code !== null) {
                return next(actionWith({type: failureType, error: {code: data.code, message: data.message}}))
              }
            }
          }).catch((err) => {
            if(fail) {
              return fail(next, err.response);
            } else {
              return next(actionWith({type: failureType, error: {code: err.code, message: err.message}}))
            }
          })
}