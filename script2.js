// funtion calculate (5 + 10)  {

function calculate (num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
            case '-':
                return num1 - num2;
                case '*':
                    return num1 * num2;
                    case '/':
                        return num2 !== 0 ? num1 : 'cannot divide by zero';
                        default:
                            return 'invalid operator';   
}
}
console.log(calculate(10, 5, '+')); // output : 15
console.log(calculate(8, 2, '-')); // output : 16
console.log(calculate(3, 4, '*')); // output : 12
console.log(calculate(20, 4, '/')); // output : 5
console.log(calculate(5, 10, '/')); // output : "inavalid operator"

// Assignment2: Temperature Converter Function
// create a javascript function named convertedToFahrenheit that takes 
// Celsius as parameter, convert it to Fahrenheit,and return the Formula F =(C* 9/5) + 32
function converToFahrenheit (celsius) {
    return (celsius * 9/5) + 32;
}
let result = converToFahrenheit(50); 
console.log(result)

// question 2
let age = 25;
let charitablename = 'john';
console.log(charitablename + ' is ' + age + ' years old');







// Assignment 3
// Write a javascript function named findmax that takes an array of numbers as a parameter,
// The function should be iterate through the array and return the maximum number

function findmax (array) {
    let max = array[0]; 
    for (let i = 1; i < array.Lenght; i++) {
        if(array[i] > max) {
            max = array[i];
    }
}
    return max;
}
// result 
let numbers = [6, 14, 5, 25, 30];
console.log(findmax(numbers)); // output: 6
let maxnumbers = [-1, -4, -6, -9, -5];
console.log(findmax(maxnumbers)); // exected output: -1

