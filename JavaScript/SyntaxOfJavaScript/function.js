//function declaration 


// function functionName(parameter){
//   return result;

// }
// // call the fuction 

function greet(name){
  return "hello ," + name;
}
let user1 = greet("devesh");
console.log(user1);

// print sum of two number
function sum (a , b){
  return a + b;
}
let number = sum(10,20);
console.log(number);
// pass in a string instead of number
let num2 = sum ("devesh", "yadav");
console.log(num2);

//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
  if (age >=18){
    return true;
  }  
  else{
    return false;
  }
}
let user5 = canVote(21);
console.log(user5);