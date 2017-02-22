export const ARTICLE_DRAFT="DRAFT"
export const ARTICLE_PUBLISHING="PUBLISHING"
export const ARTICLE_PUBLISHED="PUBLISHED"

export function statusToText(status) {
	switch(status) {
		case ARTICLE_DRAFT:
			return '可发布'
		case ARTICLE_PUBLISHING:
			return '发布中'
		case ARTICLE_PUBLISHED:
			return '已发布'
	}
}