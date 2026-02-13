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