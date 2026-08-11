const users = ["Devesh", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];
console.log(tatalUsers);
console.log(firstUser);

//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// const evenResult = arr.filter(function(nums){
//   return nums % 2 === 0 ;
// });
// console.log(evenResult);

//another way
const arr = [1,2,3,4,5,6,7,8,9,10,11];
const evenResult = arr.filter(num => num % 2 === 0 );
console.log(evenResult);