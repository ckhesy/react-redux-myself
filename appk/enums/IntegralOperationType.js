export const STATUS_SOLVE_CASE = "solveCase" // 解答病历
export const STATUS_ADD_CASE = "addCase" // 上传病历
export const STATUS_DISTRIBUTE_CASE = "distributeCase" // 转诊病历
export const STATUS_PURCHASE_CASE = "PurchaseCase" // 购买病历
export const STATUS_SALE_CASE = "SaleCase" //出售病历
export const STATUS_POINT_WITHDRAW = "pointWithdraw" //积分变现
export function statusToOperationType(status) {
	switch(status) {
		case STATUS_SOLVE_CASE:
			return "解答病历"
		case STATUS_ADD_CASE:
			return "上传病历"
		case STATUS_DISTRIBUTE_CASE:
			return "转诊病历"
		case STATUS_PURCHASE_CASE:
			return "购买病历"
		case STATUS_SALE_CASE:
			return "出售病历"
		case STATUS_POINT_WITHDRAW:
			return "积分变现"
	}
}