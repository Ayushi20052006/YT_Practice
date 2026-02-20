//Size of array in js is not fixed, we can add or remove elements from array and it will automatically adjust its size.
//Zero based indexing
//Shallow copy and deep copy in array


/*
const myArray =[0,1,2,3,4,5];
const heroes=["IronMan","Captain America","Thor","Hulk"];

console.log(myArray);
console.log(heroes);
console.log(typeof myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[6]);
*/

//OUTPUTS:
// [ 0, 1, 2, 3, 4, 5 ]
// [ 'IronMan', 'Captain America', 'Thor', 'Hulk' ]
// object
// 6
// 0
// undefined


/*
//Array Methods
const myArray =[0,1,2,3,4,5];
myArray.push(6);
console.log(myArray);

// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

myArray.pop();
console.log(myArray);

// [ 0, 1, 2, 3, 4, 5 ]

myArray.unshift(-1);
console.log(myArray);

// [
//   -1, 0, 1, 2,
//    3, 4, 5
// ]

myArray.shift();
console.log(myArray);

// [ 0, 1, 2, 3, 4, 5 ]

//splice() method can be used to add, remove or replace elements in an array
//it changes the original array and returns the removed elements if any

myArray.splice(2,1); //removes 1 element at index 2
myArray.splice(2,0,10); //adds 10 at index 2
myArray.splice(2,1,20); //replaces element at index 2 with 20
console.log(myArray);
 
// [ 0, 1, 20, 3, 4, 5 ]

//slice() method returns a new array from start index to end index (end index is not included) 
// it does not change the original array

const arr=[7,8,9,10,11,12,13,14,15];
const newArr=arr.slice(2,5); //returns a new array from index 2 to 4 (5 is not included)
console.log('A',newArr);

// A [ 9, 10, 11 ]

console.log(myArray.indexOf(3)); //returns index of first occurrence of 3 else -1

// 3

console.log(myArray.includes(4)); //returns true if 4 is present in array else false

// true

const strArry =myArray.join(); //converts array to string with default separator as comma
console.log(strArry);

// 0,1,20,3,4,5

const strArry2 =myArray.join("-"); //converts array to string with separator as -

console.log(strArry2);

// 0-1-20-3-4-5

const str="Ayushi";
const charArray =str.split(""); //converts string to array of characters
console.log(charArray);

// [ 'A', 'y', 'u', 's', 'h', 'i' ]
*/



const marvelHeroes=["IronMan","Captain America","Thor","Hulk"];
const dcHeroes=["Batman","Superman","Flash"];

// marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);

// [ 'IronMan', 'Captain America', 'Thor', 'Hulk', [ 'Batman', 'Superman', 'Flash' ] ]

const allheroes = marvelHeroes.concat(dcHeroes);
console.log(allheroes);
// [ 'IronMan', 'Captain America', 'Thor', 'Hulk', 'Batman', 'Superman', 'Flash' ]

const allheroes2 = [...marvelHeroes,...dcHeroes]; //spread operator
console.log(allheroes2);

// [ 'IronMan', 'Captain America', 'Thor', 'Hulk', 'Batman', 'Superman', 'Flash' ]

const nestedArray=[1,2,3,[4,5,6],[5,6,7,8,[6,4]]];
const flatArray = nestedArray.flat(Infinity); //flattens the array upto specified depth or completely if depth is not specified
console.log(flatArray);

// [ 1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 6, 4 ]

console.log(Array.from("Ayushi"));
// [ 'A', 'y', 'u', 's', 'h', 'i' ]

