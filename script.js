// complete the given function

function palindrome(str){


	let flag = true;
    str = str.toLowerCase();  	
	for(let i=0; i<=parseInt(str.length/2); i++) {
		if(str[i] != str[str.length-1-i]) {
			flag = false;
			break;
		}
	}
	return flag;
}
module.exports = palindrome
