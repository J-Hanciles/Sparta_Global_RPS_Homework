

var player1 = prompt("Rock, Paper, or Scissors?")
var theHouse = Math.random();


if(theHouse <= .33) {
  theHouse = "Rock";
}else if(theHouse > .34 && theHouse < .67) {
  theHouse = "Paper";
} else {
  theHouse = "Scissors";
} console.log("The House: " + theHouse);


var compare = function(player1, theHouse){

  if(player1==theHouse) {
    return "it is a tie"
  }else if(player1== "Rock"){

        if (theHouse== "Scissors"){
          return "Rock Wins";
        }else{
          return "Paper Wins";
        }

  }else if (player1== "Paper"){
        if (theHouse== "Rock"){
          return "Paper Wins";
        }else{
          return "Scissors Win";
        }
  }
}


compare(player1, theHouse);
