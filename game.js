`use strict`
const yourScore; 
const starting = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

//need to write a loop to start the game 
//need to sum it in the game
//need to clear it 

const cryst1 = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (12- 1 + 1)) + 1;
}
const cryst2 = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (12- 1 + 1)) + 1;
}

const cryst3 = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (12- 1 + 1)) + 1;
}
const cryst4 = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (12- 1 + 1)) + 1;
}

$( "YourScore" ).html( "Your Score Is " );
$( "YourScore2" )
  .append( document.createTextNode( yourScore ) )
  .css( "color", "red" );

//wins declared here

if (yourScore === starting) {
    wins = true;
    wins ++;
    //print wins out using jquery
}
else if (yourscore > starting) {
   losses = true;
   losses ++;
   //print out losses using jquery
}


$( "#crystal1" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#crystal2" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#crystal3" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#crystal4" ).click(function() {
    alert( "Handler for .click() called." );
  });

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.