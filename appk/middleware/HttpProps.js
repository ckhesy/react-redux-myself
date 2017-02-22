import {API_ROOT_DEV, API_ROOT_PROD, LEGACY_API_ROOT_PROD, LEGACY_API_ROOT_DEV, IMG_ROOT as IMG_ROOT_PATH} from '../env'

//HTTP METHODS
export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'
export const HEAD = 'HEAD'

export const SUPPORT_METHODS = [GET, POST, PUT, DELETE, HEAD]

// export const DEFAULT_TIME_OUT = 10000 //10s

//default ship content type
export const DEFAULT_CONTENT_TYPE = 'application/json;charset=UTF-8'
export const MULTIPART_FORM_DATA = 'multipart/form-data'
//default accept content type
export const DEFAULT_DATA_TYPE = 'application/json'
export const TEXT_PLAIN = 'text/plain;charset=UTF-8'

//new api symbol
export const REMOTE_API_CALL = Symbol('Call Remote API')
export const API_ROOT = process.env.NODE_ENV === 'production' ? API_ROOT_PROD : API_ROOT_DEV;
// export const IMG_ROOT = `${API_ROOT}/download`
export const IMG_ROOT = IMG_ROOT_PATH

//legacy api symbol
export const LEGACY_API_CALL = Symbol('Legacy API Call')
export const LEGACY_API_ROOT = process.env.NODE_ENV === 'production' ? LEGACY_API_ROOT_PROD : LEGACY_API_ROOT_DEV;

//mock api call
export const MOCK_API_CALL = Symbol('Mockup API Call')

export const INTERNAL_ERROR='内部服务错误，请联系大专家客服！'
export const UNAUTHORIZED_ERROR='用户会话过期，请重新登录！'
export const NET_CONNECT_ERROR='网络连接异常，请检查您的网络连接！'

export function validateStatus(response) {
	let status = response.status
	if (status >= 200 && status < 300) {
	  return response
	} else {
	  let error = new Error()
	  error.code = status
	  if(status === 401) {
		error.message = UNAUTHORIZED_ERROR
	  } else if(status >= 500) {
		error.message = INTERNAL_ERROR
	  }
	  throw error
	}
}

export function parseJSON(response) {
	return response.json()
}