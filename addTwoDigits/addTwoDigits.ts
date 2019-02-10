function addTwoDigits(n: any): number
{
  const digits = n.toString().split('');

  return parseInt(digits[0]) + parseInt(digits[1]);
}

console.log(addTwoDigits(29));