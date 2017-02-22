export const STATUS_CREATED = "CREATED" // 申请中
export const STATUS_REJECTED = "REJECTED" // 已驳回
export const STATUS_APPROVED = "APPROVED" // 等待打款
export const STATUS_PAID_SUCCESS = "PAID_SUCCESS" // 打款成功
export const STATUS_PAID_FAILED = "PAID_FAILED" //打款失败
export function statusToApplication(status) {
	switch(status) {
		case STATUS_CREATED:
			return "申请中"
		case STATUS_REJECTED:
			return "已驳回"
		case STATUS_APPROVED:
			return "等待打款"
		case STATUS_PAID_SUCCESS:
			return "打款成功"
		case STATUS_PAID_FAILED:
			return "打款失败"
	}
}