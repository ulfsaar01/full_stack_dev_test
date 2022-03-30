let button1 = document.getElementById("problem1");
button1.addEventListener("click", clickButton1);

function clickButton1() {
  let first, second, result;
  first = parseFloat(prompt('Input the first number'));
  second = parseFloat(prompt('Input the second number'));
  result = multipleFunc(first, second);
  alert(`${first}*${second} = ${result}`);
}

////////////////////////////////////////////////
let button2 = document.getElementById("problem2");
button2.addEventListener("click", clickButton2);

function clickButton2() {
  let array = [], result;
  array = prompt('Input number of an array by comma').split(",");
  for (let i=0; i<array.length; i++) {
    array[i] = parseFloat(array[i]);
  }
  result = getLargestnumber(array);
  alert(result);
}

//////////////////////////////////////////////////
let button3 = document.getElementById("problem3");
button3.addEventListener("click", clickButton3);

function clickButton3() {
  let array = [
    1,2,3,undefined,4,null,5,0,6,false
  ], result;
  result = getValidValue(array);
  alert(result);
}

//////////////////////////////////////////////////
let button4 = document.getElementById("problem4");
button4.addEventListener("click", clickButton4);

function clickButton4() {
  let str, word, result;
  str = prompt("Input the string");
  word = prompt("Input a word");
  result = repeatCount(str, word);
  alert(`Repeated count: ${result}`);
}

//////////////////////////////////////////////////
let button5 = document.getElementById("problem5");
button5.addEventListener("click", clickButton5);

function clickButton5() {
  let  word, result;
  word = prompt("Input a word");
  result = checkPalindrome(word);
  alert(`Word "${word}" is ${result ? "" : "not "}palindrome`);
}

//////////////////////////////////////////////////
let button6 = document.getElementById("problem6");
button6.addEventListener("click", clickButton6);

function clickButton6() {
  let lastnumber, result;
  lastnumber = prompt("Input the last number");
  result = generateFizzBuzz(lastnumber);
  alert(result);
}