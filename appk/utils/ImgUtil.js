import * as HttpProps from '../middleware/HttpProps'
import {isNull, isEmpty} from './ObjectUtil'

const DEFAULT_FEMALE_IMAGES = "http://dzj-shared.oss-cn-shanghai.aliyuncs.com/default_avatar/default_female.png"
const DEFAULT_MALE_IMAGES = "http://dzj-shared.oss-cn-shanghai.aliyuncs.com/default_avatar/default_male.png"
export function selectHeadImg(profileImage,gender="MALE", expectedWidth, expectedHeight){
	if(!isNull(profileImage) && !isEmpty(profileImage)){
		if(expectedWidth && expectedHeight) {
			return `${HttpProps.IMG_ROOT}/${profileImage}@${expectedWidth}w_${expectedHeight}h.jpg`
		} else {
			return `${HttpProps.IMG_ROOT}/${profileImage}`
		}
		
	}else{
		if(gender === "FEMALE"){
			return DEFAULT_FEMALE_IMAGES
		}else{
			return DEFAULT_MALE_IMAGES
		}
	}
}

const RESIZE_HEIGHT_RATIO = 1.2
const CHOP_HEIGHT_RATIO = 1
const CIRCLE_RADIUS_RATION = CHOP_HEIGHT_RATIO * 0.5
export function circleImg(profileImage, gender="MALE", expectedWidth=200, expectedHeight=200) {
	let resizeHeight = Number.parseInt(expectedHeight * RESIZE_HEIGHT_RATIO)
	let chopHeight = Number.parseInt(expectedHeight * CHOP_HEIGHT_RATIO)
	let circleRadius = Number.parseInt(expectedHeight * CIRCLE_RADIUS_RATION)
	if(!isNull(profileImage) && !isEmpty(profileImage)){
		if(process.env.NODE_ENV === 'production')
			return `${HttpProps.IMG_ROOT}/${profileImage}@${resizeHeight}h.png?x-oss-process=image/resize,h_${resizeHeight},x-oss-process=image/crop,h_${chopHeight},x-oss-process=image/circle,r_${circleRadius}`
		else
			return `${HttpProps.IMG_ROOT}/${profileImage}?x-oss-process=image/resize,h_${resizeHeight},x-oss-process=image/crop,h_${chopHeight},x-oss-process=image/circle,r_${circleRadius}`
	}else{
		if(gender === "FEMALE"){
			return `${DEFAULT_FEMALE_IMAGES}?x-oss-process=image/resize,h_${resizeHeight},x-oss-process=image/crop,h_${chopHeight},x-oss-process=image/circle,r_${circleRadius}`
		}else{
			return `${DEFAULT_MALE_IMAGES}?x-oss-process=image/resize,h_${resizeHeight},x-oss-process=image/crop,h_${chopHeight},x-oss-process=image/circle,r_${circleRadius}`
		}
	}
}