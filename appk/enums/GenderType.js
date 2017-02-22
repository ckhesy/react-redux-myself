export const MALE = "MALE" 
export const FEMALE = "FEMALE" 
export function toText(genderType) {
	switch(genderType) {
		case MALE:
			return '男'
		case FEMALE:
			return '女'
	}
}
