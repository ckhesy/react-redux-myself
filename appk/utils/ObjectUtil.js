export function notNull(obj) {
	return obj !== undefined && obj !== null
}

export function isNull(obj) {
	return !notNull(obj)
}

export function isEmpty(str) {
	if(typeof str !== 'string')
		return false;

	if(str.trim().length === 0)
		return true;
	else
		return false;
}

export function isEmptyObj(obj) {
	return Object.values(obj).length === 0 ? true : false
}