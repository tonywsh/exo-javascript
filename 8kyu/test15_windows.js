function sumMix(x){
   return x.reduce((sum, value) => sum + Number(value), 0)
}
console.log(sumMix([9, 3, '7', '3']));