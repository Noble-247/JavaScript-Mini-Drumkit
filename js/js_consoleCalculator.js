// THIS IS A JAVASCRIPT CONSOLE CALCULATOR

/** Create an addition function */
function addNumbers(num1, num2) {
    return num1 + num2;
}

/** Create a subtraction function */
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

/** Create a multiply function */
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

/** Create a division function */
function divideNumbers(num1, num2) {
    return num1 / num2;
}

/** Create a Higher Order Function that takes any of the above functions as parameters */
function Calculator(num1, num2, operator) {
    return operator(num1, num2);
}

//CALL THE CALCULATOR FUNCTION
console.log(Calculator(10, 10, multiplyNumbers));