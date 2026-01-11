function findAverage(array) {
  // your code here
  if (array.length == 0) return 0
  else {
  let total = 0;
  array.map(x=> total +=x)
  total = total / array.length;
  return total;
  }
}
console.log(findAverage([1,2,3,4]));