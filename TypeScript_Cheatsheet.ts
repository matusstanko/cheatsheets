// TS CHEATSHEET
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

  
// Function types: To define my own type
 function add(a, b){return a+b }

 type OperatorFunction = (a: number, b: number) => number //Define type, where input are 2 number, output number
 
 function mathTutor(operationCallback: OperatorFunction) { // Set type to OperatorFunction!
   console.log("Let's learn how to", operationCallback.name,'!');
   let value25 = operationCallback(2,5);
   console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
   console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
   console.log('Now fill out this worksheet.');
 }
 

// Generic types: To define type and also structure of type
type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};
type Family<T> = { // firstly list of 2 things, then thing and then thing list (size not defined)
  parents: [T, T], mate: T, children: T[]
};

let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let aFamily: Family<Human> = { // Type is Family, but now we have object with name, job
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = { // Type is Family, but now we have object with name, tailWagSpeed
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};


// Generic functions: To use more types in one function
function getFilledArray<T>(value: T, n: number): T[] { // value is type of T 
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

stringArray = getFilledArray<string>('hi',6); // value parameter to function is <string>
numberArray = getFilledArray<number>(9,6); // value parameter is number
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6); // object with name, age as numbers
coordinateArray = getFilledArray<[number, number]>([3,4],6); // array with two numbers



// Unions
function printNumsAndStrings(statement: number | string) { // type can be number or string
  console.log(`ℹ️ LOG:: ${statement}`);
}

// Inferred Union Return Types: To define output of function using self defined type
type User = { // Self defined type
  id: number;
  username: string;
};

function createUser() { // Function that returns string or object defined as User.
  const randomChance = Math.random() >= 0.5;
  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

let userData: User | string = createUser() // userData must be type: string or User: {id:number, username: string}


// Type guards: If statements to check type. if(typeof arg === 'string'){...}

//
type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

function move(pet: Cat | Fish) {
  if('swim' in pet){
    return pet.swim();
  } if ('run' in pet){
    return pet.run();
  }
}

console.log(move(siameseCat)) // prints pitter pat

// Interfaces: interface can only be used to type objects
// Write an interface here
interface Run{
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `)
}

updateRunGoal({
  miles: 5,
})


// Interfaces and Classes
// Write an interface here
interface Directory { // Interface with add file
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory{ // Class that implements Directory type
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');

// Composed types: Nested 
interface Directory { 
  addFile: (name: string) => void;
  config: Config 
}

interface DefaultConfig {
  encoding: string,
  permissions: string
}
interface Config {
  default: DefaultConfig
}
//THIS CAN BE ALSO WRITTEN AS:
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    }
  }
}


class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);

// Extending Interfaces

interface Human { // Defining interface human
  name: string;
  hobbies: string[];
}

interface Developer extends Human { // Adding human to developer and adding 'code'
  code: () => void;
}
const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();


// Index signatures

import { getBudgetAsync } from './api';

/*

output will look like this, so I need to declare interface with signature.

{
  'shopping': 150,
  'food': 210,
  'utilities': 100
}

*/

interface Budget {  
  [category: string]: number
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();



// Optional Type Members

interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  username: string
}


function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})