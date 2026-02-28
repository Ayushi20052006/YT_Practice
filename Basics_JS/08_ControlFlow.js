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


//tpo check if the array is empty 
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