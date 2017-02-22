export const STATUS_WAIT_TO_APPROVE = "WAIT_TO_APPROVE" // 等待审核
export const STATUS_APPROVED = "APPROVED" // 审核已通过
export const STATUS_REJECTED = "REJECTED" // 审核被拒绝
export const STATUS_IN_DISTRIBUTION = "IN_DISTRIBUTION" // 转诊中
export const STATUS_WAIT_TO_ASSESSMENT = "ANSWER_WAIT_TO_ASSESSMENT" // 已解答等待评价
export const STATUS_ANSWER_ACCEPTED = "ANSWER_ACCEPTED" // 解答已接受
export const STATUS_ARCHIVED = "ARCHIVED" // 已归档
export function statusToText(status) {
	switch(status) {
		case STATUS_WAIT_TO_APPROVE:
			return "待审核"
		case STATUS_REJECTED:
			return "已驳回"
		case STATUS_APPROVED:
			return "已审核"
		case STATUS_IN_DISTRIBUTION:
			return "已接诊"
		case STATUS_WAIT_TO_ASSESSMENT:
			return "待评价"
		case STATUS_ANSWER_ACCEPTED:
			return "已评价"
		case STATUS_UNPUBLISH:
			return "可发布"
		case STATUS_PUBLISHED:
			return "已发布"
		case STATUS_PUBLISHING:
			return "发布中"
		case STATUS_ARCHIVED:
			return "已归档"
	}
}


// historic case type
export const STATUS_UNPUBLISH = "UNPUBLISH"
export const STATUS_PUBLISHED = "PUBLISHED"
export const STATUS_PUBLISHING = "PUBLISHING"