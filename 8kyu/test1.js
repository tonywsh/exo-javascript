function paperwork(n, m) {
  let num = n * m;
  if (num < 0){
    num = 0
  }
  return num;
}

console.log(paperwork(-5, 5));