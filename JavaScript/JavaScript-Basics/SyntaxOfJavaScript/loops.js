//for loop
for(let i = 0 ; i <= 4; i++){
  console.log(i);

}

//while loop

let j = 0;
while (j <= 4){
  console.log(j);
  j++;
}

//Write a function called sum that finds the sum from 1 to a number

function totalSum(n){
  sum = 0;
  for (let i = 1 ; i <= n; i++){
    sum = sum +i;
  }
  return sum;
}
let ans = totalSum(12);
console.log(ans);
