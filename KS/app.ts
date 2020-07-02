// Incomplete conversion (.js to .ts)
// Variable "name" is assigned the value of "Derrick"
let name: string = 'Derrick';

const numStates = 50;
let sum = 5 + 4;

sayHello();

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeggies = ['carrots', 'cabbage', 'spinach', 'green peppers'];

for (const veggies of favVeggies) {
  console.log(veggies);
}

const pet = {
  petname: 'GigaBite',
  breed: 'Chia',
};
console.log(pet);

const visitors = [
  {
    firstname: 'Luke',
    age: 21,
  },
  {
    firstname: 'Paul',
    age: 39,
  },
  {
    firstname: 'Kim',
    age: 18,
  },
  {
    firstname: 'Sally',
    age: 14,
  },
  {
    firstname: 'Sam',
    age: 28,
  },
];

for (const visitor of visitors) {
  checkAge(visitor.firstname, visitor.age);
}

const length: number = getLength('Hello World');

length % 2 === 0
  ? console.log('The world is nice and even!')
  : console.log('The world is an odd place!');

// Function Declarations
function sayHello() {
  alert('Hello World!');
}

function checkAge(familyName, age) {
  if (age < 21) {
    alert('Sorry ' + familyName + ", you aren't old enough to view this page!");
  }
}

function getLength(str) {
  return str.length;
}
