# TypeScript Cheatsheet

## Anotations
Specify type of variable

#### Variable
```typescript
let first: string; // Set variable 'first' to be string
```
#### Variable in function + optional
- **?** Optional argument of function
```typescript
function greet(name?: string) { // optional
    console.log(`Hello, ${ name || 'stranger' }!`);
  }
```
#### Default parameters
if parameter not provided, then assume its value
```typescript
function exponentiation(power = 1) { 
    // Power is equal to 1 if function called without parameter
    console.log(4 ** power);
  }
  exponentiation(); // Prints: 4 because 4**1 = 4
  exponentiation(4); // Prints: 256, because 4**4 = 256
```

#### Inferring return type
Specify type of function output --> return
```typescript
function trueOrFalse(value: boolean): boolean { 
    // take boolean as a parameter and return also boolean
    if (value) {
      return true;
    }
  
    return false;
  }
```

### Void return type
Function has no return, then type is void
```typescript
function sayHello2(): void { 
    console.log('Hello!');
}
```

### Enum type
If I want variable, that will be some specific type (other than number or string...).
```typescript
// Create enum with 4 different types
enum MaritalStatus {
    Single,
    Married,
    Separated,
    Divorced
  };

// Make sure that variable employee will be Single or Married or Separated or Divorced type
let employee: MaritalStatus;
```

#### Enum string assignment
Also works with types that are strings
```typescript
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
```

## Objects

### Defining object
```typescript
let car: {
    make: string, 
    model: string, 
    year: number};

car = {make: 'Toyota', model: 'Camry', year: 2020}; // Adding 1st
car = {make: 'Chevrolet', model: 'Monte Carlo', year: 1995}; //Adding 2nd
```
### Type Alias
To make sure that new variable fits the type's structure. In this case it has name age ane courses as a string, number and list of strings.
```typescript
type Student = {
    name: string,
    age: number,
    courses: string[]
  };
  
let boris: Student = {name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript']};
```

## Function types
While passing function (add) as a parameter to function (mathTutor), I want to make sure that parameter (function add) is taking 2 numbers and returns number.
```typescript
function add(a, b){return a+b }

 type OperatorFunction = (a: number, b: number) => number //Define type, where input are 2 number, output number
 
 function mathTutor(operationCallback: OperatorFunction) { // Set type to OperatorFunction!
   console.log("Let's learn how to", operationCallback.name,'!');
   let value25 = operationCallback(2,5);
   console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
   console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
   console.log('Now fill out this worksheet.');
 }
```

## Generic types
Define own type and also structure
```typescript
type Family<T> = { // Type Family with parents, mate and children. T will define what type (number or string or ...)
  parents: [T, T], 
  mate: T, 
  children: T[]
};

let theFamily: Family<number> = { // This case It will be numbers in structure of Family
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};
```

### Generic types in functions


```typescript
// Function with parameter value in type of T, and parameter n in type of number.
// Expect list of T as a output.
function getFilledArray<T>(value: T, n: number): T[] { 
  return Array(n).fill(value);
}

let stringArray: string[]; 
let numberArray: number[];

stringArray = getFilledArray<string>('hi',6); // Passing string 'hi' as a T and 6 as a number. stringArray is type string[] so is output of the function: T[] is string[] in this case.
// The same with number as parameter, and list of number as output
numberArray = getFilledArray<number>(9,6); 


let personArray: {name: string, age: number}[]; // personArray is array of objects with name, age properties
let coordinateArray: [number, number][]; // coordinateArray is array of arrays with 2 numbers

// T is object with name: string and age: number in this case. 
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6); 
// T is Array of 2 numbers in this case --> 3 and 4. Output is array with 6 array of 3,4

//So output should be: [[3,4],[3,4],[3,4],[3,4],[3,4],[3,4]]
coordinateArray = getFilledArray<[number, number]>([3,4],6); // array with two numbers
```

## Unions
If variable can have more types. For example number or string.
```typescript
let statement: number | string; // statement could be number or string and still valid
```

### Inferred union return type
Define output of the function (could be more types). For example object or string.
```typescript
// Define User type
type User = { 
  id: number;
  username: string;
};

function createUser() { // Function that returns object or string.
  const randomChance = Math.random() >= 0.5; // Get random number
  if (randomChance) {  // If random number >= 0.5 then return object
    return { id: 1, username: 'nikko' }; 
  } else { 
    return 'Could not create a user.'; // Else return string
  }
}

// Calling function and expecting object in 'User' type or string
let userData: User | string = createUser() 
```

### Type guards
If statements to check type
```typescript
// Create Cat and Fish types.
type Cat = {
  name: string;
  run: () => string;
}
type Fish = {
  name: string;
  swim: () => string;
}

// Constant variable object that has 2 properties. Name as a string and function that returns string.
const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

// Function that takes parameter 'pet' that must be type of Cat or Fish
function move(pet: Cat | Fish) {
  if('swim' in pet){ // Check if pet has 'swim' method. If possitive, then return call on swim method.
    return pet.swim();
  } if ('run' in pet){// Check if pet has 'run' method. If yes then call it and return output (string)
    return pet.run();
  }
}

console.log(move(siameseCat)) // prints pitter pat
```

## Interfaces
Interface is used to form shape of objects (like type) but it can be merged or extended.
Its not using = sign like type.
```typescript
// Using type
type Alias = string | number;
type Person = {
  name: string;
  age: number;
};

// Using interface
interface Animal {
  species: string;
  age: number;
}
interface Animal {
  name: string; // Merges with previous definition
}

// Extending
interface Dog extends Animal {
  breed: string;
}
```

### Interfaces and classes
Creating 'new' interface inside of class, using already existing interface.
```typescript
// Define the Directory interface with an addFile method
interface Directory {
  // method addFile takes name as a string and return nothing
  addFile: (name: string) => void;
}

// Implement the Directory interface in the DesktopDirectory class
class DesktopDirectory implements Directory {
  // Implement the addFile method from the Directory interface to print Adding file: filename
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  // Add an additional method specific to this class
  // Still implementing Directory interface, now with new method that takes string and return string.
  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

// Create an instance of DesktopDirectory
const Desktop = new DesktopDirectory();

// Use the methods defined in DesktopDirectory
Desktop.addFile('lesson-notes.txt'); // prints Adding file...
Desktop.showPreview('lesson-notes.txt');// prints Opening ....
```

### Extending Interfaces

```typescript
// Defining interface Human with 2 methods
interface Human { 
  name: string; // name is string
  hobbies: string[]; // hobbies is array of strings
}

// Interface Developer will use already existing Human interface and extend it with 
// its own method code, that if function that has no return and no parameters.
interface Developer extends Human { 
  code: () => void;
}

// New constant variable object of type 'Developer'.
// object has all 3 methods, so its in correct structure as Developer.
const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

// Call the 'code' method of the 'me' object
me.code(); // Outputs: Headphones on. Coffee brewed. Editor open.
```

## Index signatures
Usually string and number (like key:value pairs)

```typescript
// Getting info from API in specific output

/*
output will look like this, so I need to declare interface with signature.
{
  'shopping': 150,
  'food': 210,
  'utilities': 100
}
*/

interface Budget {  
  [category: string]: number // category must be string and value must be number
}

//async means that function will wait until it get some output. 
async function getBudget() { 
  // new constant variable result, that needs to be in type of budget. Wait for API output
  const result: Budget = await getBudgetAsync(); 
  console.log(result); // print output
}

getBudget();
```

## Optional type members
? means that program will accept if this parameter wont be defined. Its optional

```typescript
interface UserNameOptions {
  firstName?: string; // first name is optional
  lastName?: string; // last name is optional
  username: string // username is mandatory
}

// parameter options is type of interface UserNameOptions
function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) { // If user entered firstname and lastname, greet
    return console.log(`${options.firstName} ${options.lastName}`);
  }
  // In both cases print username
  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
}) // this will print first name, last name and username

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
}) // this will print only username, since last name wasn't defined
```


# Create new project

### Create new folder and ts file
```
mkdir 'folder_name'
touch 'folder_name/filename.ts'
```

### Install typescript locally inside of project
#### Install packages locally
This creates packages.json, when I can see typescript version as dependency
'''
npm init --yes
'''
#### Install typescript as dev dependency
This creates node_models and package-lock.json
'''
npm install --save-dev typescript
'''

To run the instance of typescript installed as a dependency of our project, we’ll need to add a script to package.json. Under the scripts key in package.json, add the following "tsc" command:
'''json{
  // ...
  "scripts": {
    "tsc": "tsc",
    // ...
  },
  // ...
}
'''
By adding this "tsc" script, the npm command will find and run the instance of tsc installed in node_modules.

#### Generate tsconfig.json file
'''
npm run tsc -- --init
'''
Here’s what this command accomplishes:

- **npm run tsc:** This runs the "tsc" script in package.json, which runs the instance of tsc installed as a dependency of our project.
- **--:** This allows us to pass flags to the "tsc" script in package.json.
- **--init:** This is TypeScript CLI’s initialization flag, which will produce a tsconfig.json file.

#### Running typescript
'''
npm run tsc
'''

#### Automatically restart tsc after some change
'''
npm run tsc -- --watch
'''

#### Configurations
Get the basic configuration with:
'''
npm install --save-dev @tsconfig/recommended
'''