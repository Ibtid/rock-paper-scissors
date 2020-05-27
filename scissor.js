let userScore = 0;
let computerScore = 0;
const userScrore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const smallUser = "user".fontsize(2).sub();
const smallComp = "comp".fontsize(2).sub();


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(word){
    if(word==="rock")return "Rock";
    if(word==="paper")return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++;
    userScrore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice)+smallUser+" beats "+convertToWord(computerChoice)+smallComp+". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScrore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice)+ smallComp+" beats "+convertToWord(userChoice)+smallUser+". You lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice)+smallUser+" matches "+convertToWord(computerChoice)+smallComp+". Draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
       case "rockscissors":
       case "paperrock":
       case "scissorspaper":        
           win(userChoice, computerChoice);
           break;
       case "rockpaper":
       case "paperscissors":
       case "scissorsrock":
           lose(userChoice, computerChoice);
           break;
       case "rockrock":
       case "paperpaper":
       case "scissorsscissors":
           draw(userChoice, computerChoice);
           break;                        
   }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })

    paper_div.addEventListener('click', function () {
        game("paper");
    })

    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
}

main();