/**
 * 
 * Functions
 * 
 * Declartaive 
 * 
 * function name(){
 * 
 * }
 */

function greetPeople(){
    console.log("Hello I am Bernardo");
}

greetPeople();

function greetPeople(name){
    return "Hello "+name;
}

console.log(greetPeople("Berni"));

var add= function(a,b){
    return a+b;
}

console.log(add(2,1));

var sus= (a,b)=>{
    return a-b;
}

console.log(sus(8,2));