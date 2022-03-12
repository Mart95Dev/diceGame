// variables  DOM//
const containerPlayer1 = document.querySelector('.container-player-1');
const containerPlayer2 = document.querySelector('.container-player-2');
const circlePlayer1 = document.getElementById('circle-player-1');
const circlePlayer2 = document.getElementById('circle-player-2');
let scoreGlobalPlayer1 = document.querySelector('.global-player-1');
let scoreGlobalPlayer2 = document.querySelector('.global-player-2');
let scoreCurrentPlayer1 = document.querySelector('.round-player-1');
 scoreCurrentPlayer2 = document.querySelector('.round-player-2');
const buttonNewGame = document.querySelector('.bloc-new-game');
const buttonDiceRolls = document.querySelector('.items-roll-dice');
const buttonHold = document.querySelector('.items-hold');
const dice = document.getElementById('dice');

// variables //
const imagesDice = ["../images/dice1.png",
"../images/dice1.png",
"../images/dice1.png",
"../images/dice1.png",
"../images/dice1.png",
"../images/dice1.png",
]



//functions ---------------------------------------//
const reset = ()=>{
    circlePlayer1.classList.add('circle');
    circlePlayer2.classList.remove('circle');
    containerPlayer1.classList.add('player-active');
    containerPlayer1.setAttribute("active", "1");
    containerPlayer1.classList.remove('player-disable');
    containerPlayer2.setAttribute('active', '0')
    containerPlayer2.classList.remove('player-active');
    containerPlayer2.classList.add('player-disable');    
    scoreGlobalPlayer1.textContent = 0;
    scoreGlobalPlayer2.textContent = 0;
    scoreCurrentPlayer1.textContent = 0;
    scoreCurrentPlayer2.textContent = 0;
    dice.setAttribute("src", imagesDice[0]);
}

// function pour modifier etat actif ou inactif du joueur
const changePlayer = ()=>{
let attributPlayer = Number(containerPlayer1.getAttribute("active"));

if (attributPlayer === 1){
    //modifie etat actif à inactif pour player 1
    circlePlayer1.classList.remove('circle');
    containerPlayer1.classList.remove('player-active');
    containerPlayer1.classList.add('player-disable');
    scoreGlobalPlayer1 += scoreCurrentPlayer1;
    scoreCurrentPlayer1 = 0;
    containerPlayer1.removeAttribute("active", "1");
    containerPlayer1.setAttribute("active", "0");
    //modifie etat inactif à actif pour player 2
    circlePlayer2.classList.add('circle');
    containerPlayer2.classList.add('player-active');
    containerPlayer2.classList.remove('player-disable');    
    scoreCurrentPlayer2 = 0;
    containerPlayer2.removeAttribute("active", "0");
    containerPlayer2.setAttribute("active", "1");    
} else{    
    //modifie etat inactif à actif pour player 1
    circlePlayer1.classList.add('circle');
    containerPlayer1.classList.add('player-active');
    containerPlayer1.classList.remove('player-disable');    
    scoreCurrentPlayer1 = 0;
    containerPlayer1.removeAttribute("active", "0");
    containerPlayer1.setAttribute("active", "1");
    //modifie etat actif à inactif pour player 2
    circlePlayer2.classList.remove('circle');
    containerPlayer2.classList.remove('player-active');
    containerPlayer2.classList.add('player-disable'); 
    scoreGlobalPlayer2 += scoreCurrentPlayer2;
    scoreCurrentPlayer2 = 0;
    containerPlayer2.removeAttribute("active", "1");
    containerPlayer2.setAttribute("active", "0");    
    }   
}


// chargement de page du jeu //
window.onload = () => {
    reset();
};

// ecoute du bouton new game du jeu //
buttonNewGame.addEventListener("click", reset);

// ecoute du bouton hold du jeu //
buttonHold.addEventListener('click', changePlayer);

