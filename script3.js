// ASSIGNMENT 1: VARIABLES AND TYPES
// Question 1. What is the difference between var, let and const in javascript? Provide samples

function testvar() {
    console.log(a); // undefined hoisted but not initialized
    var a = 10;
    console.log(a); // 10 
}


function testlet() {
    console.log(b); 
let b = 20;
console.log(b); // 20
}

function testconst() {
const c = 30;
console.log(c); //30
}

// Question 2

let age = 25;
let charitablename = 'john';
console.log(charitablename + ' is ' + age + ' years old');

// Question 3.

let number = 25;
console.log(number); // ouput:25

number = 30; //reassuring the variable
console.log(number); // output: 30

const name = 'john'
console.log(name); //output: John

// Question 4: Given the String "100", convert it to a number and add 50 to it. Log the result to the console.

//let String ="100";
//let num = Number(str); // convert the string to a number

//let result = num + 50; // add 50
//console.log(result); // output: 1050

// ASSIGNMENT 2: FUNCTIONS
// Question 5

function greet(Oluwaseun) {
return 'hello, {oluwaseun}';
}
console.log(greet('Oluwaseun')); // Output: Hello,  Oluwaseun 

// Question 6

function multiply(num1, num2 = 2) {
    return num1 * num2;
}
console.log(multiply(5)); // Output: 10 (5 * 2, because num2 defaults to 2)
console.log(multiply (5, 3)); // Output : 15 (5 * 3)

// Question 7

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4)); // Output: 7

// ASSIGNMENT 3: IF-ELSE STATEMENT
// Question 8

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }   else {
        return "odd";
    }
}
console.log(checkEvenOdd(4)); // output: even
console.log(checkEvenOdd(7)); // Output: Odd

// Question 9

function checkNumber(num) {
    if (num > 0) {
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }

     }
     checkNumber (5); // Output: Positive
     checkNumber (-3); // Output: negative
     checkNumber (0); // Output: Zero

    // Question 10

    function getGrade(score) {
if (score >= 90) {
    console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C")
        } else if (score >= 60) {
            console.log("D");
            } else {
                console.log("F")
    }

    }
getGrade(95); // Output: A
getGrade(85); // Output: B
getGrade(75); // Output: C
getGrade(65); // Output: D
getGrade(50); // Output: F


     //Question 11

     function compareNumbers(a, b) {
    if (a > b) {
        console.log("a is greater");
        } else if (b > a) {
            console.log("b is greater");
            } else {
                console.log("a and b are aqual")
            }
    }
    compareNumbers (5,3); // Output: a is greater
    compareNumbers (2,4); // Output: b is greater
    compareNumbers (7,7); // Output: a and b are equal


    // Question 12

    function checkDiscount (age, hasStudentID) {
        if (age < 18 || hasStudentID) {
            console.log("Eligible For Discount");
    } else if (age > 18 && !hasStudentID) {
        console.log("Not Eligible for Discount");
    }
       
    }
checkDiscount(17, false); // Output : Eligoble for Discount
checkDiscount(22, false);// Output :  Not Eligoble for Discount

// ASSIGNMENT 4: ARRAY METHOD
// Question 13

let numbers = [10, 20, 30, 40, 50];

//add 60 to the end of the array 
numbers.push(60);

// remove the first element of the array 
numbers.shift();

console.log(numbers); // Output: [20, 30, 40, 50, 60]


     // Question 14
     let cities = ['New York', 'London', 'Tokyo', 'Paris',];
     // find the number of elments in the array 
     let numbersOfCities = cities.length;

     console.log(numbersOfCities); // Output: 4

     // Question 15

     let fruits = ['apple', 'banana', 'orange', 'mango'];
    // access the second element
    let secondFruit = fruits[1];

    // access the last element
    let lastfruits = fruits[fruits.lenght - 1];

    console.log(secondFruit); // output: banana
    console.log(lastfruits); // output: mango

    // Question 16 
    let Animals = ['cat', 'dog', 'elephant',];
    Animals.forEach(function(animal) {
console.log(animal)
    });
    

    // ASSIGNMENT 5: LOOP
    //Question 17
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

// Question 18


for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("the sum of numbers from 1 to 100 is:", sum);


// Question 19

let Numbers = [5, 10, 15, 20, 25];
for (let i =0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// Question 20

for (let i = 1; i <= 20; i++) {
if (i % 2 === 0) {
    console.log(i);
}
}

// Question 21

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}


// ASSIGNMENT 6: DOM
// Question 22

document.getElementById("message").innerText
="welcome to Javascript!";

// Question 23

function
changeBackgroundColor(newColor) {
    document.getElementById("box").style.backgroundColor = newColor;

}


// Question 24 

function addnewItem() {
    //create a new <li> element
    let newItem =
    document.createElement("li");
    // set the text content of the new <li> element
    newItem.textContent = "newItem";
// appendd the new <li> to the <ul> with the ID 'itemList'
    Document.getElementById("ItemList").appendchild(newItem);
}


// ASSIGNMENT 7: CLASS
// Question 25

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    describe() {
        console.log(`This Car is a ${this.brand} ${this.model}`);
    }
}
const mycar = new Car("Toyota", "Corolla");
mycar.describe(); //: This Car is a Toyota Corolla

// QUESTION 26

class person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new person("Olaleye", "Oluwaseun");
console.log(person1.getFullName()); // Output: Olaleye Oluwaseun

// Question 27

class Animal {
    makeSound() {
        console.log("Animal sound");
    }
}

class dog extends Animal {                     
    makeSound() {
        console.log("Bark");
    }
}
const genericAnimal = new Animal();
genericAnimal.makeSound(); // Output:

const mydog = new dog();
mydog.makeSound(); 
