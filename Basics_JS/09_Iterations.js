//FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4

//WHILE LOOP
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4

//DO WHILE LOOP
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
//OUTPUT
// 0
// 1
// 2
// 3
// 4

//FOR IN LOOP
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//OUTPUT
// name: John
// age: 30
// city: New York

//FOR OF LOOP
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
//OUTPUT
// 1
// 2
// 3
// 4
// 5

//FOR EACH LOOP
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
//OUTPUT
// apple
// banana
// cherry


//BREAK AND CONTINUE
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at 5");
        break; // Exits the loop when i is 5
    }
    console.log(i);
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4
// Breaking the loop at 5

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Skipping the number 5");
        continue; // Skips the rest of the loop when i is 5
    }
    console.log(i);
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4
// Skipping the number 5
// 6
// 7
// 8
// 9    


//FOR OF LOOP IN MAPS
const map= new Map();
map.set("name","John");
map.set("age",30);
map.set("city","New York");

console.log(map);
//OUTPUT
// Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'New York' }


for(const [key,value] of map){
    console.log(key + ": " + value);
}
//OUTPUT
// name: John
// age: 30
// city: New York


//FOR IN LOOP IN OBJECTS
let myObject = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};

for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}
//OUTPUT
// name: Alice
// age: 25
// city: Los Angeles