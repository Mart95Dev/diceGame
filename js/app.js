// variables  DOM//
const players = document.querySelectorAll('.players');
const containerPlayer1 = document.querySelector('.container-player-1');
const containerPlayer2 = document.querySelector('.container-player-2');
const circlePlayer1 = document.getElementById('circle-player-1');
const circlePlayer2 = document.getElementById('circle-player-2');
let scoreGlobalPlayer1 = document.querySelector('.global-player-1');
let scoreGlobalPlayer2 = document.querySelector('.global-player-2');
let scoreCurrentPlayer1 = document.querySelector('.round-player-1');
let scoreCurrentPlayer2 = document.querySelector('.round-player-2');
const buttonNewGame = document.querySelector('.bloc-new-game');
const buttonDiceRolls = document.querySelector('.items-roll-dice');
const buttonHold = document.querySelector('.items-hold');
const dice = document.getElementById('dice');
const textDice = document.getElementById('text-dice');
//////////////////////////////////////////////////////////////////////

// variables //
const imagesDice = [
"../images/dice1.png",
"../images/dice2.png",
"../images/dice3.png",
"../images/dice4.png",
"../images/dice5.png",
"../images/dice6.png",
]
let diceValue = 0;
let attributPlayer = 0;
let diceValueTemp = 0;
//////////////////////////////////////////


//functions ---------------------------------------//

//function initialisation text-dice new game
const diceNewGame = ()=>{
    dice.setAttribute("src", imagesDice[0]);
    diceValue = 0;
    textDice.textContent="";
     return;
}
//function initialisation dice au démarrage
const diceimages = ()=>{
    dice.setAttribute("src", imagesDice[0]);    
    diceValue = 0;
     return;
}

//function message dice
const messageDiceHold = ()=>{
    if(Number(containerPlayer1.getAttribute('active')) === 0){
        textDice.textContent = 'your pass game to Player 2'
    }else{
        textDice.textContent = 'your pass game to Player 1'
    }
}

const scoreCurrent = ()=>{
    if(Number(containerPlayer1.getAttribute('active')) === 1){  
              
        if(diceValue === 0){
            diceValueTemp = 0;
            let scoreCurrentTemp = diceValueTemp;    
             scoreCurrentPlayer1.textContent = Number(scoreCurrentPlayer1.textContent) + scoreCurrentTemp;
        }else{
            diceValueTemp = diceValue + 1;
            let scoreCurrentTemp = diceValueTemp;    
            scoreCurrentPlayer1.textContent = Number(scoreCurrentPlayer1.textContent) + scoreCurrentTemp;
        };
    } 
    
    if(Number(containerPlayer2.getAttribute('active')) === 1){
        if(diceValue === 0){
            diceValueTemp = 0;
            console.log(diceValueTemp)
            let scoreCurrentTemp = diceValueTemp;    
             scoreCurrentPlayer2.textContent = Number(scoreCurrentPlayer2.textContent) + scoreCurrentTemp;
        }else{
            diceValueTemp = diceValue + 1;
            console.log(diceValueTemp)
            let scoreCurrentTemp = diceValueTemp;    
            scoreCurrentPlayer2.textContent = Number(scoreCurrentPlayer2.textContent) + scoreCurrentTemp;
        };
    } 
}
    




// function utile au demarrage du jeu et au clic du bouton new game
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
    diceNewGame();
    textDice.classList.remove('text-dice'); 
    buttonHold.classList.remove('items-hold');
    buttonHold.classList.add('items-hold-disable');
    return;   
}

// calcul score global//
const calcScoreGlobalPlayer1 = ()=> {
    let tempGlobal = Number(scoreGlobalPlayer1.textContent);
    let tempCurrent = Number(scoreCurrentPlayer1.textContent);
    scoreGlobalPlayer1.textContent = tempGlobal + tempCurrent;  
    return; 
}

const calcScoreGlobalPlayer2 = ()=> {
    let tempGlobal = Number(scoreGlobalPlayer2.textContent);
    let tempCurrent = Number(scoreCurrentPlayer2.textContent);   
    scoreGlobalPlayer2.textContent = tempGlobal + tempCurrent;
    return; 
}

// function pour modifier etat actif ou inactif du joueur
const changePlayer = ()=>{
attributPlayer = Number(containerPlayer1.getAttribute("active"));

if (attributPlayer === 1){ 
    //modifie etat actif à inactif pour player 1    
    circlePlayer1.classList.remove('circle');
    containerPlayer1.classList.remove('player-active');
    containerPlayer1.classList.add('player-disable');
    calcScoreGlobalPlayer1();
    scoreCurrentPlayer1.textContent = 0;    
    containerPlayer1.removeAttribute("active", "1");
    containerPlayer1.setAttribute("active", "0");
    //modifie etat inactif à actif pour player 2
    circlePlayer2.classList.add('circle');
    containerPlayer2.classList.add('player-active');
    containerPlayer2.classList.remove('player-disable');    
    scoreCurrentPlayer2.textContent = 0;
    containerPlayer2.removeAttribute("active", "0");
    containerPlayer2.setAttribute("active", "1");   
    diceimages();
    messageDiceHold();
} else{    
    //modifie etat inactif à actif pour player 1
    circlePlayer1.classList.add('circle');
    containerPlayer1.classList.add('player-active');
    containerPlayer1.classList.remove('player-disable');    
    scoreCurrentPlayer1.textContent = 0;
    containerPlayer1.removeAttribute("active", "0");
    containerPlayer1.setAttribute("active", "1");
    //modifie etat actif à inactif pour player 2
    circlePlayer2.classList.remove('circle');
    containerPlayer2.classList.remove('player-active');
    containerPlayer2.classList.add('player-disable'); 
    calcScoreGlobalPlayer2();
    scoreCurrentPlayer2.textContent = 0;
    containerPlayer2.removeAttribute("active", "1");
    containerPlayer2.setAttribute("active", "0");   
    diceimages();
    messageDiceHold();
    }   
}

/// function pour cumuler les poinst du lancé du dé
//you pass the game to
//You've lost
//You've won
const rollDice = ()=>{
    dice.classList.add('shake');
setTimeout(function(){
    dice.classList.remove('shake');
    diceValue = Math.floor(Math.random()* 6);
    dice.setAttribute('src',imagesDice[diceValue]);
    textDice.classList.remove('text-dice-disable');
    textDice.classList.add('text-dice');
    textDice.textContent = `Your rolls is ${diceValue + 1}`;        
    },300); 
    buttonHold.classList.remove('items-hold-disable');
    buttonHold.classList.add('items-hold');
    scoreCurrent();
}


// chargement de page du jeu //
window.onload = () => {
    reset();

};

// ecoute du bouton new game du jeu //
buttonNewGame.addEventListener("click", reset);

// ecoute du bouton hold du jeu //
buttonHold.addEventListener('click', changePlayer);

// ecoute du bouton Rolls dice //
buttonDiceRolls.addEventListener('click', rollDice);


