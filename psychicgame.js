var letters = ["a", "b", "c", "d", "e"];
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 3;
var computerGuess;
var userGuess;


function reset() {
    $("button").css("background-color", "buttonface");
    computerGuess = letters[Math.floor((Math.random() * letters.length))];
    guessesLeft = 3;
    lettersGuessed = [];
    console.log("computer guess: ", computerGuess);

}

reset();

for (var i = 0; i < letters.length; i++) {
    var btn = $("<button>");
    btn.text(letters[i]);
    btn.attr("value", letters[i]);
    $("#buttons").append(btn);
}

$("button").on("click", function () {
    $(this).css("background-color", "lemonchiffon");
    userGuess = $(this).attr("value");
    console.log("your guess: ", userGuess)
    console.log("guessesLeft: ", guessesLeft);

    if (userGuess === computerGuess) {
        alert("you win!")
        wins++;
        $("#wins").html(wins)
        reset();
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            alert("game over!")
            losses++;
            reset();
        }
    }
});