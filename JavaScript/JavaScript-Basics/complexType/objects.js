// let user1 = {
//   name : "devesh",
//   age : 21,
//   gender : "male"
// }
// console.log(user1);
// console.log(user1.name);
// console.log(user1["name"]);
// console.log(user1.gender);

//Write a function that takes a user as an input and greets them with their name and age
// function greet(use2){
//   return "Namste ," + user2.firstName + " your age is :" + user2.age2;
// }
// let user2 = {
//   firstName : "Devesh",
//   age2 : 22
// }
// console.log(greet(user2));

//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others devesh, your age is 21)

// function greet2(user1){
//   if (user1.gender ==="male"){
//     return "Mr " + user1.name + " your age is " + user1.age;
//   }
//   else{
//     return "Mrs" + user1.name + " your age is " + user1.age;
//   }
// }

// let user1 = {
//   name : "devesh",
//   age : 21,
//   gender : "male"
// }
// console.log(greet2(user1));

//Also tell the user if they are legal to vote or not
function greet2(user1){
  if (user1.gender ==="male"){
    return "Mr " + user1.name + " your age is " + user1.age;
  }
  else{
    return "Mrs" + user1.name + " your age is " + user1.age;
  }
}

function canVote(user1){
  if(user1.age >= 18 ){
    return "you can vote ";
  }
  else{
    return "you can not vote ";
  }
}

let user1 = {
  name : "devesh",
  age : 21,
  gender : "male"
}
console.log(greet2(user1));
console.log(canVote(user1));

