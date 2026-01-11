function points(games) {
    let score;
    let nbPoints = 0;
    score = games.forEach((value) => {
        let [x,y] = value.split(":").map(Number);
            
            if (x < y){
                nbPoints += 0
            }
            else if (x == y){
                nbPoints += 1;
            }
            else {
                nbPoints +=3;
            }
        });
        return nbPoints; 
    };
    

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

