function name(name){       //Parameters
    console.log(`My name is ${name}`);
} 
name("Ayushi");     //Arguments
//OUTPUT: My name is Ayushi
function add(num1, num2){
    return (num1 + num2);
}
//console.log(add(5,6));       //11

function calculateSum(...numbers){
    return numbers;
}
//console.log(calculateSum(1,2,3,4,5));     //[1, 2, 3, 4, 5]

const addOne = function(num){
    return num + 1;
}
//console.log(addOne(5));      //6

let user={
    name: "Ayushi",
    age: 22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
//user.greet();      //Hello, my name is Ayushi and I am 22 years old.
user.age=20;
//user.greet();      //Hello, my name is Ayushi and I am 20 years old.

//console.log(this);  //{} 


function example(){
    console.log(this);  //Window object
}
//example();
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

//ARROW FUNCTION 
const addTwoNum = (num1,num2) => {
    return num1+ num2;
}
console.log(addTwoNum(5,7));      //12

//IMPLICIT RETURN FUNCTION
const addThreeNum = (num1,num2,num3)=> (num1+num2+num3);
console.log(addThreeNum(1,2,3));     //6

const obj=(name)=> ({name:name});
console.log(obj("Ayushi"));       //{ name: 'Ayushi' }




//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function name () {
    console.log("This is an IIFE");
})();      //This is an IIFE

(function(name){
    console.log(`Hello, ${name}`);
})("Ayushi");     //Hello, Ayushi

(()=> {
    console.log("This is an IIFE using arrow function");
}) ();    //This is an IIFE using arrow function

