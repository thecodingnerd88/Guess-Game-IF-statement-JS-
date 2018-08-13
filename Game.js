//create a secretNumber
var secretNumber= 4;

//Ask user to guess a number
var guess = Number(prompt("Guess a number :)"));
//check if guess is correct.
if ( guess === secretNumber){
    alert("You got it Right!!");
}
//check if guess is higher.
else if  ( guess > secretNumber){
    alert("Your guess is too high!! Guess Again :) ");
}
//check if guess is too low.
else if ( guess < secretNumber){
    alert("Your guess is too low!! Guess Again :)");
}

