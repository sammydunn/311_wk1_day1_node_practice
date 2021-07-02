const isEven = (num) => {
  // write code for numbers.isEven

if(num % 2 === 0) {
  return true;
} else{
  return false;
}

}

const sum = (arr) => {
  // write code for numbers.sum
let sum = 0;

for(let i =0; i < arr.length; i++) {
  let currentNum = arr[i];
  sum += currentNum;
} return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
for(i = 0; i < arr.length; i++) {
  for(let j = i+1; j < arr.length; j++) {
    if(arr[i] + arr[j] === sum) {
      return true;
    }
  }
} return false;
};

module.exports = {
  isEven,
  sum,
  comboSum
}