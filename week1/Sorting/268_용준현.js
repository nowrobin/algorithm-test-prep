/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
  let sum1 = (nums.length * (nums.length + 1)) / 2
  let sum2 = 0;
  
  for (let i = 0; i < nums.length; i++){
      sum2 += nums[i];
  }

  return sum1 - sum2;
};