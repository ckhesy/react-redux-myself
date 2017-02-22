import * as LocalCache from './LocalCache'
import * as HttpProps from '../../middleware/HttpProps'
//import 'whatwg-fetch'

const DZJ_ADDRESS_RAW = 'DZJ_ADDRESS_RAW'
const DZJ_ADDRESS_IN_OBJ = 'DZJ_ADDRESS_IN_OBJ'

export class AddressStore {
	constructor() {
		let self = this
		self.rawAddress = LocalCache.getAsObject(DZJ_ADDRESS_RAW)
		self.addressInObj = LocalCache.getAsObject(DZJ_ADDRESS_IN_OBJ)
		self.rawAddress || loadAddressStore((raw, rawInObj) => {
												self.rawAddress = raw
												self.addressInObj = rawInObj
											})
	}

	addressByDistrictCode(districtCode) {
		if(districtCode && districtCode !== 0) {
			try {
				let provinceCode = Math.floor(districtCode/10000) * 10000
				let cityCode = Math.floor(districtCode/100) * 100
				let province = this.addressInObj[provinceCode]
				let provinceName = province ? province.name : ''
				let cityName = province ? province.subDivisions[cityCode].name : ''
				let districtName = province ? province.subDivisions[cityCode].subDivisions[districtCode].name : ''
				return `${provinceName}${cityName}${districtName}`
			} catch(err) {
				console.log(err)
				return ''
			}
		} else {
			return ''
		}
	}

	getAddressInObj() {
		return this.addressInObj
	}

	getRawAddress() {
		return this.rawAddress
	}
}

export function loadAddressStore(callback) {
	fetch(`${HttpProps.API_ROOT}/bdc/division/provinces`)
	.then(HttpProps.validateStatus)
	.then(HttpProps.parseJSON)
	.then(result => {
		let addressInObj = transform(result.data)
		LocalCache.setObject(DZJ_ADDRESS_RAW, result.data)
		LocalCache.setObject(DZJ_ADDRESS_IN_OBJ, addressInObj)
		callback && callback(result.data, addressInObj)
	})
	.catch(err => {
		console.error(err)
	})
}

function transform(rawAddress) {
	let transformed = [...rawAddress]
	transformed = transformed.reduce((obj, curItem) => {
		curItem = Object.assign({}, curItem, {
			subDivisions: curItem.subDivisions && curItem.subDivisions.reduce((obj, subDivision) => {
				subDivision = Object.assign({}, subDivision, {
					subDivisions: subDivision.subDivisions && subDivision.subDivisions.reduce((obj, subDivision) => {
						return Object.assign({}, obj, {
							[subDivision.code]: subDivision
						})
					}, {})
				})

				return Object.assign({}, obj, {
					[subDivision.code]: subDivision
				})
			}, {})
		})

		return Object.assign({}, obj, {
			[curItem.code] : curItem
		})
	}, {})
	return transformed
}
