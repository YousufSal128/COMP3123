//Lab exercise 2

//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
//and for..of

const gretter = (myArray, counter) => {
    const greetText = 'Hello ';

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Using destructuring assignment syntax and the spread operator, write a function will capitalize the
//first letter of a string.
//const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('').toLowerCase()}`;

//console.log(capitalize('fooBar')); 
//console.log(capitalize('nodeJs')); 

//Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
//the first character of each Color in the following array..

const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('').toLowerCase()}`;

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

//Using array.proto.filter create a function that will filter out all the values of the array that are less
//than twenty

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20); // Output: [1, 5]

//Using array.proto.reduce create calculate the sum and product of a given array.

const array = [1, 2, 3, 4];

// Calculate the sum using reduce
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product using reduce
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

//Output
console.log(calculateSum);    
console.log(calculateProduct); 

//Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
// from Car Class. The parameters for the Car class is the model and year. The parameters for the
// subclass is the model, year and balance.
// • Use the super key word in the Sedan subclass to set the model and name in base Car
// constructor


// Base class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// Subclass extending Car
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); 
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

//Output
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());


const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

