let balance=100;

if(balance===0){
    console.log("Your account is empty.");
}
else if(balance<50){
    console.log("You have some money in your account.");
}
else{
    console.log("Your account is overdrawn.");
}


//SWITCH CASE
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}

//TERNARY OPERATOR  => [condition ? expressionIfTrue : expressionIfFalse]
let age=18;
let canVote=age>=18?"You are eligible to vote.":"You are not eligible to vote.";
console.log(canVote);


//to check if the array is empty 
let emptyArr=[]
if(emptyArr.length===0){
    console.log("array is empty");
}
else {
    console.log("Array is not empty");
}


//to check if the object is empty or not
let emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("The object is empty.");
}
else{
    console.log("The object is not empty.");
} 

//false=0==""=null=undefined=NaN;  
//all these values are considered falsy in JavaScript

//true=1=="1"=true;
//all these values are considered truthy in JavaScript



//NULLISH COALESCING OPERATOR (??)  

// KEYWORDS=> (null, undefined)
// is used to provide a default value when dealing with null or undefined values. 
// It returns the right-hand operand when the left-hand operand is null or undefined, 
// otherwise it returns the left-hand operand.
let val1;
val1=5??10; //val1 will be 5 because it is not null or undefined
console.log(val1);

let val2=null;
val2=6??10; //val2 will be 10 because it is null
console.log(val2);

let val3;
val3 =null??10; //val3 will be 10 because it is null
console.log(val3);

let val4;
val4=undefined??10; //val4 will be 10 because it is undefined
console.log(val4);

let val5;
val5=0??10; //val5 will be 0 because it is not null or undefined
console.log(val5);

let val6;
val6=""??10; //val6 will be "" because it is not null or undefined
console.log(val6);

