'use strict';
 
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const again=document.querySelector('.again')
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
});  

again.addEventListener('click', () => {
    score = 0;
    document.querySelector('body').style.backgroundColor = "#222"
})
 
    





