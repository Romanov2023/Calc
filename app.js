/*let num = 42
let firstName = 'Pie'
const isProgrammer = true
*/

/*firstName = 'Cucumber'
isProgrammer = false // error
*/

/*
группа комментариев
*/

function add() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 + num2;
	document.getElementById("result").innerHTML = "Результат: " + result;
}

function subtract() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 - num2;
	document.getElementById("result").innerHTML = "Результат: " + result;
}

function calculate() {
	add();
	subtract();
}