// let user = [{
//   name : "devesh",
//   age : 25
//   },{
//     name: "sangam",
//     age :22
//   },{
//     name: "Raju",
//     age :15
//   }
// ]
// console.log(user[1]);
// console.log(user[1].age);
// const userLenth = user.length;

//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function adult(user){
  for (let i = 0 ; i < user.length ; i++){
    if (user[i].age >= 18){
      console.log("adult "+ user[i].name);
    }
    else{
      console.log("Notadult "+ user[i].name);
    }

  }

}
let user = [{
  name : "devesh",
  age : 25
  },{
    name: "sangam",
    age :22
  },{
    name: "Raju",
    age :15
  }
]
adult(user);