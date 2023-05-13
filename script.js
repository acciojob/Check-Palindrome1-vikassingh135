// complete the given function

function palindrome(str){

	let flag = true;
	for(let i=0; i<str.length/2; i++) {
		if(str[i] != str[str.length-1-i]) {
			flag = false;
			break;
		}
	}

	return flag;

}
module.exports = palindrome
