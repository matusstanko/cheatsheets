// JS CHEATSHEET
// Matus Stanko 07/2024



// Variables
var age; // before ES6
let weight; // for block scope
const numberOfFingers = 20; // for constant scope

// String concatenation
let age = 22
let name = 'Matus'
console.log(`My name is ${name} and I am ${age} years old.`)

// Functions

// basic Function declaration
function sayHello(name) {
    return `Hello, ${name}!`;
  }

// Arrow function declaration
const sum = (age, name) => { 
    return (`${name} is ${age} years old.`); 
  }; 

// Arrays

// Array declaration
let fruits = ['apple', 'banana', 'orange'];

// Array methods
fruits.push('pear'); // adds an element to the end of the array
fruits.pop(); // removes the last element of the array
fruits.shift(); // removes the first element of the array
fruits.unshift('kiwi'); // adds an element to the beginning of the array
fruits.slice(1, 2); // returns a new array with elements from index 1 to 2
fruits.splice(1, 2); // removes elements from index 1 to 2
fruits.concat(['grapes', 'watermelon']); // concatenates two arrays
fruits.sort(); // sorts the array
fruits.reverse(); // reverses the array

// Loops

// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
  }
// Do...while loop
x = 0
i = 0
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// Prints: 0 1 3 6 10

// Looping through an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Iterators

// forEach
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit); // prints: apple, banana, orange
});
// map
const numbers = [1, 2, 3];
const doubled = numbers.map(number => {
  return number * 2; //returns [2, 4, 6]
});
// filter
const numbers = [1, 2, 3];
const filtered = numbers.filter(number => {
  return number > 1; // returns [2, 3]
});
// reduce
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // returns 6
}, 0);
// find
const numbers = [1, 2, 3];
const found = numbers.find(number => {
  return number > 1; // returns 2
});
// some
const numbers = [1, 2, 3];
const hasNegativeNumbers = numbers.some(number => {
  return number < 0; // returns false
});
// every
const numbers = [1, 2, 3];
const allPositiveNumbers = numbers.every(number => {
  return number > 0; // returns true
});

// Objects
let spaceship = {
  color : 'red',
  flightPath : ['Earth', 'Mars']
}
// Object properties
spaceship.color // 'red'
// Object Bracket notation
spaceship['flightPath'] // ['Earth', 'Mars']

spaceship.color = 'blue' // Changing value 
spaceship.color_2 = 'red' // Adding new property
delete spaceship.color_2 // Deleting property

// Methods in Object
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat()
alienShip.takeOff()

// Pass by reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

greenEnergy(spaceship)

// ITERATING IN OBJECTS

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

for (let crew_member in spaceship.crew) {
console.log(`${crew_member}: ${spaceship.crew[crew_member].name}`)
}

