import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import remoteApi from '../middleware/RemoteAPICall'
import legacyRemoteApi from '../middleware/LegacyAPICall'
import mockRemoteApi from '../middleware/MockRemoteAPICall'
import rootReducer from '../reducers/Root'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  remoteApi,
  legacyRemoteApi,
  mockRemoteApi
)(createStore);

export function configureStore(initialState) {
  if(process.env.NODE_ENV === 'development')
  	return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())
  else
  	return createStoreWithMiddleware(rootReducer, initialState)
}

