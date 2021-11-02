/**
 * Variables
 * 
 * defining variables
 * var,let,const
 */

// Variables with var
var name="Bernardo";
console.log(name);

var age=23;
console.log(edad);

var person={
    name:"Berni",
    lastname:'Salinas',
    age:23
};

var city;
city="Durango";
city="Gomez Palacio";
console.log(city);

// Variables with let
let name2="Bernardo";
console.log(name2);

{
    let greetings='Hello I am Bernardo';
    console.log(greetings)
}
// Error
console.log(greetings);

// Variables with const
const PI=3.14;
console.log(PI);

//Template string
var name3="Bernardo";
var greetings2=`Hello I am ${name3}`;
console.log(greetings2);