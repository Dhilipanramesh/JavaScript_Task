// Task 1 
let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

//  1. Calculate total price using reduce
let total = cart.reduce((acc, item) => {
  return acc + (item.price * item.qty);
}, 0);

console.log("Total Price:", total);


//  2. Print only products above 1000 price using filter
let expensiveProducts = cart.filter(item => item.price > 1000);

console.log("Products above 1000:", expensiveProducts);


//  3. Get all product names in uppercase using map
let productNamesUpper = cart.map(item => item.name.toUpperCase());

console.log("Product Names (Uppercase):", productNamesUpper);


// Task 2

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

//  1. Find failed students (marks < 50)
let failedStudents = students.filter(student => student.marks < 50);

console.log("Failed Students:", failedStudents);


//  2. Check if any student got distinction (>80)
let hasDistinction = students.some(student => student.marks > 80);

console.log("Any Distinction:", hasDistinction);


//  3. Check if all students passed (>35)
let allPassed = students.every(student => student.marks > 35);

console.log("All Passed:", allPassed);


// 4. Find first student who failed
let firstFailed = students.find(student => student.marks < 50);

console.log("First Failed Student:", firstFailed);



// Task 3

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

//  1. Increase salary by 10% using map
let updatedSalaries = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.10
}));

console.log("After 10% Hike:", updatedSalaries);


//  2. Get employees with salary > 30000
let highSalary = employees.filter(emp => emp.salary > 30000);

console.log("Salary > 30000:", highSalary);


//  3. Calculate total salary expense
let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);

console.log("Total Salary Expense:", totalSalary);


//  4. Sort employees by highest salary
let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Sorted by Highest Salary:", sortedEmployees);


// Task 4
let products = ["Laptop", "Mobile", "Tablet", "Camera"];

//  1. Check if "Mobile" exists using includes
let hasMobile = products.includes("Mobile");

console.log("Is Mobile موجود?", hasMobile);


//  2. Convert all to lowercase
let lowerCaseProducts = products.map(item => item.toLowerCase());

console.log("Lowercase Products:", lowerCaseProducts);


//  3. Find index of "Tablet"
let tabletIndex = products.indexOf("Tablet");

console.log("Index of Tablet:", tabletIndex);


//  4. Convert array to string using join("-")
let productString = products.join("-");

console.log("Joined String:", productString);


//Task 5

//  1. Hardcoded DOB (YYYY-MM-DD format)
let dob = new Date("2004-04-10");

//  2. Get current date
let today = new Date();

//  3. Calculate age
let age = today.getFullYear() - dob.getFullYear();

// Adjust if birthday not yet occurred this year
let monthDiff = today.getMonth() - dob.getMonth();

if (
  monthDiff < 0 || 
  (monthDiff === 0 && today.getDate() < dob.getDate())
) {
  age--;
}

//  4. Print result
console.log(`You are ${age} years old`);




// task 6
let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

//  Input (can replace with prompt in real app)
let inputUsername = "admin";
let inputPassword = "1234";

//  1. Check if user exists using find
let foundUser = users.find(user => user.username === inputUsername);

//  2. Validate username & password
if (foundUser && foundUser.password === inputPassword) {
  console.log("Login Success ");
} else {
  console.log("Invalid Credentials ");
}


//Task 7
let numbers = [10, 15, 20, 25, 30];

//  1. Get all even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


//  2. Check if any odd number exists
let hasOdd = numbers.some(num => num % 2 !== 0);

console.log("Any Odd Number:", hasOdd);


//  3. Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);

console.log("All Even:", allEven);


//  4. Find first number > 20
let firstGreaterThan20 = numbers.find(num => num > 20);

console.log("First Number > 20:", firstGreaterThan20);


// task 8
let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

//  1. Total revenue of delivered orders
let totalDeliveredRevenue = orders
  .filter(order => order.status === "delivered")
  .reduce((acc, order) => acc + order.amount, 0);

console.log("Total Delivered Revenue:", totalDeliveredRevenue);


//  2. Get all pending orders
let pendingOrders = orders.filter(order => order.status === "pending");

console.log("Pending Orders:", pendingOrders);


//  3. Check if any order > 1000
let hasHighValueOrder = orders.some(order => order.amount > 1000);

console.log("Any Order > 1000:", hasHighValueOrder);


//  4. Sort orders by amount (ascending)
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Sorted Orders (Ascending):", sortedOrders);
