function positiveSum(arr) {
  let sum = 0; // Tu dois déclarer sum
  
  for (let i = 0; i < arr.length; i++){ // "length" pas "lenghts"
    if (arr[i] > 0) { // On ajoute seulement si positif
      sum += arr[i];
    }
  }
  
  return sum; // On retourne sum
}

console.log(positiveSum([1, -4, 7, 12])); // 20