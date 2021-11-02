/**
 * Array Operations
 */

// Foreach
var letters=['a','b','c','d','e'];


for(let i=0;i<letters.length;i++){
    let elem=letters[i];
    console.log(elem);
}

letters.forEach((element) => {
    console.log(element);
});


// Push, pop shift
var letters=['a','b','c','d','e'];
letters.push('f');
console.log(letters);

letters.shift();
console.log(letters);

letters.pop();
console.log(letters);

// Map
var people=['Berni','Jun','Ayumi'];
var exist=people.map((person)=>{
    return {
        name:person,
        exist:true
    }
});

console.log(people);
console.log(exist);

//Filter
var people=[{name:'Berni',age:20},{name:'Mio',age:34},{name:'Ayumi',age:36}];

var search=people.filter((person)=>
    person.age>=30
);
console.log(search);

//Reduce
var numbers=[10,100,90,80];

var sum=numbers.reduce((acum,number)=>
    acum+number
,0);

console.log(sum);
console.log(sum/numbers.length);

//Some, every
var numbers=[10,100,90,81];
var result=numbers.some((number)=> number%2===0);
console.log(result);

var numbers=[10,100,90,81];
var result=numbers.every((number)=> number%2===0);
console.log(result);