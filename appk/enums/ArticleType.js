export const ARTICLE_ACADEMIC="ACADEMIC"
export const ARTICLE_CASE_ANALYSE="CASE_ANALYSE"
export const ARTICLE_DIAGNOSIS_IDEA="DIAGNOSIS_IDEA"
export const ARTICLE_EMERGENCY_MEASURE="EMERGENCY_MEASURE"
export const ARTICLE_MEDICAL_SKILL="MEDICAL_SKILL"

export function typeToText(type) {
	switch(type) {
		case ARTICLE_ACADEMIC:
			return '学术论文'
		case ARTICLE_CASE_ANALYSE:
			return '病例剖析'
		case ARTICLE_DIAGNOSIS_IDEA:
			return '诊疗思想'
		case ARTICLE_EMERGENCY_MEASURE:
			return '应急措施'
		case ARTICLE_MEDICAL_SKILL:
			return '医学技巧'
	}
}

export const ALL_TYPES=[ARTICLE_ACADEMIC, 
							ARTICLE_CASE_ANALYSE, 
							ARTICLE_DIAGNOSIS_IDEA, 
							ARTICLE_EMERGENCY_MEASURE,
							ARTICLE_MEDICAL_SKILL]

export const UCG_ORIGINAL = "ORIGINAL"
export const UCG_PLATFORM_RELEASE = "PLATFORM_RELEASE"
export const UCG_TRANSHIPMENT = "TRANSHIPMENT"

export function typeUCGToText(type) {
	switch(type) {
		case UCG_ORIGINAL:
			return '用户原创'
		case UCG_PLATFORM_RELEASE:
			return '平台发布'
		case UCG_TRANSHIPMENT:
			return '外网转载'
	}
}

export const UCG_TYPES=[UCG_ORIGINAL, 
							UCG_PLATFORM_RELEASE, 
							UCG_TRANSHIPMENT]
