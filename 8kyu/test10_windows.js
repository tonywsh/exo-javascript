function toCamelCase(str){
     const wordSplit = str.split("-");
     return wordSplit.charAt(1);

    
}
console.log(toCamelCase("salut-tout-le-monde"))