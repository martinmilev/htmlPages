var calculation = '';

function addValue(i) {
	console.log(i);
    var screen = document.getElementById('screen');
    if (screen.value.match(/\d/) && screen.value != 0) {
		screen.value += i;
	} else {
		screen.value = i;
	}
	calculation += i;
}

function clr(){
	console.log('asdsa');
	var screen = document.getElementById('screen');
	screen.value = '0';
	calculation = '';
}

function addOperator(i) {
	console.log(i);
	var screen = document.getElementById('screen');
	screen.value = i;
	calculation += i;
}

function calculate() {
	console.log(calculation);
	var screen = document.getElementById('screen');
	calculation = eval(calculation);
	screen.value = calculation;
}