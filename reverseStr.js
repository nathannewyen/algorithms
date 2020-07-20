// Reverse string

str = 'hello';
function reverseStr1(str) {
	let splitStr = str.split('');
	let reverseStr = splitStr.reverse();
	let joinStr = reverseStr.join('');
	return joinStr;
}

function reverseStr2(str) {
	return str.split('').reverse().join('');
}

function reverseStr3(str) {
	var newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

console.log(reverseStr3(str));
