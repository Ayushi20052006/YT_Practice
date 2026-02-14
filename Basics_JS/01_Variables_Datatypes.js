/*VARIABLES IN JAVASCRIPT
1. var: function-scoped, can be redeclared and updated, hoisted with undefined.
2. let: block-scoped, cannot be redeclared but can be updated, not hoisted.
3. const: block-scoped, cannot be redeclared or updated, must be initialized, not hoisted.
*/

const employeeId = 12345;
let employeeName = 'John Doe';
var employeeDepartment = 'Engineering';   //Prefer not to use var due to scope issues
employeeCity = 'New York';
let employeeSalary; 
console.table({ employeeId, employeeName, employeeDepartment, employeeCity, employeeSalary });
 
//OUTPUT:
// ┌────────────────────┬───────────────┐
// │ (index)            │ Values        │
// ├────────────────────┼───────────────┤
// │ employeeId         │ 12345         │
// │ employeeName       │ 'John Doe'    │
// │ employeeDepartment │ 'Engineering' │
// │ employeeCity       │ 'New York'    │
// │ employeeSalary     │ undefined     │
// └────────────────────┴───────────────┘

/*
Datatypes in JavaScript
1. Primitive Datatypes: string, number, boolean, null, undefined, symbol, bigint
2. Non-Primitive (reference) Datatypes: object (including arrays and functions)
*/

// Primitive datatypes  ==> memory stored in stack 
let name = 'Alice'; 
let age = 30; 
let isEmployed = true; 
let address = null; // typeof null is object
let phoneNumber; // typeof undefined is undefined
let uniqueId = Symbol('id'); // to talk about unique values
let bigNumber = 9007199254740991n; 
console.table({ name, age, isEmployed, address, phoneNumber, uniqueId, bigNumber });
console.log(`My name is ${name}, I am ${age} years old.`);   // Template literals for string interpolation
//OUTPUT:
// ┌─────────────┬───────────────────┐
// │ (index)     │ Values            │
// ├─────────────┼───────────────────┤
// │ name        │ 'Alice'           │
// │ age         │ 30                │
// │ isEmployed  │ true              │
// │ address     │ null              │
// │ phoneNumber │ undefined         │
// │ uniqueId    │ Symbol(id)        │
// │ bigNumber   │ 9007199254740991n │
// └─────────────┴───────────────────┘
// My name is Alice, I am 30 years old.

// Non-Primitive datatypes
const myArray=[1, 'Hello', true, null, undefined];
let myObj={
    name:'Alice',
    age:30,
    isEmployed:true,
}
const myFunction=function(){
    console.log('This is a function');
}
console.table({ myArray, myObj, myFunction });

//OUTPUT:
// ┌────────────┬───┬─────────┬──────┬──────┬───────────┬─────────┬─────┬────────────┐
// │ (index)    │ 0 │ 1       │ 2    │ 3    │ 4         │ name    │ age │ isEmployed │
// ├────────────┼───┼─────────┼──────┼──────┼───────────┼─────────┼─────┼────────────┤
// │ myArray    │ 1 │ 'Hello' │ true │ null │ undefined │         │     │            │
// │ myObj      │   │         │      │      │           │ 'Alice' │ 30  │ true       │
// │ myFunction │   │         │      │      │           │         │     │            │
// └────────────┴───┴─────────┴──────┴──────┴───────────┴─────────┴─────┴────────────┘

