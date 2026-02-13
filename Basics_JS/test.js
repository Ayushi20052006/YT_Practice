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
2. Non-Primitive Datatypes: object (including arrays and functions)
*/

let name = 'Alice'; // string
let age = 30; // number
let isEmployed = true; // boolean
let address = null; // null     typeof null is object
let phoneNumber; // undefined      typeof undefined is undefined
let uniqueId = Symbol('id'); // symbol => talk about unique values
let bigNumber = 9007199254740991n; // bigint
console.table({ name, age, isEmployed, address, phoneNumber, uniqueId, bigNumber });

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