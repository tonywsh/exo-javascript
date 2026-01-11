function rentalCarCost(d) {
  let total = d * 40
  if (d > 2) total -= 20;
  if (d > 2 && d > 6) total -= 30;
  return total;
}

console.log(rentalCarCost(8))