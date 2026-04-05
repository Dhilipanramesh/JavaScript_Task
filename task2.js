// 🔹 Section 1: Printing & User Interaction

// Printing personal details to console (basic console output)
console.log("Name: Dhilipan R");
console.log("Role: software developer");

// Alert is used to show a popup message to the user
alert("Welcome to JavaScript Session");

// confirm() returns true/false based on user choice (OK/Cancel)
let likeCoding = confirm("Do you like coding?");
console.log("User likes coding:", likeCoding);

// prompt() is used to take input from user
let favFood = prompt("Enter your favorite food:");
console.log("Favorite Food:", favFood);

// document.writeln() prints output directly on webpage UI
document.writeln("<h3>Good Evening Team 👋</h3>");


// 🔹 Section 2: Console Methods

// console.log() prints normal messages
console.log(2002);

// console.warn() prints warning message 
console.warn("This is a warning message");

// console.error() prints error message
console.error("Something went wrong!");

// console.clear() clears all previous console outputs
console.clear();


// 🔹 Section 3: Data Types

// String data type
let myName = "Dhilipan";
console.log("Type of myName:", typeof myName);

// Number data type
let age = 23;
console.log("Type of age:", typeof age);

// Boolean data type
let isFresher = true;
console.log("Boolean value:", isFresher);

// Undefined (variable declared but not assigned)
let notAssigned;
console.log("Undefined value:", notAssigned);

// Null (intentional empty value)
let emptyValue = null;
console.log("Null value:", emptyValue);


// 🔹 Section 4: Arrays

// Array stores multiple values in a single variable
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits:", fruits);

// Accessing first and last element
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// push() adds element to end of array
fruits.push("Pineapple");
console.log("After Adding:", fruits);

// pop() removes last element
fruits.pop();
console.log("After Removing:", fruits);

// length property gives total number of elements
console.log("Total Fruits:", fruits.length);


// 🔹 Section 5: Objects

// Object stores data in key-value pairs
let student = {
    name: "Dhilipan R",
    age: 23,
    course: "Computer Science Engineering",
    skills: ["Python", "Machine Learning", "JavaScript"], // nested array
    fruits: ["Apple", "Mango"]
};

// Accessing object property
console.log("Student Name:", student.name);

// Dynamically adding new property
student.college = "SRIT";
console.log("Updated Student Object:", student);

// Accessing nested array inside object
console.log("Access Nested Array:", student.fruits[0]);

// Updating existing property
student.age = 23;
console.log("Updated Age:", student.age);


// 🔹 Section 6: Operators

let num1 = 15;
let num2 = 4;

// Arithmetic operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Modulus gives remainder
console.log("Remainder:", num1 % num2);

// Exponent operator (power calculation)
console.log("Power:", num1 ** num2);


// 🔹 Section 7: Increment & Decrement

let a = 5;

// Post increment → first use, then increase
console.log("Post Increment (a++):", a++);
console.log("Value after Post Increment:", a);

let b = 5;

// Pre increment → first increase, then use
console.log("Pre Increment (++b):", ++b);

let c = 5;

// Difference demonstration
console.log("c++:", c++); // prints 5, then becomes 6
console.log("++c:", ++c); // becomes 7, then prints 7

let d = 5;

// Decrement reduces value by 1
console.log("Post Decrement (d--):", d--);
console.log("Value after Decrement:", d);


// 🔹 Important Logic Task (Understanding increment behavior)

let x = 5;
let y = x++;  // y = 5, x becomes 6
let z = ++x;  // x becomes 7, z = 7

console.log("Final x:", x);
console.log("Value of y:", y);
console.log("Value of z:", z);


// 🔹 Section 8: Real-Time Logic Tasks

// Checking voting eligibility using condition
let userAge = prompt("Enter your age:");
if(userAge >= 18){
    console.log(" You are eligible to vote");
}else{
    console.log(" You are not eligible to vote");
}

// Greeting user using input
let userName = prompt("Enter your name:");
console.log("Hello " + userName + ", welcome to my JavaScript task! 🚀");

// Finding highest marks using Math.max()
let marks = [82, 76, 91, 88, 79];
let highest = Math.max(...marks); // spread operator used
console.log("Highest Marks:", highest);

// Object representing categorized fruits
let fruitCategory = {
    tropical: ["Mango", "Pineapple", "Papaya"],
    citrus: ["Orange", "Lemon", "Mosambi"]
};

// Accessing object values
console.log("Tropical Fruit:", fruitCategory.tropical[0]);


// Combining prompt + array
let fav1 = prompt("Enter your 1st favorite fruit:");
let fav2 = prompt("Enter your 2nd favorite fruit:");
let fav3 = prompt("Enter your 3rd favorite fruit:");

// Storing user inputs in array
let favFruits = [fav1, fav2, fav3];

console.log("Your Favorite Fruits List:", favFruits);