# TypeScript Cheatsheet


- **Integer**: `x = 5`
- **Float**: `y = 3.14`
- **String**: `name = "Alice"`
- **List**: `numbers = [1, 2, 3, 4, 5]`
- **Dictionary**: `person = {"name": "Alice", "age": 25}`

## Control Flow
### If Statements


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

