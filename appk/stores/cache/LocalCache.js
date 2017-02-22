const cacheManager = window.localStorage

export function set(key, val) {
	key && cacheManager.setItem(key, val)
}

export function setObject(key, val) {
	key && cacheManager.setItem(key, JSON.stringify(val))
}

export function get(key, defaultVal) {
	let val = cacheManager.getItem(key)
	return val ? val : defaultVal
}

export function getAsObject(key) {
	let rawVal = cacheManager.getItem(key)
	try {
		return rawVal ? JSON.parse(rawVal) : undefined
	} catch(e) {
		return undefined
	}
}

export function remove(key, callback) {
	cacheManager.removeItem(key)
	callback && callback()
}

export function clear() {
	cacheManager.clear()
}
