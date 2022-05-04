'use strict';
 

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent = 'Correct Number!');


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
 
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    
    console.log(typeof guess);
   //When there is no imput
   if (!guess) {
        displayMessage('No number!');
        //When player wins
    } else if (guess === secretNumber) {
        displayMessage( 'Correct Number!');
        document.querySelector('body').style.backgroundColor = " #66ff66"
        
        document.querySelector(".number").style.width = "30rem"
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess !== secretNumber) {
         
        if (score > 1) {
            displayMessage( guess > secretNumber ? 'too high!' : 'too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0;
        }
    }
    // }else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "You lost the game"
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     //When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent="You lost the game"
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});  


 
    





