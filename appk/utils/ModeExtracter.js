import * as SessionCache from '../stores/cache/SessionCache'
const DISPLAY_MODE_KEY = 'DISPLAY_MODE_KEY'
export function extractDisplayMode() {
	let mode = undefined
	let hash = document.location.hash
	let modeParam = hash.split('?')[1].split('&').filter(ele => {
		return ele.indexOf('mode=') !== -1
	})
	if(modeParam.length > 0) {
		mode = modeParam[0].split('=')[1]
		mode && SessionCache.set(DISPLAY_MODE_KEY, mode)
	}

	//read mode from location
	if(!mode) {
		//read mode from session storage
		mode = SessionCache.get(DISPLAY_MODE_KEY)
	}

	return mode
}