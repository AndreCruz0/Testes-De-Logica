function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const soma = nums[i] + nums[j];
      if (soma === target) {
        return [i, j]; 
      }
    }
  }

  return []; 
}

const resultado = twoSum([2, 7, 11, 15], 9);
console.log(resultado); 
