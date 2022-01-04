const calculatorScreen = document.querySelector('.calculator-screen');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear-screen');
const addition = document.querySelector('#addition');
const substraction = document.querySelector('#substraction');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const equals = document.querySelector('#equals');

sum = false;
substract = false;
multiply = false;
divide = false;
firstNumber = 0;
secondNumber = 0;
operationInProgress = false;

function tooManyNumbers() {
    if (calculatorScreen.textContent.length > 20) {
        document.querySelectorAll('button').forEach(elem => {elem.disabled = true;})
        calculatorScreen.textContent = "Too many numbers!!!";
        setTimeout(1000);
        setTimeout(() => {calculatorScreen.textContent = "Resetting in 3"}, 1000);
        setTimeout(() => {calculatorScreen.textContent = "Resetting in 2"}, 2000);
        setTimeout(() => {calculatorScreen.textContent = "Resetting in 1"}, 3000);
        setTimeout(() => {clearCalculator()}, 4000);
        setTimeout(() => {document.querySelectorAll('button').forEach(elem => {elem.disabled = false;})}, 4000);
    }
};

function clearCalculator() {
    resetOperations();
    calculatorScreen.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operationInProgress = false;
};

function eraseNumber() {
    calculatorScreen.textContent = calculatorScreen.textContent.slice(0, -1);
    if (calculatorScreen.textContent === "") {
        calculatorScreen.textContent = 0;
    };
};

function resetOperations() {
    sum = false;
    substract = false;
    multiply = false;
    divide = false;
};

function addNumber(number)  {
    tooManyNumbers();

    if (calculatorScreen.textContent == 0){
        calculatorScreen.textContent = "";
    };

    if (operationInProgress === true) {
        calculatorScreen.textContent = "";
        calculatorScreen.textContent += number.textContent;
        operationInProgress = false;
    } else { calculatorScreen.textContent += number.textContent;}
};

function sumNumber() {
    equalsResult();
    resetOperations();
    sum = true;
    firstNumber = parseInt(calculatorScreen.textContent);
    operationInProgress = true;
};

function substractNumber() {
    equalsResult();
    resetOperations();
    substract = true;
    firstNumber = parseInt(calculatorScreen.textContent);
    operationInProgress = true;
};

function multiplyNumber() {
    equalsResult();
    resetOperations();
    multiply = true;
    firstNumber = parseInt(calculatorScreen.textContent);
    operationInProgress = true;
};

function divideNumber() {
    equalsResult();
    resetOperations();
    divide = true;
    firstNumber = parseInt(calculatorScreen.textContent);
    operationInProgress = true;
};

function equalsResult() {
    secondNumber = parseInt(calculatorScreen.textContent);

    if (sum === true) {
        calculatorScreen.textContent = parseInt(firstNumber + secondNumber);
        firstNumber = parseInt(calculatorScreen.textContent);
    } else if (substract === true) {
        calculatorScreen.textContent = parseInt(firstNumber - secondNumber);
        firstNumber = parseInt(calculatorScreen.textContent);
    } else if (multiply === true) {
        calculatorScreen.textContent = parseInt(firstNumber * secondNumber);
        firstNumber = parseInt(calculatorScreen.textContent);
    } else if (divide === true) {
        calculatorScreen.textContent = parseInt(firstNumber / secondNumber);
        firstNumber = parseInt(calculatorScreen.textContent);
    } else { resetOperations() }

    resetOperations();
    operationInProgress = true;

    tooManyNumbers();
};



one.addEventListener('click', function() {addNumber(one)});
two.addEventListener('click', function() {addNumber(two)});
three.addEventListener('click', function() {addNumber(three)});
four.addEventListener('click', function() {addNumber(four)});
five.addEventListener('click', function() {addNumber(five)});
six.addEventListener('click', function() {addNumber(six)});
seven.addEventListener('click', function() {addNumber(seven)});
eight.addEventListener('click', function() {addNumber(eight)});
nine.addEventListener('click', function() {addNumber(nine)});
zero.addEventListener('click', function() {addNumber(zero)});
addition.addEventListener('click', function() {sumNumber()});
substraction.addEventListener('click', function() {substractNumber()});
multiplication.addEventListener('click', function() {multiplyNumber()});
division.addEventListener('click', function() {divideNumber()});
clear.addEventListener('click', function() {clearCalculator()});
equals.addEventListener('click', function() {equalsResult()});
erase.addEventListener('click', function() {eraseNumber()});