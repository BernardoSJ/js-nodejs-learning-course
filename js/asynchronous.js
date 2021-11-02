console.log("Homework 1");
console.log("Homework 2");
console.log("Homework 3");

setTimeout(()=>{
    console.log("Homework 4");
},2000);

console.log("Homework 5");

//Callbacks
const add=(a,b,callback)=>{
    callback(a+b);
}

add(2,1,(res)=>{
    console.log(res);
});