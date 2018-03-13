`use strict`
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var starting = getRandomInt(120, 19);
// console.log(starting);
$("#number-to-guess").text(starting);

var cryst = function getRandomInt(min, max) {
// console.log(cryst);
  return Math.floor(Math.random() * (max- min + min)) + 1;
  
};
var counter = 0;
var wins = 0;
var losses = 0;
var cryst1, cryst2, cryst3, cryst4 = 0;
cryst1 = cryst(1,12);
cryst2 = cryst(1,12);
cryst3 = cryst(1,12);
cryst4 = cryst(1,12);

//   if (cryst1 == cryst2) {
//     //if the numbers are the same, re-randomize
//     cryst1 = cryst(1,12);
// }
// else if (cryst2==cryst3)
// {
//   cryst2 = cryst(1,12);
// }
// else if (cryst3==cryst4)
// {
//   cryst3 = cryst(1,12);
// }
// else if (cryst1==cryst3)
// {
//   cryst1 = cryst(1,12);
// }
// else if (cryst4 == cryst1)
// {
//   cryst4 = cryst(1,12);
// }

// else (cryst2 == cryst4)
// {
//  cryst2 = cryst(1,12);
// }
var numberOptions = [cryst1, cryst2, cryst3, cryst4];
console.log(numberOptions)
//this assigns the numbers from the crystals to the HTML element using jquery
  $(`#cryst1`).attr("data-crystalvalue", cryst1);
  $(`#cryst2`).attr("data-crystalvalue", cryst2);
  $(`#cryst3`).attr("data-crystalvalue", cryst3);
  $(`#cryst4`).attr("data-crystalvalue", cryst4);

// $(".btn").on("click", function() {
  //game starts 
  // counter = 0;
  // $("#Counter").text(counter);
// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalvalue"); 
  // console.log(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
   counter += parseInt(crystalValue);
   $("#Counter").text(counter);

   if (counter === starting) {
    wins ++;
    $("#wins").text("Your Win Counter." + wins );
    clear ();
    return wins;
    
   } else if (counter > starting) {
   losses ++;
   $("#losses").html('<p>Your Loss Counter"</p>'+ losses);
  //  console.log(losses);
   clear ();
   return losses;
   $("#status").html('<p>"This Game is Over, Click a Magic Crystal to Play Again"</p>');
   }
});
//here is where I want to draw the restart game conclusions
  const clear = function () {
      cryst1 = cryst(1,12);
      cryst2 = cryst(1,12);
      cryst3 = cryst(1,12);
      cryst4 = cryst(1,12);
      starting = getRandomInt(120, 19);       
      counter = 0;
      $("#number-to-guess").html(starting);
      $('#starting-number').empty();
            }