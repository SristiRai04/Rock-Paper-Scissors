let userScore=0;
let compScore=0;
let rounds=0;
const maxRounds=10;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector(".p2");
const compScorePara=document.querySelector(".p4");
const roundCount=document.querySelector(".round");

const showResult=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="white";
        msg.style.color="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="white";
         msg.style.color="red";
    }
}

const drawGame=()=>{
      msg.innerText="DRAW GAME!!! Play Again";
      msg.style.backgroundColor="white";
      msg.style.color="grey";
}

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let ranIdx=Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const checkGameOver = () => {
  if (rounds === maxRounds) {
    if (userScore > compScore) {
      msg.innerText = `Hurry! You Won 🏆 ${userScore} - ${compScore}`;
      msg.style.backgroundColor = "green";
      msg.style.color="white";
    } else if (compScore > userScore) {
      msg.innerText = `Computer Wins 😞 ${compScore} - ${userScore}`;
      msg.style.backgroundColor = "red";
      msg.style.color="white";
    } else {
      msg.innerText = `It's a Tie 🤝 ${userScore} - ${compScore}`;
      msg.style.backgroundColor = "grey";
      msg.style.color="white";
    }

    setTimeout(() => {
      userScore = 0;
      compScore = 0;
      rounds = 0;
      userScorePara.innerText = userScore;
      compScorePara.innerText = compScore;
      msg.innerText = "New Game! Play Again.";
      msg.style.backgroundColor = "black";
    }, 3000);
  }
};

const playGame=(userChoice)=>{
    if(rounds<maxRounds){
    const compChoice= genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice === "paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice === "scissor"?false:true;
        }else if(userChoice === "scissor"){
            userWin=compChoice === "rock"?false:true;
        }
        showResult(userWin,userChoice,compChoice);
        }
        rounds++;
        roundCount.innerText=`ROUND ${rounds} out of ${maxRounds}`;
        checkGameOver();

    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

