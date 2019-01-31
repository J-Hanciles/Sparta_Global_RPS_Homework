

var player1 = prompt("Rock, Paper, or Scissors?").toLowerCase();
var theHouse = Math.random();


if(theHouse <= .33) {
  theHouse = "rock";
}else if(theHouse > .34 && theHouse < .67) {
  theHouse = "paper";
} else {
  theHouse = "scissors";
}
alert("The House: " + theHouse);
var compare = function(player1, theHouse){

  if(player1==theHouse) {
    alert("it is a tie");
  }else if(player1== "rock"){

        if (theHouse== "scissors"){
          alert("You Win");
        }else{
          alert("You Lose");
        }

  }else if (player1== "paper"){
        if (theHouse== "rock"){
          alert("You Win");
        }else{
          alert("You Lose");
        }
  }
}


compare(player1, theHouse);
