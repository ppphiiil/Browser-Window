
let number = 0;
let guessCounter = 0;

const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

//first input
number = Number(prompt("Guess a number from 1-10"));
guessCounter++;

do {
    // if player guessed the number
    if (number == randomNumber) {
        alert(`Success, the number was ${randomNumber}! Attempts: ${number}`);
        break;
    } else {
        // wrong number
        number = Number(prompt("Wrong!!! Try again!"));
    }
    guessCounter++;

    //only 3 guesses allowed
    if (guessCounter > 3) {
        alert(`Sorry, you failed to guess the number in three attempt. The number was ${randomNumber}!`)
    }

    //stop when player reached 3 guesses
} while (guessCounter < 3)



