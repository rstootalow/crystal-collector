/* Instructions

The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page. COMPLETE

   * The player will be shown a random number at the start of the game. COMPLETE

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
*/

var playerScore = 0;
var blue = Math.floor(Math.random() * 16);
var green = Math.floor(Math.random() * 16);
var orange = Math.floor(Math.random() * 16);
var red = Math.floor(Math.random() * 16);
var wins = 0;
var losses= 0;

/* GENERATE RANDOM NUMBER TO SHOW PLAYER AT START OF GAME */
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// DECLARE VARIABLE AS TARGET SCORE
var scoreToWin = randomNum(100, 150);
$("#score-to-match").text("The Score To Match is: " + scoreToWin);

// ADD CLICK EVENT LISTENERS TO CRYSTAL IMAGES
function gamePlay() {
    $(".blue").on("click", function() {
      playerScore += blue;
    console.log(playerScore);//TEST
    // populate that score in to the player's scoreboard
    $('.score-count').text("Your Total Score is: " + playerScore);
    scoreCompare();
  });
  
  $(".green").on("click", function() {
    playerScore += green;
    console.log(playerScore);//TEST
    $('.score-count').text("Your Total Score is: " + playerScore);
    scoreCompare();
  });
  
  $(".orange").on("click", function() {
    playerScore += orange;
    console.log(playerScore);//TEST
    $('.score-count').text("Your Total Score is: " + playerScore);
    scoreCompare();
  });
  
  $(".red").on("click",function() {
    playerScore += red;
    console.log(playerScore);
    $('.score-count').text("Your Total Score is: " + playerScore);
    scoreCompare();
  });
}

function scoreCompare() {
  if (playerScore > scoreToWin) {
    losses++;
    $(".losses").text("Losses: " + losses);
    alert("You've lost the game. Better luck next time!");
  } else {
    if (playerScore === scoreToWin) {
      wins++
      $(".wins").text("Wins: " + wins);
      alert("Congrats! You've won the game!");
    }
  }
}

//FUNCTION CALLS

gamePlay();
scoreCompare();
