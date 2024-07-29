// JS CHEATSHEET
// Matus Stanko 07/2024

// Anotations
let first: string; // set type of variable

// Anotations in functions
function greet(noun: string) {
    console.log(`Hello, ${noun}!`);
  }

// Optional parameters
function greet(name?: string) { // If name is not defined, then print stranger
    console.log(`Hello, ${ name || 'stranger' }!`);
  }

// Default parameters
function exponentiation(power = 1) { // Power is equal to 1 if function called without parameter.
    console.log(4 ** power);
  }
  exponentiation(); // Prints: 4
  exponentiation(4); // Prints: 256

// Inferring Return Types: make sure that output is 
function factOrFiction() {
    return Math.random() >= .5 ? true : false; // Get random number. If >= 5 then return true, otherwise false
  }
  const myAnswer : boolean = factOrFiction(); // Making sure that output is boolean

// or set it in function
function trueOrFalse(value: boolean): boolean {
    if (value) {
      return true;
    }
  
    return false;
  }

// Void return type: If function has no return
function sayHello2(): void { 
    console.log('Hello!');
}

// ENUM type
enum MaritalStatus {
    Single,
    Married,
    Separated,
    Divorced
  };

  let employee: MaritalStatus = MaritalStatus.Single; // Making sure that employee value will be type from MaritalStatus

// String/number... enum types 
  enum ClassName {
    Freshman = 'FRESHMAN',
    Sophomore = 'SOPHOMORE',
    Junior = 'JUNIOR',
    Senior = 'SENIOR'
  }
  const studentClass: ClassName = ClassName.Junior; // studentClass must be from ClassName enum

// Enum variable assignment
enum MaritalStatus {
    Single = 'SINGLE',
    Married = 'MARRIED',
    Separated = 'SEPARATED',
    Divorced = 'DIVORCED',
    Widowed = 'WIDOWED'
  };
  
  // Assign a string to a string enum type
  let eligibility: MaritalStatus;
  eligibility = 'SEPARATED';
  // Error: Type '"SEPARATED"' is not assignable to type 'MaritalStatus'.
  eligibility = MaritalStatus.Separated;  // No error

// OBJECT type
// Define an object type for car
let car: {
    make: string, 
    model: string, 
    year: number};
car = {make: 'Toyota', model: 'Camry', year: 2020}; // Adding 1st
car = {make: 'Chevrolet', model: 'Monte Carlo', year: 1995}; //Adding 2nd

// Type Alias: to avoid repeating make,model,year... use create type Student
type Student = {
    name: string,
    age: number,
    courses: string[]
  };
  
  let boris: Student = {name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript']};
