let name = 'Ayushi'; 
let age = 20; 
console.log(`My name is ${name}, I am ${age} years old.`);   // Template literals for string interpolation
console.log(name.length); // Length of the string
console.log(name.toUpperCase());  // Convert to uppercase
console.log(name.toLowerCase()); // Convert to lowercase
console.log(name.charAt(0)); // Get character at index 0
console.log(name.indexOf('u')); // Get index of first occurrence of 'u'
console.log(name.slice(0, 3)); // Get substring from index 0 to 3 (exclusive)
console.log(name.replace('Ayushi', 'Ayu')); // Replace 'Ayushi' with 'Ayu'
console.log(name.split('')); // Split string into array of characters
console.log(name.includes('shi')); // Check if string includes 'shi' returns true or false
console.log(name.startsWith('Ayu')); // Check if string starts with 'Ayu'
console.log(name.endsWith('shi')); // Check if string ends with 'shi'
let nameWithSpaces = '   Ayushi   ';
console.log(nameWithSpaces.trim()); // Remove whitespace from both ends


//OUTPUT:

// My name is Ayushi, I am 20 years old.
// 6
// AYUSHI
// ayushi
// A
// 2
// Ayu
// Ayu
// [ 'A', 'y', 'u', 's', 'h', 'i' ]
// true
// true
// true
// Ayushi