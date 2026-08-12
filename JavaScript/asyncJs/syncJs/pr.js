// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3);
// console.log(sum);

function totalSum (n){
  let ans = 0;
  for (let i = 1; i <= n; i++){
    ans = ans +i;
  }
  return ans;
}
let result = totalSum(10);
console.log(result);