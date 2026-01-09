function reverseWords(str) {
  // Go for it
  return str.split(" ").reverse().join(" ").split("").reverse().join("")
}

console.log(reverseWords("bonjour mon ami"))