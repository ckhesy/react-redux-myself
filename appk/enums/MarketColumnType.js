export const LATEST="latest"
export const WEEKHOT="weekHot"
export const INTEREST="interest"

export function switchCaseColumn(column,branch){
	switch(column){
		case 'latest':
			return "最新"
		case 'weekHot':
			return "本周热门"
		case 'interest':
			return "猜你感兴趣"
		default:
			return matchBranch(column,branch)
	}
}

function matchBranch(column,branch){
	return branch.map((ele)=>{
				if(column==ele.code){
					return ele.name
				}
			})
}

export function switchAcademicColumn(column,subject){
	switch(column){
		case 'latest':
			return "最新"
		case 'weekHot':
			return "本周热门"
		case 'interest':
			return "猜你感兴趣"
		default:
			return matchSubject(column,subject)
	}
}
function matchSubject(column,subject){
	return subject.map((ele)=>{
				if(column==ele.id){
					return ele.name
				}
			})
}