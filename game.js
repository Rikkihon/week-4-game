`use strict`
//need to write a loop to start the game 
//need to sum it in the game
//need to clear it

$( "YourScore" ).html( "Your Score Is " );
$( "YourScore2" )
  .append( document.createTextNode( yourScore ) )
  .css( "color", "red" );

//wins declared here

// if (yourScore === starting) {
//     wins = true;
//     wins ++;
//     alert("You win!");
//     text(wins);
// }

// else if (yourscore > starting) {
//    losses = true;
//    losses ++;
//    alert("You lose!!");
//    text(losses);
// }


// $( "#crystal1" ).click(function() {
    
//     alert("New score: " + counter);
//   });
//   $( "#crystal2" ).click(function() {
 
//     alert("New score: " + counter);
//   });
//   $( "#crystal3" ).click(function() {
   
//     alert("New score: " + counter);
//   });
//   $( "#crystal4" ).click(function() {
//     alert("New score: " + counter);
//   });

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.