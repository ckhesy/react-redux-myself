import * as ObjectUtil from './ObjectUtil'

export function checkRange(num, min, max) {
	
	if(num >= min && num <=max)
		return true
	else
		return false
}

export function checkLength(str, length, leastCheck=true) {
	if(typeof str !== 'string')
		return false;

	if(leastCheck)
		return str.trim().length >= length
	else
		return str.trim().length <= length
}

export function rangeValidate(fControl, min, max) {
	if(fControl.touched) {
		let val = fControl.value;
		
		if(ObjectUtil.isEmpty(val)) {
			return 'error'
		} else {
			if(val >= min && val <=max)
				return 'success'
			else
				return 'error'
		}
	} else {
		return ''
	}
}

export function lengthValidate(fControl, length, leastCheck=true) {
	if(fControl.touched) {
		if(checkLength(fControl.value, length, leastCheck)) {
			return 'success'
		} else {
			return 'error'
		}
	} else {
		return ''
	}
}

export function lengthEqual(fControl, length, length2, leastCheck=true) {
	if(fControl.touched) {
		if(typeof fControl.value !== 'string')
			return 'error'

		if(leastCheck&&fControl.value.trim().length==length) {
			return 'success'
		} else if (fControl.value.trim().length==length2){
			return 'success'
		} else {
			return 'error'
		}
	} else {
		return ''
	}
}

export function strEqual(fControl, str, leastCheck=true) {
	if(fControl.touched) {
		if(typeof fControl.value == 'number'){//判断数字类型，大于0即可
			if(fControl.value>0){
				return 'success'
			}else{
				return 'error'
			}
		}

		if(typeof fControl.value !== 'string')
			return 'error'

		if(leastCheck){
			if(fControl.value.trim()==str)
				return 'success'
			else
				return 'error'
		}else{
			if(fControl.value.trim()==str)
				return 'error'
			else
				return 'success'
		}
	} else {
		return ''
	}
}

export function addressValidate(lastCode, nextCode) {
	if(nextCode.touched) {
		lastCode.value = '' + lastCode.value
		nextCode.value = '' + nextCode.value
		if(nextCode==''){
			return 'error'
		}
		if(lastCode.value.substr(0,2)===nextCode.value.substr(0,2)){ //三级区域代码前三位是相同的，不同则有误
			return 'success'
		}else{
			return 'error'
		}
	} else {
		return ''
	}
}

export function emailValidate(fControl) {
	if(fControl.touched) {
		let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
		if(typeof fControl.value !== 'string')
			return 'error'
		if(myreg.test(fControl.value)) {
			return 'success'
		}else {
			return 'error'
		}
	} else {
		return ''
	}
}

export function phoneValidate(fControl) {
	if(fControl.touched) {
		let myreg = /^1[3|4|5|8][0-9]\d{4,8}$/
		if(typeof fControl.value !== 'string')
			return 'error'
		if(myreg.test(fControl.value)&&fControl.value.trim().length==11) {
			return 'success'
		}else {
			return 'error'
		}
	} else {
		return ''
	}
}

export function strLengthRangeValidate(fControl, lengthMin, lengthMax, leastCheck=true) {
	if(fControl.touched) {
		if(typeof fControl.value !== 'string')
			return 'error'

		if(leastCheck) {
			if(fControl.value.trim().length>lengthMin&&fControl.value.trim().length<lengthMax) {
				return 'success'
			} else {
				return 'error'
			}
		} else {
			if(fControl.value.trim().length<lengthMin||fControl.value.trim().length>lengthMax) {
				return 'success'
			} else {
				return 'error'
			}
		}
	} else {
		return ''
	}
}

// export function authorsValidate(fControl, wordsNum, wordLenth) {
// 	if(fControl.touched) {
// 		if(typeof fControl.value !== 'string')
// 			return 'error'


// 	}
// }