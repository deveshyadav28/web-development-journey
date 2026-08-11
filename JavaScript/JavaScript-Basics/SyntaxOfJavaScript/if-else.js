let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
let num = 21;
if(num % 2 === 0){
  console.log("the number is even");
}
else{
  console.log("the number is odd.");
}

//use function
function checkNumber(num1){

  if(num1 % 2===0){
    console.log("the number is even");
  }
  else{
    console.log("the number is odd.");
  }

}
 let num3 = checkNumber(12);