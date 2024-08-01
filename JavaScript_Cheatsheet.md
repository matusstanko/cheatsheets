# JavaScript Cheatsheet
Matúš Stanko 07/2024
Based on [codecademy.com/Introduction-to-JavaScript](https://www.codecademy.com/enrolled/courses/introduction-to-javascript)

## Variables
- **var** before ES6 
- **let** for block scope
- **const** can't be changed 
```javascript
var age; 
let weight; 
const numberOfFingers = 20; 
```

## String concatenation
```javascript
let age = 22
let name = 'Matus'
console.log(`My name is ${name} and I am ${age} years old.`)
```

## Functions
### Function declaration
```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
  }
```
### Arrow function declaration
```javascript
const sum = (age, name) => { 
    return (`${name} is ${age} years old.`); 
  }; 
```

## Arrays
### Array declaration
```javascript
let fruits = ['apple', 'banana', 'orange'];
```
### Array methods
```javascript
fruits.push('pear'); // adds an element to the end of the array
fruits.pop(); // removes the last element of the array
fruits.shift(); // removes the first element of the array
fruits.unshift('kiwi'); // adds an element to the beginning of the array
fruits.slice(1, 2); // returns a new array with elements from index 1 to 2
fruits.splice(1, 2); // removes elements from index 1 to 2
fruits.concat(['grapes', 'watermelon']); // concatenates two arrays
fruits.sort(); // sorts the array
fruits.reverse(); // reverses the array
```

## Loops

### For loop
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
```
### While loop
```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
  }
```
### Do...While loop
```javascript
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);
```

## Looping through an array
```javascript
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## Iterators
### ForEach
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit); // prints: apple, banana, orange
});
```
### Map
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(number => {
  return number * 2; //returns [2, 4, 6]
});
```
### Filter
```javascript
const numbers = [1, 2, 3];
const filtered = numbers.filter(number => {
  return number > 1; // returns [2, 3]
});
```
### Reduce
```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // returns 6
}, 0);
```
### Find
```javascript
const numbers = [1, 2, 3];
const found = numbers.find(number => {
  return number > 1; // returns 2
});
```
### Some
```javascript
const numbers = [1, 2, 3];
const hasNegativeNumbers = numbers.some(number => {
  return number < 0; // returns false
});
```
### Every
```javascript
const numbers = [1, 2, 3];
const allPositiveNumbers = numbers.every(number => {
  return number > 0; // returns true
});
```

## Objects
### Object declaraton
```javascript
let spaceship = {
  color : 'red',
  flightPath : ['Earth', 'Mars']
}
```

### Object properties
```javascript
spaceship.color // 'red'
```
### Object bracket notation
```javascript
spaceship['flightPath'] // ['Earth', 'Mars']


spaceship.color = 'blue' // Changing value 
spaceship.color_2 = 'red' // Adding new property
delete spaceship.color_2 // Deleting property
```

### Methods in Object
```javascript
// String saved in variable 'retreatMessage'
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//Object alienShip with 2 methods: 1.) retreat and 2.) takeOf.
alienShip = {
  retreat () { // This method is function that prints retreatMessage
    console.log(retreatMessage)
  },
  takeOff () { // This method is function that prints custom string
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

// Calling class methods
alienShip.retreat()
alienShip.takeOff()
```

### Pass by reference
```javascript
// Define object 
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

greenEnergy(spaceship)

```

### Iterating in objects
```javascript
// object spaceship with crew object with captain, medic and translator as a objects.
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Iterate crew member and print names
for (let crew_member in spaceship.crew) {
console.log(`${crew_member}: ${spaceship.crew[crew_member].name}`)
}
```

## Setters and Getters
```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){ // Getter: type of function to return something
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){ // Setter: type of function to set value to variable
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};

robot.numOfSensors = 100
console.log(robot.numOfSensors)
```

## Factory functions
### Old way (long)
```javascript
const robotFactory = (model, mobile) => {
  return{
    model: model,
    mobile: mobile,
    beep (){
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500',true)

tinCan.beep()
```
### New way (shorter)
```javascript
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
```

## Destructed assignment
```javascript
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot
functionality.beep()
```
## Build-in object methods
```javascript
// Built-in object methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);
// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);
// OUTPUT:
/*
[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
*/
```
