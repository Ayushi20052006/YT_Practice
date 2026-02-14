let myDate=new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

let myDate2=new Date(2023,0,23);
console.log(myDate2.toDateString());

let myDate3=new Date("2023-01-23");
console.log(myDate3.toDateString());

let myDate4=new Date(2023,0,23,10,30,45);
console.log(myDate4.toString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);