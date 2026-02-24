function name(name){       //Parameters
    console.log(`My name is ${name}`);
} 
name("Ayushi");     //Arguments

function add(num1, num2){
    return (num1 + num2);
}
console.log(add(5,6));       //11

function calculateSum(...numbers){
    return numbers;
}
console.log(calculateSum(1,2,3,4,5));     //[1, 2, 3, 4, 5]

const addOne = function(num){
    return num + 1;
}
console.log(addOne(5));      //6

//ARROW FUNCTION 
const addTwo = (num) => {
    return num + 2;
}

let user={
    name: "Ayushi",
    age: 22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
user.greet();      //Hello, my name is Ayushi and I am 22 years old.
user.age=20;
user.greet();      //Hello, my name is Ayushi and I am 20 years old.

console.log(this);  //{} 


function example(){
    console.log(this);  //Window object
}
example();
//OUTPUT:
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
*/
































