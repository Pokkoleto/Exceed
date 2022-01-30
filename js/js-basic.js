// Variables Declaration

let myVariable;
myVariable = 'a';

let myVariable2 = 'b';
myVariable2 = 'c';

myVariable3 = 'hello';
var myVariable3; // var is hoisting, confused and not make sense - not recommended
var myVariable3 = 'hi'; // var can reassigned

const myConstant = 100;
// myConstant = 22; // this will thrown an error

// Naming Convention
// kebab-case -> html, css class
// camelCase -> js, java
// snake_case -> python, ruby
// PascalCase -> class name

// Data Types

let a = null; // no value, typeof a === object
let b = undefined; // has not been declared or not been given a value
let myString = 'Hello, World!';
let myNumber = 3;
let myBoolean = true; // or false
let myArray = [1, 2, 'three', 'four']; // myArray[0], myArray[3], ...
let myObject = { name: 'John', age: 20, isStudent: true }; // models real-life object

// Comments

/*
Everything in between is a comment.
*/

// This is a comment

// Operators

let num1 = 6 + 9;
let num2 = 9 - 3;
let num3 = 4 * 4;
let num4 = 12 / 2;

console.log(num1 !== num3); // true
console.log(num1 === num4); // false
console.log(num2 === num4); // true
console.log(num1 < num2); // false
console.log(num3 >= num4); // true

// Conditionals

let fruit = 'banana';

if (fruit === 'banana') {
  console.log('This is a banana'); // log this line
} else if (fruit === 'apple') {
  console.log('This is an apple');
} else {
  console.log('Something else');
}

// Ternary Operator

const result = 10 % 2 === 0 ? 'even' : 'odd';
console.log(result);

// Array

const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

console.log(fruits.length); // 4
console.log(fruits[0]); // Apple
console.log(fruits[3]); // Orange
console.log(fruits[5]); // index out of bound

fruits.push('Grape');
console.log(fruits); // ['Apple', 'Mango', 'Banana', 'Orange', 'Grape']
console.log(fruits.length); // 5

fruits.splice(0, 1); // remove 'Apple'
// fruits.splice(1, 2); // remove 'Mango' and 'Banana'

// Loop

for (const fruit of fruits) {
  console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// String concatenating

const name = 'Tatpol';
const greeting2 = `Hello, ${name}`;
const greeting3 = 'Hello, ' + name;

// Functions

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// Arrow Functions

const addWithArrowFunction = (num1, num2) => {
  return num1 + num2;
};

// Callback Function

function greeting(callback) {
  callback('Nice');
}

function logGreeting(name) {
  console.log('Hello', name);
}

greeting(logGreeting);

// Object - models real-life object

const dog = {
  name: 'Bill',
  age: 10,
  color: 'black',
  parents: ['John', 'Jane'],
  bark() {
    console.log('Wulff!!!');
  },
  introduce() {
    console.log(`I am dog named ${this.name}, ${this.age} years old`);
  }
};

console.log(dog.name); // Bill
console.log(dog.age); // 10
console.log(dog.parents[0]); // John
console.log(dog.parents[1]); // Jane
dog.bark(); // Wulff!!!

dog.breed = 'Shiba Inu'; // can assign new property
console.log(dog.breed); // Shiba Inu

// Assingment - Object

// สร้าง object แสดงถึงตัวเราเอง มี properties ชื่อ, นามสกุล, ชั้นปี, อายุ, และ สถานะความเป็นนักเรียน
// และ methods กล่าวแนะนำตัว และ กล่าวทักทายชื่อคน

const person = {
  firstName: 'Tatpol',
  lastName: 'Samakpong',
  age: 20,
  isStudent: true,
  introduce() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    );
  },
  greet(name) {
    console.log(`Hi, ${name}. Nice to meet you.`);
  }
};

// Destructuring assignment

const d1 = [1, 2, 3, 4, 20];
const d2 = { str: 'Hi', num: 2, bool: false, arr: [1, 2, 3] };

const [des1, des2, ...rest] = d1;
console.log(des1, des2);
console.log(rest);

const { str, num, bool, arr } = d2;
console.log(str);
console.log(num);
console.log(bool);
console.log(arr);

// Basic Array Methods

const persons = [
  {
    id: 1,
    name: 'A',
    age: 44
  },
  {
    id: 2,
    name: 'B',
    age: 20
  },
  {
    id: 3,
    name: 'C',
    age: 13
  },
  {
    id: 4,
    name: 'D',
    age: 18
  },
  {
    id: 5,
    name: 'E',
    age: 5
  }
];

// forEach
persons.forEach((person) => console.log(person.name));

// find
const personWithId3 = persons.find((person) => person.id === 3);
console.log(personWithId3); // { id: 3, name: 'C', age: 13 }

// findIndex
const indexOfB = persons.findIndex((person) => person.name === 'B');
console.log(indexOfB); // 1

// filter
const adults = persons.filter((person) => person.age >= 18);
console.log(adults); // [{ id: 1, ... }, { id: 2, ... }, { id: 4, ... }]

// map
const personNameList = persons.map((person) => person.name);
console.log(personNameList); // ['A', 'B', 'C', 'D', 'E']

// Assignment - Basic Array Methods

// 1. เปลี่ยนเป็น array ที่เก็บ object ของคน โดยที่แต่ละคนไม่มี id
const personsWithoutId = persons.map((person) => ({
  name: person.name,
  age: person.age
}));
console.log(personsWithoutId); // [{ name: ..., age: ... }, { name: ..., age: ... }, ...]

// 2. หา object คนที่ชื่อ E
const e = persons.find((person) => person.name === 'E');
console.log(e);

// 3. สร้าง method ให้ object คนแต่ละคนให้สามารถแนะนำตัวเองได้

persons.forEach((person) => {
  person.greeting = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
});

persons[1].greeting(); // Hello, my name is B
