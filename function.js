
function multipleFunc(first, second) {
	function strip(number) {
	    return parseFloat(number.toPrecision(12));
	}
	function multipleTwoIntegers(x, y) { // the first number is greater than the second number
		let sum = 0;
		for (let i=0; i<y; i++) {
			sum += x;
		}
		return strip(sum);
		// if (y === 0)
		// 	return 0;
		// else
		// 	return x + multipleTwoIntegers(x, y-1);
	}
	let diff = 0.0000000001;
	let pow_total = 0;
	let abs_first, abs_second;
	let result;
	abs_first = Math.abs(first);
	abs_second = Math.abs(second);
	while((Math.ceil(abs_first) - abs_first) > diff) {
		abs_first = multipleTwoIntegers(abs_first, 10);
		pow_total ++;
	}
	while((Math.ceil(abs_second) - abs_second) > diff) {
		abs_second = multipleTwoIntegers(abs_second, 10);
		pow_total ++;
	}
	if (abs_first > abs_second)
		result = multipleTwoIntegers(abs_first, abs_second);
	else
		result = multipleTwoIntegers(abs_second, abs_first);
	if (first < 0 )
		result = -result;
	if (second < 0)
		result = -result;
	if (pow_total !== 0) {
		let result_str = "" + result;
		if (result_str.length > pow_total) {
			result_str = result_str.substr(0, result_str.length - pow_total) + "." + result_str.substr(result_str.length - pow_total);
		}
		else {
			result_str = "0." + "0".repeat(pow_total - result_str.length) + result_str;
		}
		result = parseFloat(result_str);
	}
	return result;
}

function getLargestnumber(array) {
	let largest = -1;
	for (let i=0; i<array.length; i++) {
		if (array[i] > largest) {
			largest = array[i];
		}
	}
	return array.length > 0 ? largest : "Empty Array";
}

function getValidValue(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if(array[i] !== null && array[i] !== undefined && array[i] !== 0 && array[i] !== false) {
			result.push(array[i])
		}
	}
	return result;
}

function repeatCount(str, word) {
	return str.length > 0 ? str.split(word).length - 1 : 0;
}

function checkPalindrome(word) { // To be fastest
	let len = word.length;
	let halflen = Math.floor(len / 2);
	for (let i = 0; i < halflen; i++) {
		if (word[i] !== word[len - i - 1]) {
			return false;
		}
	}
	return true;
	// return str == str.split('').reverse().join('');
}

function generateFizzBuzz(lastnumber) {
	let result = [];
	for (let i=0; i<=lastnumber; i++) {
		result.push(i%(3*5) ? i%3 ? i%5 ? i : 'buzz' : 'fizz' : 'fizz buzz');
	}
	return result;
}