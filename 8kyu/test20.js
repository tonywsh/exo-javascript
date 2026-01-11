function friend(friends){
  return friends.filter(x => x.length == 4)
}
console.log(friend(["salut", "frérot","raya"]))