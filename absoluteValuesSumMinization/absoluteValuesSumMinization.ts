function absoluteValuesSumMinimization(a: number[]): number
{
  const isEven = a.length % 2 === 0;

  // If given array is even, then return the leftmost item from the middle of the array. If the array is odd, then return the middle item from the array.
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));