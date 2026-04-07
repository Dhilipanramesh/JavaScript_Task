//  User Input
let name = prompt("Enter Name:");
let age = prompt("Enter Age:");
let salary = prompt("Enter Monthly Salary:");
let loanAmount = prompt("Enter Loan Amount:");

// Type Conversion
let ageNum = Number(age);
let salaryNum = Number(salary);
let loanAmountNum = Number(loanAmount);

//  Store output
let result = "";

//  Before Conversion (actual values)
result += "Before Conversion:\n";
result += "Name: " + name + "\n";
result += "Age: " + age + "\n";
result += "Salary: " + salary + "\n";
result += "Loan Amount: " + loanAmount + "\n\n";

// After Conversion (converted values)
result += "After Conversion:\n";
result += "Name: " + name + "\n"; // name remains same
result += "Age: " + ageNum + "\n";
result += "Salary: " + salaryNum + "\n";
result += "Loan Amount: " + loanAmountNum + "\n\n";

//  Eligibility
let isEligible = (ageNum >= 21 && ageNum <= 60 && salaryNum >= 25000);
result += (isEligible ? "Eligible ✅\n\n" : "Not Eligible ❌\n\n");

//  EMI
let emi = loanAmountNum;
emi /= 12;

result += "EMI: " + emi + "\n\n";

//  Loan Category
let loanCategory;

if (loanAmountNum > 500000) {
    loanCategory = "High Loan";
} else if (loanAmountNum > 200000) {
    loanCategory = "Medium Loan";
} else {
    loanCategory = "Low Loan";
}

result += "Loan Category: " + loanCategory + "\n";

//  Risk Level
let riskLevel = (salaryNum > 50000) ? "Low Risk" : "High Risk";
result += "Risk Level: " + riskLevel + "\n";

//  Customer Type
let customerType;

switch (true) {
    case (emi > 40000):
        customerType = "Premium Customer";
        break;
    case (emi > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

result += "Customer Type: " + customerType;

//  Display on screen
document.body.innerText = result;