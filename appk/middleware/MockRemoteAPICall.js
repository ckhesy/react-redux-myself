import * as HttpProps from './HttpProps'



export default store => next => action => {
  const apiCall = action[HttpProps.MOCK_API_CALL]
  if (typeof apiCall === 'undefined') {
    return next(action)
  }
  let {payload, shouldFail} = apiCall
  const {types, data, error} = apiCall

  function actionWith(data) {
      const finalAction = Object.assign({}, action, data)
      delete finalAction[HttpProps.MOCK_API_CALL]
      return finalAction
  }

  if(types) {
    if (!Array.isArray(types) || types.length !== 3) {
      throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
      throw new Error('Expected action types to be strings.')
    }
    const [ requestType, successType, failureType ] = types
    //trigger the request sending
    next(actionWith({ type: requestType}));

    if(!shouldFail) {
      next(actionWith({type: successType, data: data}))
    } else {
      next(actionWith({type: failureType, error: error}))
    }
  } else {
    const {start, success, fail} = apiCall

    next(start())
    if(!shouldFail) {
      success(next, data)
    } else {
      fail(next, error)
    }
  }
}