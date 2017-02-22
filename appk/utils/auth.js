import cookie from 'react-cookie'

const tokenName = 'dzj_token'
const maxAge = 24 * 3600

export function setToken(token) {
  // localStorage.setItem(tokenName, token)
  cookie.save(tokenName, token, { path: '/', maxAge: maxAge})
}

export function getToken() {
  // return localStorage.getItem(tokenName)
  return cookie.load(tokenName)
}

export function logout(cb) {
    // delete localStorage[tokenName]
    cookie.remove(tokenName, { path: '/' })
    if (cb) cb()
}

export function clearToken() {
  cookie.remove(tokenName, { path: '/' })
}

export function loggedIn() {
  return !!getToken()
}

//export function detectAndInjectToken() {
//	let token = undefined
//	let hash = document.location.hash
//	let tokenPair = hash.split('?')[1].split('&').filter(ele => {
//			return ele.indexOf('token=') !== -1
//		})
//
//	if(tokenPair.length > 0) {
//		token = tokenPair[0].split('=')[1]
//	}
//	
//	token && setToken(token)
//}