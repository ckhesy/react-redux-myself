import * as ENV from '../env'

export const USER_PLAIN = 'PLAIN'
export const USER_OPERATION = 'OPERATION'
export const USER_UNCERTIFIED_DOCTOR = 'UNCERTIFIED_DOCTOR'
export const USER_CERTIFIED_DOCTOR = 'CERTIFIED_DOCTOR'
export const USER_HIM = 'HIM'
export const USER_MSL = 'MSL'
export const USER_DZJ = 'DZJ'

export function userTypeToText(userType) {
	switch(userType) {
		case 'PLAIN':
			return "普通用户"
		case 'OPERATION':
			return "运营人员"
		case 'UNCERTIFIED_DOCTOR':
			return "未认证医生"
		case 'CERTIFIED_DOCTOR':
			return "认证医生"
		case 'HIM':
			return "HIM"
		case 'MSL':
			return "MSL联络员"
		case 'DZJ':
			return "大专家"
		default:
			return "未知"
	}
}

export function userTypeToIntegralRule(userType) {
	switch(userType) {
		case 'PLAIN':
		case 'OPERATION':
		case 'UNCERTIFIED_DOCTOR':
		case 'CERTIFIED_DOCTOR':
			return ENV.DOC_INTEGRAL_RULE
		case 'HIM':
			return ENV.HIM_INTEGRAL_RULE
		case 'MSL':
			return ENV.MSL_INTEGRAL_RULE
		case 'DZJ':
			return ENV.DZJ_INTEGRAL_RULE
		default:
			return ENV.DOC_INTEGRAL_RULE
	}
}

export const JOB_TITLE_LIST = ['住院医师', '主治医师', '副主任医师', '主任医师']