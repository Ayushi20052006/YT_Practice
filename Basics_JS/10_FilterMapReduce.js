// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//FILTER
/*
const evenNums=myNums.filter( (num) => num%2==0)
console.log(evenNums);
//OUTPUT
// [ 2, 4, 6, 8, 10 ]

const oddNums=myNums.filter( (num)=>{
    return num%2!=0;
} )
console.log(oddNums);
//OUTPUT
// [ 1, 3, 5, 7, 9 ]

const newNums=[];
myNums.forEach((num)=>{
    if(num>6){
        newNums.push(num);
    }
})
console.log(newNums);
//OUTPUT
// [ 7, 8, 9, 10 ]
*/



//MAP
/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const plusten=myNums.map((num)=> num+=10);
console.log(plusten);
//OUTPUT
// [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const squared=myNums.map((num)=> num**2);
console.log(squared);
//OUTPUT
// [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

const stringNums=myNums.map((num)=> num.toString());
console.log(stringNums);
//OUTPUT
// [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

const chained=myNums
                .map((num)=> num*2)   // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
                .filter((num)=> num>10)    // [ 12, 14, 16, 18, 20 ]
                .map((num)=> num/2);        
console.log(chained);
//OUTPUT
// [ 6, 7, 8, 9, 10 ]
*/



//REDUCE
/*
const myNums = [1, 2, 3, 4, 5];

const sum= myNums.reduce(function(acc,currval){
    console.log(`Accumulator: ${acc}, Current Value: ${currval}`);
    return acc+currval;
},0)
console.log(sum);

//OUTPUT
// Accumulator: 0, Current Value: 1
// Accumulator: 1, Current Value: 2
// Accumulator: 3, Current Value: 3
// Accumulator: 6, Current Value: 4
// Accumulator: 10, Current Value: 5
// 15

const sum2=myNums.reduce( (accumulator,currentValue) => accumulator+currentValue, 0);
console.log(sum2);
//OUTPUT
// 15

const course=[
    {
        name:"JavaScript",
        price:10000
    },
    {
        name:"Python",
        price:7000
    },
    {
        name:"c++",
        price:5000
    },
    {
        name:"c",
        price:2000
    },
]
const totalPrice=course.reduce((acc,curr)=>{
    return acc+curr.price;
},0)
console.log(totalPrice);
//OUTPUT
// 24000
*/