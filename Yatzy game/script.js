'use strict';

//----------------------------------------- Selectors
// Buttons
const btnInstructions = document.querySelector('.btn_instructions');
const btnPlay = document.querySelector('.btn_play');
const btnNext = document.querySelector('.btn_next');
const btnBack = document.querySelector('.btn_back');
const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const btnMenu = document.querySelectorAll('.btn_menu');
const btnNewGame = document.querySelectorAll('.btn_new-game');

// Home page
const menuContanier = document.querySelector('.container_menu');
const diceContanier = document.querySelector('.center-container');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subtitle');
const logo = document.querySelector('.logo');

// Instructions
const instructionsBox = document.querySelector('.instructions_container');

// Select players
const numberOfPlayers = document.querySelector('.select-players');
const selectTwoPlayers = document.querySelector('.select_player--2');
const selectThreePlayers = document.querySelector('.select_player--3');
const selectFourPlayers = document.querySelector('.select_player--4');

// Players name input
const firstNamePlayer = document.querySelector('.player-name--1');
const secondNamePlayer = document.querySelector('.player-name--2');
const thirdNamePlayer = document.querySelector('.player-name--3');
const fourthNamePlayer = document.querySelector('.player-name--4');

// Players container
const player1 = document.querySelector('.item--1');
const player2 = document.querySelector('.item--2');
const player3 = document.querySelector('.item--3');
const player4 = document.querySelector('.item--4');

// Score
let scoreEl1 = document.querySelector('.item_current-score--1');
let scoreEl2 = document.querySelector('.item_current-score--2');
let scoreEl3 = document.querySelector('.item_current-score--3');
let scoreEl4 = document.querySelector('.item_current-score--4');

let totalScore1 = document.querySelector('.total--score--1');
let totalScore2 = document.querySelector('.total--score--2');
let totalScore3 = document.querySelector('.total--score--3');
let totalScore4 = document.querySelector('.total--score--4');

// Dice
const allDice = document.querySelectorAll('.dice-container--dice');
const diceEl1 = document.querySelector('.dice--1');
const diceEl2 = document.querySelector('.dice--2');
const diceEl3 = document.querySelector('.dice--3');
const diceEl4 = document.querySelector('.dice--4');
const diceEl5 = document.querySelector('.dice--5');

//-----------------------------------Constants
let playersNumber = 0;
scoreEl1.textContent = 0;
scoreEl2.textContent = 0;
scoreEl3.textContent = 0;
scoreEl4.textContent = 0;
for (let i = 0; i < allDice.length; i++){
    allDice[i].classList.add('hidden');
}
let currentScore = 0;
let activePlayer = 1;
let sumDice1 = 0;
let sumDice2 = 0;
let sumDice3 = 0;
let sumDice4 = 0;
let sumDice5 = 0;
let sumDice6 = 0;
let switchPlayer1 = 0;
let switchPlayer2 = 0;
let switchPlayer3 = 0;
let switchPlayer4 = 0;
let switchPlayer5 = 0;
let switchPlayer6 = 0;
let diceRemaining = 5;
let diceRemainingFor = 5;
let totalScore = [0, 0, 0, 0];
let prag0,prag1,prag2,prag3;
let tScore0 = 0;
let tScore1 = 0;
let tScore2 = 0;
let tScore3 = 0;
let query670 = window.matchMedia('(max-width: 670px)');
let query600 = window.matchMedia('(max-width: 600px)');
let query550 = window.matchMedia('(max-width: 550px)');
let query410 = window.matchMedia('(max-width: 410px)');
let query550h = window.matchMedia('(max-height: 550px)');
let query510h = window.matchMedia('(max-height: 510px)');
let query410h = window.matchMedia('(max-height: 410px)');
let query300h = window.matchMedia('(max-height: 300px)');
//-----------------------------------Functions
const removeFirstBtns = () => {
    btnInstructions.classList.add('hidden');
    btnPlay.classList.add('hidden');
}

const selectingTwoPlayers = () => {
    numberOfPlayers.classList.add('hidden');
    firstNamePlayer.classList.remove('hidden');
    secondNamePlayer.classList.remove('hidden');
}

const btnsAndNamesBack = () => {
    firstNamePlayer.classList.add('hidden');
    secondNamePlayer.classList.add('hidden');
    thirdNamePlayer.classList.add('hidden');
    fourthNamePlayer.classList.add('hidden');
    btnNext.classList.add('hidden');
    btnBack.classList.add('hidden');
}

const showFirst2Players = () => {
    menuContanier.classList.add('hidden');
    player1.classList.remove('hidden');
    player2.classList.remove('hidden');
}

const flexColumnCenter = (player) => {
    player.style.flexDirection = 'column-reverse';
    player.style.justifyContent = 'space-around';
}

const switchPlayer = () => {
    currentScore = 0;
    document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.item--${activePlayer}`).classList.remove('player-active');
    activePlayer += 1;
    diceRemaining = 5;
    diceRemainingFor = 5;
    if(activePlayer > playersNumber){
        activePlayer = 1;
    }
    document.querySelector(`.item--${activePlayer}`).classList.add('player-active');
}

const menu_newGame = () => {
    totalScore1.textContent = 0;
    totalScore2.textContent = 0;
    totalScore3.textContent = 0;
    totalScore4.textContent = 0;
    scoreEl1.textContent = 0;
    scoreEl2.textContent = 0;
    scoreEl3.textContent = 0;
    scoreEl4.textContent = 0;
    currentScore = 0;
    activePlayer = 1;
    switchPlayer1 = 0;
    switchPlayer2 = 0;
    switchPlayer3 = 0;
    switchPlayer4 = 0;
    switchPlayer5 = 0;
    switchPlayer6 = 0;
    diceRemaining = 5;
    diceRemainingFor = 5;
    totalScore = [0, 0, 0, 0];
    tScore0 = 0;
    tScore1 = 0;
    tScore2 = 0;
    tScore3 = 0;
    for (let i = 0; i < allDice.length; i++){
        allDice[i].classList.add('hidden');
    }
}


//------------------------------------------ Code

btnInstructions.addEventListener('click', () => {
    removeFirstBtns();
    instructionsBox.classList.remove('hidden');
    btnBack.classList.remove('hidden');
    title.classList.add('hidden');
    subTitle.classList.add('hidden');
    logo.classList.add('hidden');
})

btnBack.addEventListener('click', () => {
    btnInstructions.classList.remove('hidden');
    btnPlay.classList.remove('hidden');
    instructionsBox.classList.add('hidden');
    numberOfPlayers.classList.add('hidden');
    title.classList.remove('hidden');
    subTitle.classList.remove('hidden');
    logo.classList.remove('hidden');
    btnsAndNamesBack();
})

// Play button
btnPlay.addEventListener('click', () => {
    removeFirstBtns();
    numberOfPlayers.classList.remove('hidden');
    btnBack.classList.remove('hidden');
})

// Selecting players
selectTwoPlayers.addEventListener('click', () => {
    selectingTwoPlayers();
    btnNext.classList.remove('hidden');
    playersNumber = 2;
    if(query600.matches && query550h.matches){
        title.classList.add('hidden');
        subTitle.classList.add('hidden');
        logo.classList.add('hidden');
    }else{
        title.classList.remove('hidden');
        subTitle.classList.remove('hidden');
        logo.classList.remove('hidden');
    }
})

selectThreePlayers.addEventListener('click', () => {
    selectingTwoPlayers();
    thirdNamePlayer.classList.remove('hidden');
    btnNext.classList.remove('hidden');
    title.classList.add('hidden');
    subTitle.classList.add('hidden');
    logo.classList.add('hidden');
    playersNumber = 3;
    if(query600.matches && query550h.matches){
        title.classList.add('hidden');
        subTitle.classList.add('hidden');
        logo.classList.add('hidden');
    }else{
        title.classList.remove('hidden');
        subTitle.classList.remove('hidden');
        logo.classList.remove('hidden');
    }
})

selectFourPlayers.addEventListener('click', () => {
    selectingTwoPlayers();
    thirdNamePlayer.classList.remove('hidden');
    fourthNamePlayer.classList.remove('hidden');
    btnNext.classList.remove('hidden');
    title.classList.add('hidden');
    subTitle.classList.add('hidden');
    logo.classList.add('hidden');
    playersNumber = 4;
    if(query600.matches && query550h.matches){
        title.classList.add('hidden');
        subTitle.classList.add('hidden');
        logo.classList.add('hidden');
    }else{
        title.classList.remove('hidden');
        subTitle.classList.remove('hidden');
        logo.classList.remove('hidden');
    }
})

// Next button
btnNext.addEventListener('click', () => {
    btnsAndNamesBack();
    diceContanier.classList.remove('hidden');
    document.querySelector('.container--small').classList.remove('hidden');

    // 2 Players
    if(playersNumber === 2){
        showFirst2Players();
        player3.classList.add('hidden');
        player4.classList.add('hidden');
        player1.style.gridRow = 'row-1_start/row-2_end';
        flexColumnCenter(player1);
        player2.style.gridRow = 'row-1_start/row-2_end';
        flexColumnCenter(player2);
        document.querySelector('.item_container--1').style.width = '60%';
        document.querySelector('.item_container--2').style.width = '60%';
        if(query670.matches){
            player1.style.gridRow = 'row-1_start/row-1_end';
            player1.style.gridColumn = 'column-1_start/column-2_end';
            player2.style.gridRow = 'row-2_start/row-2_end';
            player2.style.gridColumn = 'column-1_start/column-2_end';
            document.querySelector('.item_container--1').style.position = 'absolute';
            document.querySelector('.item_container--1').style.left = '50%';
            document.querySelector('.item_container--1').style.top = '2rem';
            document.querySelector('.item_container--1').style.transform = 'translate(-50%,0%)';
            document.querySelector('.player--1').style.position = 'absolute';
            document.querySelector('.player--1').style.bottom = '2rem';
            document.querySelector('.item--2').style.alignItems = 'inherit';
            document.querySelector('.item--2').style.justifyContent = 'inherit';
            document.querySelector('.item_container--2').style.position = 'absolute';
            document.querySelector('.item_container--2').style.left = '50%';
            document.querySelector('.item_container--2').style.bottom = '2rem';
            document.querySelector('.item_container--2').style.transform = 'translate(-50%,0%)';
            document.querySelector('.player--2').style.position = 'absolute';
            document.querySelector('.player--2').style.top = '2rem';
        }
        if(query550.matches){
            document.querySelector('.player--1').style.left = '0';
            document.querySelector('.player--2').style.left = '0';
            for (let i = 0; i < 3; i++){
                document.querySelectorAll('.player')[i].style.textAlign = 'center';
                document.querySelectorAll('.player')[i].style.width = '100%';
            }
            document.querySelector('.player--1').style.bottom = '40%';
            document.querySelector('.player--2').style.top = '40%';
            document.querySelector('.player--2').style.marginTop = '0';
        }
        if(query410.matches){
            document.querySelector('.player--1').style.bottom = '48%';
            document.querySelector('.player--2').style.top = '48%';
        }
    }else 
    
    // 3 Players
    if(playersNumber === 3){
        showFirst2Players();
        player3.classList.remove('hidden');
        player4.classList.add('hidden');
        player1.style.gridRow = 'row-1_start/row-2_end';
        flexColumnCenter(player1);
        player2.style.gridRow = 'row-1_start/row-1_end';
        player3.style.alignItems = 'flex-end';
        document.querySelector('.item_container--1').style.width = '60%';
        player2.style.justifyContent = 'space-between';
        player2.style.flexDirection = 'column';
        if(query670.matches){
            player1.style.gridRow = 'row-1_start/row-1_end';
            player1.style.gridColumn = 'column-1_start/column-2_end';
            player2.style.gridRow = 'row-2_start/row-2_end';
            player2.style.gridColumn = 'column-1_start/column-1_end';
            player2.style.flexDirection = 'column-reverse';
            player2.style.alignItems = 'inherit';
            document.querySelector('.item_container--1').style.position = 'absolute';
            document.querySelector('.item_container--1').style.left = '50%';
            document.querySelector('.item_container--1').style.top = '2rem';
            document.querySelector('.item_container--1').style.transform = 'translate(-50%,0%)';
            document.querySelector('.player--1').style.position = 'absolute';
            document.querySelector('.player--1').style.bottom = '2rem';
            document.querySelector('.item_container--2').style.width = '100%';
            document.querySelector('.item_container--2').style.position = 'inherit';
            document.querySelector('.item_container--2').style.left = '0';
            document.querySelector('.item_container--2').style.bottom = 'inherit';
            document.querySelector('.item_container--2').style.transform = 'translate(0,0)';
            document.querySelector('.player--2').style.textAlign = 'inherit';
            player2.style.alignItems = 'inherit';
        }
        if(query550.matches){
            document.querySelector('.player--1').style.left = '0';
            for (let i = 0; i < 3; i++){
                document.querySelectorAll('.player')[i].style.textAlign = 'center';
                document.querySelectorAll('.player')[i].style.width = '100%';
            }
            document.querySelector('.player--2').style.marginBottom = '10%';
            document.querySelector('.player--3').style.marginBottom = '10%';
            document.querySelector('.player--1').style.bottom = '40%';
            player2.style.justifyContent = 'inherit';
            document.querySelector('.player--2').style.position = 'inherit';
            document.querySelector('.player--2').style.top = 'inherit';
        }
        if(query410.matches){
            document.querySelector('.player--1').style.bottom = '48%';
        }
        if(query510h.matches){
            player1.style.gridRow = 'row-1_start/row-2_end';
            player1.style.gridColumn = 'column-1_start/column-1_end';
            player2.style.gridRow = 'row-1_start/row-1_end';
            player2.style.gridColumn = 'column-2_start/column-2_end';
            player2.style.flexDirection = 'column';
            player2.style.alignItems = 'flex-end';
            document.querySelector('.item_container--2').style.width = '80%';
            document.querySelector('.item_container--1').style.position = 'inherit';
            document.querySelector('.player--1').style.position = 'inherit';
            document.querySelector('.item_container--1').style.transform = 'inherit';
            document.querySelector('.item_container--1').style.top = 'inherit';
            document.querySelector('.item_container--1').style.left = 'inherit';
            document.querySelector('.player--1').style.bottom = 'inherit'; 
        }
        if(query410h.matches){
            document.querySelector('.item_container--2').style.width = '60%';
        }
        if(query300h.matches){
            document.querySelector('.item_container--2').style.width = '50%';
        }
    }else 
    
    // 4 Players
    if(playersNumber === 4){
        showFirst2Players();
        player3.classList.remove('hidden');
        player4.classList.remove('hidden');
        player1.style.gridRow = 'row-1_start/row-1_end';
        player1.style.gridColumn = 'column-1_start/column-1_end';
        player2.style.gridRow = 'row-1_start/row-1_end';
        player2.style.gridColumn = 'column-2_start/column-2_end';
        player3.style.alignItems = 'inherit';
        player1.style.justifyContent = 'space-between';
        player1.style.flexDirection = 'column';
        player2.style.justifyContent = 'space-between';
        player2.style.flexDirection = 'column';
        if(query670.matches){
            document.querySelector('.item_container--1').style.width = '100%';
            document.querySelector('.item_container--1').style.position = 'inherit';
            document.querySelector('.item_container--1').style.left = '0';
            document.querySelector('.item_container--1').style.top = '0';
            document.querySelector('.item_container--1').style.transform = 'translate(0,0)';
            document.querySelector('.item_container--2').style.width = '100%';
            document.querySelector('.item_container--2').style.position = 'inherit';
            document.querySelector('.item_container--2').style.left = '0';
            document.querySelector('.item_container--2').style.bottom = 'inherit';
            document.querySelector('.item_container--2').style.transform = 'translate(0,0)';
            document.querySelector('.player--2').style.position = 'inherit';
            document.querySelector('.player--2').style.top = '0';
            player2.style.alignItems = 'inherit';
            document.querySelector('.player--2').style.textAlign = 'right';
            player4.style.alignItems = 'inherit';
            document.querySelector('.player--4').style.textAlign = 'right';
        }
        if(query550.matches){
            for (let i = 0; i < 4; i++){
                document.querySelectorAll('.player')[i].style.textAlign = 'center';
            }
            document.querySelector('.player--1').style.marginTop = '10%';
            document.querySelector('.player--2').style.marginTop = '10%';
            document.querySelector('.player--3').style.marginBottom = '10%';
            document.querySelector('.player--4').style.marginBottom = '10%';
            player1.style.justifyContent = 'inherit';
            player2.style.justifyContent = 'inherit';
            document.querySelector('.player--1').style.position = 'inherit';
            document.querySelector('.player--1').style.bottom = 'inherit';
        }
        if(query510h.matches){
            document.querySelector('.item_container--1').style.width = '80%';
            document.querySelector('.item_container--2').style.width = '80%';
            player2.style.alignItems = 'flex-end';
            player4.style.alignItems = 'flex-end';
            document.querySelector('.player--1').style.bottom = 'inherit';
        }
        if(query410h.matches){
            document.querySelector('.item_container--1').style.width = '60%';
            document.querySelector('.item_container--2').style.width = '60%';
        }
        if(query300h.matches){
            document.querySelector('.item_container--1').style.width = '50%';
            document.querySelector('.item_container--2').style.width = '50%';
        }
    }

    // Players name
    for(let i=1; i <= playersNumber; i++){
        const playersNameInput = document.querySelector(`.player-name--${i}`).value
        if(playersNameInput.length > 0){
            document.querySelector(`.player--${[i]}`).textContent = playersNameInput;
        }else{
            document.querySelector(`.player--${[i]}`).textContent = `Player ${i}`;
        }
    }
})

// Roll Button
btnRoll.addEventListener('click', () => {
    console.log('Active Player:',activePlayer);
    // Creare zaruri
    let dice1 = Math.trunc(Math.random()*6)+1;
    let dice2 = Math.trunc(Math.random()*6)+1;
    let dice3 = Math.trunc(Math.random()*6)+1;
    let dice4 = Math.trunc(Math.random()*6)+1;
    let dice5 = Math.trunc(Math.random()*6)+1;
    const arrayDice = [dice1, dice2, dice3, dice4, dice5];
    console.log(arrayDice);

    for (let i = 0; i < allDice.length; i++){
        allDice[i].classList.remove('hidden');
    }
    diceEl1.src = `dice/dice-${dice1}.png`;
    diceEl2.src = `dice/dice-${dice2}.png`;
    diceEl3.src = `dice/dice-${dice3}.png`;
    diceEl4.src = `dice/dice-${dice4}.png`;
    diceEl5.src = `dice/dice-${dice5}.png`;
    console.log('Dice remaining:',diceRemaining);

    // Afisare zaruri
    if(diceRemaining === 5){
        diceEl5.classList.remove('hidden');
        diceEl4.classList.remove('hidden');
        diceEl3.classList.remove('hidden');
        diceEl2.classList.remove('hidden');

        diceEl1.style.transform = 'none';
        diceEl1.style.top = '2rem';
        diceEl1.style.left = '2rem';

        diceEl2.style.transform = 'none';
        diceEl2.style.bottom = 'inherit';
        diceEl2.style.left = 'inherit';
        diceEl2.style.top = '2rem';
        diceEl2.style.right = '2rem';

        diceEl3.style.bottom = 'inherit';
        diceEl3.style.right = 'inherit';
        diceEl3.style.top = '50%';
        diceEl3.style.left = '50%';
        diceEl3.style.transform = 'translate(-50%, -50%)';

        diceEl4.style.right = 'inherit';
        diceEl4.style.left = '2rem';
    }
    
    if(diceRemaining === 4){
        diceEl5.classList.add('hidden');

        diceEl4.style.left = 'inherit';
        diceEl4.style.right = '2rem';

        diceEl3.style.transform = 'none';
        diceEl3.style.left = '2rem';
        diceEl3.style.top = 'inherit';
        diceEl3.style.bottom = '2rem';
    }
    if(diceRemaining === 3){
        diceEl5.classList.add('hidden');
        diceEl4.classList.add('hidden');

        diceEl3.style.transform = 'none';
        diceEl3.style.left = 'inherit';
        diceEl3.style.top = 'inherit';
        diceEl3.style.bottom = '2rem';
        diceEl3.style.right = '2rem';

        diceEl2.style.right = 'inherit';
        diceEl2.style.top = '50%';
        diceEl2.style.left = '50%';
        diceEl2.style.transform = 'translate(-50%, -50%)';
    }
    if(diceRemaining === 2){
        diceEl5.classList.add('hidden');
        diceEl4.classList.add('hidden');
        diceEl3.classList.add('hidden');

        diceEl2.style.transform = 'none';
        diceEl2.style.left = 'inherit';
        diceEl2.style.top = 'inherit';
        diceEl2.style.bottom = '2rem';
        diceEl2.style.right = '2rem';
    }
    if(diceRemaining === 1){
        diceEl5.classList.add('hidden');
        diceEl4.classList.add('hidden');
        diceEl3.classList.add('hidden');
        diceEl2.classList.add('hidden');

        diceEl1.style.top = '50%';
        diceEl1.style.left = '50%';
        diceEl1.style.transform = 'translate(-50%, -50%)';
    }

    for(let i=0; i<diceRemaining; i++){
        if(arrayDice[i] === 1){
            sumDice1 += 1;
            diceRemainingFor -= 1;
        }if(arrayDice[i] === 2){
            sumDice2 += 1;
        }if(arrayDice[i] === 3){
            sumDice3 += 1;
        }if(arrayDice[i] === 4){
            sumDice4 += 1;
        }if(arrayDice[i] === 5){
            sumDice5 += 1;
            diceRemainingFor -= 1;
        }if(arrayDice[i] === 6){
            sumDice6 += 1;
        }      
    }

    if(sumDice2 === 3 || sumDice3 === 3 || sumDice4 === 3 || sumDice6 === 3){
        diceRemainingFor -= 3;
    }
    if(sumDice2 === 4 || sumDice3 === 4 || sumDice4 === 4 || sumDice6 === 4){
        diceRemainingFor -= 4;
    }
    if(sumDice2 === 5 || sumDice3 === 5 || sumDice4 === 5 || sumDice6 === 5){
        diceRemainingFor -= 5;
    }
    diceRemaining = diceRemainingFor;
    
    if(diceRemainingFor === 0){
        diceRemaining = 5;
        diceRemainingFor = 5;
    }

    console.log(sumDice1);
    console.log(sumDice2);
    console.log(sumDice3);
    console.log(sumDice4);
    console.log(sumDice5);
    console.log(sumDice6);
    // Afisare scor
    // Dice1
    if(sumDice1 === 5){
        document.querySelector('.container--small').classList.add('hidden');
        document.querySelector('.center-container').classList.add('hidden');
        document.querySelector('.container_playerWin').classList.remove('hidden');
        document.querySelector('.playerWin').textContent = document.querySelector(`.player--${activePlayer}`).textContent;
    }else if(sumDice1 === 4){
        currentScore += 200;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice1 === 3){
        currentScore += 100;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice1 === 2){
        currentScore += 20;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice1 === 1){
        currentScore += 10;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice1 === 0){
        switchPlayer1 = 1;
        console.log('SwitchPlayer1 =', switchPlayer1);
    }
    sumDice1 = 0;

    // Dice2
    if(sumDice2 === 5){
        currentScore += 80;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice2 === 4){
        currentScore += 40;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice2 === 3){
        currentScore += 20;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer2 = 1;
        console.log('SwitchPlayer2 =', switchPlayer2);
    }
    sumDice2 = 0;

    // Dice3
    if(sumDice3 === 5){
        currentScore += 120;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice3 === 4){
        currentScore += 60;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice3 === 3){
        currentScore += 30;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer3 = 1;
        console.log('SwitchPlayer3 =', switchPlayer3);
    }
    sumDice3 = 0;

    // Dice4
    if(sumDice4 === 5){
        currentScore += 160;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice4 === 4){
        currentScore += 80;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice4 === 3){
        currentScore += 40;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer4 = 1;
        console.log('SwitchPlayer4 =', switchPlayer4);
    }
    sumDice4 = 0;

    // Dice 5
    if(sumDice5 === 5){
        currentScore += 200;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice5 === 4){
        currentScore += 100;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice5 === 3){
        currentScore += 50;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice5 === 2){
        currentScore += 10;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice5 === 1){
        currentScore += 5;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;     
    }else if(sumDice5 === 0){
        switchPlayer5 = 1;
        console.log('SwitchPlayer5 =', switchPlayer5);
    }
    sumDice5 = 0;

    // Dice6
    if(sumDice6 === 5){
        currentScore += 240;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice6 === 4){
        currentScore += 120;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else if(sumDice6 === 3){
        currentScore += 60;
        document.querySelector(`.item_current-score--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer6 = 1;
        console.log('SwitchPlayer6 =', switchPlayer6);
    }
    sumDice6 = 0;
    

    // 1000 points WIN GAME
    if(totalScore[activePlayer-1]+currentScore > 1000){
        switchPlayer();
        console.log('mai mare ca 1000');
    }else if(totalScore[activePlayer-1]+currentScore === 1000){
        document.querySelector('.container--small').classList.add('hidden');
        document.querySelector('.center-container').classList.add('hidden');
        document.querySelector('.container_playerWin').classList.remove('hidden');
        document.querySelector('.playerWin').textContent = document.querySelector(`.player--${activePlayer}`).textContent;
    }
    

    // Schimbare jucator
    if(switchPlayer1 === 1 && switchPlayer2 === 1 && switchPlayer3 === 1 && switchPlayer4 === 1 && switchPlayer5 === 1 && switchPlayer6 === 1){
        console.log('switch player');
        switchPlayer();
    }
    switchPlayer1 = 0;
    switchPlayer2 = 0;
    switchPlayer3 = 0;
    switchPlayer4 = 0;
    switchPlayer5 = 0;
    switchPlayer6 = 0;
    console.log('Current score =',currentScore);  
})

// Hold Button
btnHold.addEventListener('click', () => {
    let order = 1;
    let justOne = 0;
    tScore0 = totalScore[0];
    tScore1 = totalScore[1];
    tScore2 = totalScore[2];
    tScore3 = totalScore[3];
    console.log('Tscores:',tScore0,tScore1,tScore2,tScore3);
    console.log('Current score2 =',currentScore);
    if(activePlayer === 1 && order === 1){
        if(totalScore[0] >= 300 && totalScore[0] < 400){
            prag0 = 400-totalScore[0];
        }else if(totalScore[0] >= 600 && totalScore[0] < 700){
            prag0 = 700-totalScore[0];
        }
        if(currentScore >= prag0 || totalScore[0] >= 700){
            totalScore[0] += currentScore;
            totalScore1.textContent = totalScore[0];
            switchPlayer();
            order = 0;
        }else if(currentScore >= prag0 || totalScore[0] >= 400 && totalScore[0] < 600){
            totalScore[0] += currentScore;
            totalScore1.textContent = totalScore[0];
            switchPlayer();
            order = 0;
            prag0 = 700 - totalScore[0];
        }else if(currentScore >= 100 || totalScore[0] >= 100 && totalScore[0] < 300){
            totalScore[0] += currentScore;
            totalScore1.textContent = totalScore[0];
            switchPlayer();
            order = 0;
            prag0 = 400-totalScore[0];
        }else if(totalScore[0] < 100 && currentScore >= 100-totalScore[0]){
            totalScore[0] += currentScore;
            totalScore1.textContent = totalScore[0];
            switchPlayer();
            order = 0;
        }
        
        console.log('Prag0:',prag0);
    }
    if(activePlayer === 2 && order === 1){
        if(totalScore[1] >= 300 && totalScore[1] < 400){
            prag1 = 400-totalScore[1];
        }else if(totalScore[1] >= 600 && totalScore[1] < 700){
            prag1 = 700-totalScore[1];
        }
        if(currentScore >= prag1 || totalScore[1] >= 700){
            totalScore[1] += currentScore;
            totalScore2.textContent = totalScore[1];
            switchPlayer();
            order = 0;
        }else if(currentScore >= prag1 || totalScore[1] >= 400 && totalScore[1] < 600){
            totalScore[1] += currentScore;
            totalScore2.textContent = totalScore[1];
            switchPlayer();
            order = 0;
            prag1 = 700 - totalScore[1];
        }else if(currentScore >= 100 || totalScore[1] >= 100 && totalScore[1] < 300){
            totalScore[1] += currentScore;
            totalScore2.textContent = totalScore[1];
            switchPlayer();
            order = 0;
            prag1 = 400-totalScore[1];
        }else if(totalScore[1] < 100 && currentScore >= 100-totalScore[1]){
            totalScore[1] += currentScore;
            totalScore2.textContent = totalScore[1];
            switchPlayer();
            order = 0;
        }
        console.log('Prag1:',prag1);
    }
    if(activePlayer === 3 && order === 1){
        if(totalScore[2] >= 300 && totalScore[2] < 400){
            prag2 = 400-totalScore[2];
        }else if(totalScore[2] >= 600 && totalScore[2] < 700){
            prag2 = 700-totalScore[2];
        }
        if(currentScore >= prag2 || totalScore[2] >= 700){
            totalScore[2] += currentScore;
            totalScore3.textContent = totalScore[2];
            switchPlayer();
            order = 0;
        }else if(currentScore >= prag2 || totalScore[2] >= 400 && totalScore[2] < 600){
            totalScore[2] += currentScore;
            totalScore3.textContent = totalScore[2];
            switchPlayer();
            order = 0;
            prag2 = 700 - totalScore[2];
        }else if(currentScore >= 100 || totalScore[2] >= 100 && totalScore[2] < 300){
            totalScore[2] += currentScore;
            totalScore3.textContent = totalScore[2];
            switchPlayer();
            order = 0;
            prag2 = 400-totalScore[2];
        }else if(totalScore[2] < 100 && currentScore >= 100-totalScore[2]){
            totalScore[2] += currentScore;
            totalScore3.textContent = totalScore[2];
            switchPlayer();
            order = 0;
        }
        console.log('Prag2:',prag2);
    }
    if(activePlayer === 4 && order === 1){
        if(totalScore[3] >= 300 && totalScore[3] < 400){
            prag3 = 400-totalScore[3];
        }else if(totalScore[3] >= 600 && totalScore[3] < 700){
            prag3 = 700-totalScore[3];
        }
        if(currentScore >= prag3 || totalScore[3] >= 700){
            totalScore[3] += currentScore;
            totalScore4.textContent = totalScore[3];
            switchPlayer();
            order = 0;
        }else if(currentScore >= prag3 || totalScore[3] >= 400 && totalScore[3] < 600){
            totalScore[3] += currentScore;
            totalScore4.textContent = totalScore[3];
            switchPlayer();
            order = 0;
            prag3 = 700 - totalScore[3];
        }else if(currentScore >= 100 || totalScore[3] >= 100 && totalScore[3] < 300){
            totalScore[3] += currentScore;
            totalScore4.textContent = totalScore[3];
            switchPlayer();
            order = 0;
            prag3 = 400-totalScore[3];
        }else if(totalScore[3] < 100 && currentScore >= 100-totalScore[3]){
            totalScore[3] += currentScore;
            totalScore4.textContent = totalScore[3];
            switchPlayer();
            order = 0;
        }
        console.log('Prag3:',prag3);
    }


    // OVERCOME
    // Player 0
    if(totalScore[1] < 900 && totalScore[2] < 900 && totalScore[3] < 900){
        // 3Players
        if(justOne === 0 && tScore0 < tScore1 && tScore0 < tScore2 && tScore0 < tScore3 && totalScore[0] >= tScore1 && totalScore[0] >= tScore2 && totalScore[0] >= tScore3 && tScore1 >= 100 && tScore2 >= 100 && tScore3 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore1,tScore2,tScore3);
            totalScore[0] += 150;
            totalScore[1] -= 50;
            totalScore[2] -= 50;
            totalScore[3] -= 50;
            prag0 -= 150;
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[1],totalScore[2],totalScore[3]);
        }
        // 2Players
        if(justOne === 0 && tScore0 < tScore1 && tScore0 < tScore2 && totalScore[0] >= tScore1 && totalScore[0] >= tScore2 && tScore1 >= 100 && tScore2 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore1,tScore2);
            totalScore[0] += 100;
            totalScore[1] -= 50;
            totalScore[2] -= 50;
            prag0 -= 100;
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[1],totalScore[2]);
        }
        if(justOne === 0 && tScore0 < tScore1 && tScore0 < tScore3 && totalScore[0] >= tScore1 && totalScore[0] >= tScore3 && tScore1 >= 100 && tScore3 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore1,tScore3);
            totalScore[0] += 100;
            totalScore[1] -= 50;
            totalScore[3] -= 50;
            prag0 -= 100;
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[1],totalScore[3]);
        }
        if(justOne === 0 && tScore0 < tScore2 && tScore0 < tScore3 && totalScore[0] >= tScore2 && totalScore[0] >= tScore3 && tScore2 >= 100 && tScore3 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore2,tScore3);
            totalScore[0] += 100;
            totalScore[2] -= 50;
            totalScore[3] -= 50;
            prag0 -= 100;
            totalScore1.textContent = totalScore[0];
            totalScore3.textContent = totalScore[2];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[2],totalScore[3]);
        }
        // 1Player
        if(justOne === 0 && tScore0 < tScore1 && totalScore[0] >= tScore1 && tScore1 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore1);
            totalScore[0] += 50;
            totalScore[1] -= 50;
            prag0 -= 50;
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[1]);
        }
        if(justOne === 0 && tScore0 < tScore2 && totalScore[0] >= tScore2 && tScore2 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore2);
            totalScore[0] += 50;
            totalScore[2] -= 50;
            prag0 -= 50;
            totalScore1.textContent = totalScore[0];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[2]);
        }
        if(justOne === 0 && tScore0 < tScore3 && totalScore[0] >= tScore3 && tScore3 >= 100){
            console.log(totalScore[0],'mai mare ca',tScore3);
            totalScore[0] += 50;
            totalScore[3] -= 50;
            prag0 -= 50;
            totalScore1.textContent = totalScore[0];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[0],totalScore[3]);
        }
    }
    // Player 1
    if(totalScore[0] < 900 && totalScore[2] < 900 && totalScore[3] < 900){
        // 3Players
        if(justOne === 0 && tScore1 < tScore0 && tScore1 < tScore2 && tScore1 < tScore3 && totalScore[1] >= tScore0 && totalScore[1] >= tScore2 && totalScore[1] >= tScore3 && tScore0 >= 100 && tScore2 >= 100 && tScore3 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore0,tScore2,tScore3);
            totalScore[1] += 150;
            totalScore[0] -= 50;
            totalScore[2] -= 50;
            totalScore[3] -= 50;
            prag1 -= 150;
            totalScore2.textContent = totalScore[1];
            totalScore1.textContent = totalScore[0];
            totalScore3.textContent = totalScore[2];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[0],totalScore[2],totalScore[3]);
        }
        // 2Players
        if(justOne === 0 && tScore1 < tScore0 && tScore1 < tScore2 && totalScore[1] >= tScore0 && totalScore[1] >= tScore2 && tScore0 >= 100 && tScore2 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore0,tScore2);
            totalScore[1] += 100;
            totalScore[0] -= 50;
            totalScore[2] -= 50;
            prag1 -= 100;
            totalScore2.textContent = totalScore[1];
            totalScore1.textContent = totalScore[0];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[0],totalScore[2]);
        }
        if(justOne === 0 && tScore1 < tScore0 && tScore1 < tScore3 && totalScore[1] >= tScore0 && totalScore[1] >= tScore3 && tScore0 >= 100 && tScore3 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore0,tScore3);
            totalScore[1] += 100;
            totalScore[0] -= 50;
            totalScore[3] -= 50;
            prag1 -= 100;
            totalScore2.textContent = totalScore[1];
            totalScore1.textContent = totalScore[0];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[0],totalScore[3]);
        }
        if(justOne === 0 && tScore1 < tScore2 && tScore1 < tScore3 && totalScore[1] >= tScore2 && totalScore[1] >= tScore3 && tScore2 >= 100 && tScore3 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore2,tScore3);
            totalScore[1] += 100;
            totalScore[2] -= 50;
            totalScore[3] -= 50;
            prag1 -= 100;
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[2],totalScore[3]);
        }
        // 1Player
        if(justOne === 0 && tScore1 < tScore0 && totalScore[1] >= tScore0 && tScore0 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore0);
            totalScore[1] += 50;
            totalScore[0] -= 50;
            prag1 -= 50;
            totalScore2.textContent = totalScore[1];
            totalScore1.textContent = totalScore[0];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[0]);
        }
        if(justOne === 0 && tScore1 < tScore2 && totalScore[1] >= tScore2 && tScore2 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore2);
            totalScore[1] += 50;
            totalScore[2] -= 50;
            prag1 -= 50;
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[2]);
        }
        if(justOne === 0 && tScore1 < tScore3 && totalScore[1] >= tScore3 && tScore3 >= 100){
            console.log(totalScore[1],'mai mare ca',tScore3);
            totalScore[1] += 50;
            totalScore[3] -= 50;
            prag1 -= 50;
            totalScore2.textContent = totalScore[1];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[1],totalScore[3]);
        }
    }
    // Player 2
    if(totalScore[0] < 900 && totalScore[1] < 900 && totalScore[3] < 900){
        // 3Players
        if(justOne === 0 && tScore2 < tScore0 && tScore2 < tScore1 && tScore2 < tScore3 && totalScore[2] >= tScore0 && totalScore[2] >= tScore1 && totalScore[2] >= tScore3 && tScore0 >= 100 && tScore1 >= 100 && tScore3 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore0,tScore1,tScore3);
            totalScore[2] += 150;
            totalScore[0] -= 50;
            totalScore[1] -= 50;
            totalScore[3] -= 50;
            prag2 -= 150;
            totalScore3.textContent = totalScore[2];
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[0],totalScore[1],totalScore[3]);
        }
        // 2Players
        if(justOne === 0 && tScore2 < tScore0 && tScore2 < tScore1 && totalScore[2] >= tScore0 && totalScore[2] >= tScore1 && tScore0 >= 100 && tScore1 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore0,tScore1);
            totalScore[2] += 100;
            totalScore[0] -= 50;
            totalScore[1] -= 50;
            prag2 -= 100;
            totalScore3.textContent = totalScore[2];
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[0],totalScore[1]);
        }
        if(justOne === 0 && tScore2 < tScore0 && tScore2 < tScore3 && totalScore[2] >= tScore0 && totalScore[2] >= tScore3 && tScore0 >= 100 && tScore3 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore0,tScore3);
            totalScore[2] += 100;
            totalScore[0] -= 50;
            totalScore[3] -= 50;
            prag2 -= 100;
            totalScore3.textContent = totalScore[2];
            totalScore1.textContent = totalScore[0];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[0],totalScore[3]);
        }
        if(justOne === 0 && tScore2 < tScore1 && tScore2 < tScore3 && totalScore[2] >= tScore1 && totalScore[2] >= tScore3 && tScore1 >= 100 && tScore3 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore1,tScore3);
            totalScore[2] += 100;
            totalScore[1] -= 50;
            totalScore[3] -= 50;
            prag2 -= 100;
            totalScore3.textContent = totalScore[2];
            totalScore2.textContent = totalScore[1];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[1],totalScore[3]);
        }
        // 1Player
        if(justOne === 0 && tScore2 < tScore0 && totalScore[2] >= tScore0 && tScore0 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore0);
            totalScore[2] += 50;
            totalScore[0] -= 50;
            prag2 -= 50;
            totalScore3.textContent = totalScore[2];
            totalScore1.textContent = totalScore[0];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[0]);
        }
        if(justOne === 0 && tScore2 < tScore1 && totalScore[2] >= tScore1 && tScore1 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore1);
            totalScore[2] += 50;
            totalScore[1] -= 50;
            prag2 -= 50;
            totalScore3.textContent = totalScore[2];
            totalScore2.textContent = totalScore[1];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[1]);
        }
        if(justOne === 0 && tScore2 < tScore3 && totalScore[2] >= tScore3 && tScore3 >= 100){
            console.log(totalScore[2],'mai mare ca',tScore3);
            totalScore[2] += 50;
            totalScore[3] -= 50;
            prag2 -= 50;
            totalScore3.textContent = totalScore[2];
            totalScore4.textContent = totalScore[3];
            justOne = 1;
            console.log('Scoruri=',totalScore[2],totalScore[3]);
        }
    }

    // Player 3
    if(totalScore[0] < 900 && totalScore[1] < 900 && totalScore[2] < 900){
        // 3Players
        if(justOne === 0 && tScore3 < tScore0 && tScore3 < tScore1 && tScore3 < tScore2 && totalScore[3] >= tScore0 && totalScore[3] >= tScore1 && totalScore[3] >= tScore2 && tScore0 >= 100 && tScore1 >= 100 && tScore2 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore0,tScore1,tScore2);
            totalScore[3] += 150;
            totalScore[0] -= 50;
            totalScore[1] -= 50;
            totalScore[2] -= 50;
            prag3 -= 150;
            totalScore4.textContent = totalScore[3];
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[0],totalScore[1],totalScore[2]);
        }
        // 2Players
        if(justOne === 0 && tScore3 < tScore0 && tScore3 < tScore1 && totalScore[3] >= tScore0 && totalScore[3] >= tScore1 && tScore0 >= 100 && tScore1 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore0,tScore1);
            totalScore[3] += 100;
            totalScore[0] -= 50;
            totalScore[1] -= 50;
            prag3 -= 100;
            totalScore4.textContent = totalScore[3];
            totalScore1.textContent = totalScore[0];
            totalScore2.textContent = totalScore[1];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[0],totalScore[1]);
        }
        if(justOne === 0 && tScore3 < tScore0 && tScore3 < tScore2 && totalScore[3] >= tScore0 && totalScore[3] >= tScore2 && tScore0 >= 100 && tScore2 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore0,tScore2);
            totalScore[3] += 100;
            totalScore[0] -= 50;
            totalScore[2] -= 50;
            prag3 -= 100;
            totalScore4.textContent = totalScore[3];
            totalScore1.textContent = totalScore[0];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[0],totalScore[2]);
        }
        if(justOne === 0 && tScore3 < tScore1 && tScore3 < tScore2 && totalScore[3] >= tScore1 && totalScore[3] >= tScore2 && tScore1 >= 100 && tScore2 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore1,tScore2);
            totalScore[3] += 100;
            totalScore[1] -= 50;
            totalScore[2] -= 50;
            prag3 -= 100;
            totalScore4.textContent = totalScore[3];
            totalScore2.textContent = totalScore[1];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[1],totalScore[2]);
        }
        // 1Player
        if(justOne === 0 && tScore3 < tScore0 && totalScore[3] >= tScore0 && tScore0 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore0);
            totalScore[3] += 50;
            totalScore[0] -= 50;
            prag3 -= 50;
            totalScore4.textContent = totalScore[3];
            totalScore1.textContent = totalScore[0];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[0]);
        }
        if(justOne === 0 && tScore3 < tScore1 && totalScore[3] >= tScore1 && tScore1 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore1);
            totalScore[3] += 50;
            totalScore[1] -= 50;
            prag3 -= 50;
            totalScore4.textContent = totalScore[3];
            totalScore2.textContent = totalScore[1];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[1]);
        }
        if(justOne === 0 && tScore3 < tScore2 && totalScore[3] >= tScore2 && tScore2 >= 100){
            console.log(totalScore[3],'mai mare ca',tScore2);
            totalScore[3] += 50;
            totalScore[2] -= 50;
            prag3 -= 50;
            totalScore4.textContent = totalScore[3];
            totalScore3.textContent = totalScore[2];
            justOne = 1;
            console.log('Scoruri=',totalScore[3],totalScore[2]);
        }
    }
console.log('Total score:',totalScore);
})


// New Game button
for (let i = 0; i < btnNewGame.length; i++){
    btnNewGame[i].addEventListener('click', () => {
        console.log('Merge New GAME');
        document.querySelector('.container_playerWin').classList.add('hidden');
        document.querySelector('.container--small').classList.remove('hidden');
        document.querySelector('.center-container').classList.remove('hidden');
        player1.classList.add('player-active');
        player2.classList.remove('player-active');
        player3.classList.remove('player-active');
        player4.classList.remove('player-active');
        menu_newGame();
    })
}


// Menu button
for (let i = 0; i < btnNewGame.length; i++){
    btnMenu[i].addEventListener('click', () => {
        console.log('Merge MENU button');
        document.querySelector('.container_playerWin').classList.add('hidden');
        document.querySelector('.container--small').classList.add('hidden');
        document.querySelector('.center-container').classList.add('hidden');
        menuContanier.classList.remove('hidden');
        title.classList.remove('hidden');
        subTitle.classList.remove('hidden');
        logo.classList.remove('hidden');
        btnInstructions.classList.remove('hidden');
        btnPlay.classList.remove('hidden');
        player1.classList.add('player-active');
        player2.classList.remove('player-active');
        player3.classList.remove('player-active');
        player4.classList.remove('player-active');
        menu_newGame();
    })
}

// Media Queries
document.addEventListener('DOMContentLoaded', mediaQ);