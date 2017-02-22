export function format2YYYYMMDD(dateUTC) {
	let dateVal = dateUTC ? new Date(dateUTC) : new Date()
    var year = dateVal.getFullYear();
    var month = dateVal.getMonth() + 1;
    var date = dateVal.getDate();
    return year + "-" + 
    		fixZero(month, 2) + "-" + 
    		fixZero(date, 2)
}

export function format1YYYYMMDD(dateUTC) {
    let dateVal = dateUTC ? new Date(dateUTC) : new Date()
    var year = dateVal.getFullYear();
    var month = dateVal.getMonth() + 1;
    var date = dateVal.getDate();
    return year + "." + 
            fixZero(month, 2) + "." + 
            fixZero(date, 2)
}

export function formatDate(dateUTC) {
	let dateVal = dateUTC ? new Date(dateUTC) : new Date()
    var year = dateVal.getFullYear();
    var month = dateVal.getMonth() + 1;
    var date = dateVal.getDate();
    var hours= dateVal.getHours();
    var minutes= dateVal.getMinutes();
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
    return year + "-" + 
    		fixZero(month, 2) + "-" + 
    		fixZero(date, 2) + " " + 
    		hours + ":" + 
    		minutes;
}

export function formatSpecialToday(dateUTC) {
	if(!dateUTC || !isDateToday(dateUTC)) {
		return formatDate(dateUTC)
	}
	let date = new Date(dateUTC)
    var hours= date.getHours();
    var minutes= date.getMinutes();
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
   	return `今天 ${hours}:${minutes}` 
}

function isDateToday(dateUTC) {
	let now = new Date().toDateString()
	let date = new Date(dateUTC).toDateString()

	return now === date
}

function fixZero(num, length) {
	var str = "" + num;
	var len = str.length;
	var s = "";
	for (var i = length; i-- > len;) {
	    s += "0";
	}
	return s + str;
}

// 2016-09-08 -> 2016.09
export function format2YYYYMM(dateVal) {
    let dateArr = dateVal.split("-")
    var year = dateArr[0];
    var month = dateArr[1];
    return `${year}.${month}`
}
