//SINGLETON OBJECT 
//const singletonObject = new Object();


//OBJECT LITERALS
let mysymbol=Symbol("roll no");
let user={
    name: "Ayushi",
    "last name": "Jha",
    [mysymbol]: "12345",  //Syntax of using symbol as key to create a unique property
    age: 20,
    email: "ayushi.jha20052006@gmail.com",
    isActive: true,
    hobbies: ["coding", "reading", "traveling"],
}
console.log(user.name); //dot notation
console.log(user["name"]); //bracket notation

//console.log(user.last name); //SyntaxError: Unexpected identifier because of space in key
console.log(user["last name"]); //bracket notation for keys with spaces

//ADDING NEW KEY-VALUE PAIR TO OBJECT
user.gender="Female";

//UPDATING VALUE OF EXISTING KEY
user.age=21;

//Object.freeze(user); //freezes the object to prevent any modifications

user.greetings=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
//console.log(user);
/*
{
  name: 'Ayushi',
  'last name': 'Jha',
  age: 21,
  email: 'ayushi.jha20052006@gmail.com',
  isActive: true,
  hobbies: [ 'coding', 'reading', 'traveling' ],
  gender: 'Female',
  greetings: [Function (anonymous)],
  Symbol(roll no): '12345'
}
*/
user.greetings();  //Hello, my name is Ayushi and I am 21 years old.

//console.log(Object.keys(user));
// [
//   'name',     'last name',
//   'age',      'email',
//   'isActive', 'hobbies',
//   'gender',   'greetings'
// ]


//console.log(Object.values(user));
// [
//   'Ayushi',
//   'Jha',
//   21,
//   'ayushi.jha20052006@gmail.com',
//   true,
//   [ 'coding', 'reading', 'traveling' ],
//   'Female',
//   [Function (anonymous)]
// ]


//console.log(Object.entries(user));
// [
//   [ 'name', 'Ayushi' ],
//   [ 'last name', 'Jha' ],
//   [ 'age', 21 ],
//   [ 'email', 'ayushi.jha20052006@gmail.com' ],
//   [ 'isActive', true ],
//   [ 'hobbies', [ 'coding', 'reading', 'traveling' ] ],
//   [ 'gender', 'Female' ],
//   [ 'greetings', [Function (anonymous)] ]
// ]


//NESTED OBJECTS
let newUser={
    username: {
        fullname:{
            firstName: "Ayushi",
            lastName: "Jha"
        },
    }
}
//console.log(newUser.username.fullname.firstName); //Ayushi

let obj1={1:'a',2:'b'};
let obj2={3:'c',4:'d'};
let obj3={obj1,obj2};
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

let mergeobj={...obj1, ...obj2};  //SPREAD OPERATOR
console.log(mergeobj);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

let arrayObj=[
    {name:"Ayushi", age:20},
    {name:"Rahul", age:25},
    {name:"Priya", age:30}
]
console.log(arrayObj[0].name);   //Ayushi







