const playerScore_span = document.querySelector('#player-score');
const cpuScore_span = document.querySelector('#cpu-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

let playerScore = 0;
let cpuScore = 0;

const showResult = (userChoice, cpuChoice, winner) => {
    const selection = document.getElementById(userChoice);
    let glow = '';
    switch (winner) {
        case 'player':
            glow = 'green-glow';
            break;
        case 'cpu':
            glow = 'red-glow';
            break;
        default:
            glow = 'grey-glow';
            break;
    }

    const timeOut = 300;
    const winStr = {
        r: 'Rock crushes',
        p: 'Paper wraps',
        s: 'Scissors cuts'
    };
    const loseStr = {
        r: 'Rock',
        p: 'Paper',
        s: 'Scissors'
    }

    if(winner === 'player') {
        result_p.innerHTML = `${winStr[userChoice]}${'player'.fontsize(3).sub()} ${loseStr[cpuChoice]}${'cpu'.fontsize(3).sub()}, You Win!`;
    } else if(winner === 'cpu') {
        result_p.innerHTML = `${winStr[cpuChoice]}${'cpu'.fontsize(3).sub()} ${loseStr[userChoice]}${'player'.fontsize(3).sub()}, You Lose!`;
    } else {
        result_p.innerHTML = 'It\'s a Draw!';
    }

    selection.classList.add(glow);
    setTimeout(() => selection.classList.remove(glow), timeOut);
}
const winner = (winningPlayer) => {
    if(winningPlayer === 'player') {
        playerScore++;
        playerScore_span.innerHTML = playerScore.toString();
    } else if(winningPlayer === 'cpu') {
        cpuScore++;
        cpuScore_span.innerHTML = cpuScore.toString();
    } else {
        console.log('draw');
    }

}
const getCpuChoice = () => {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * choices.length)];
}
const game = (userChoice) => {
    const cpuChoice = getCpuChoice();
    let gameWinner = ''
    switch (userChoice + cpuChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            gameWinner = 'player'
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            gameWinner = 'cpu';
            break;
        default:
            gameWinner = 'none';
            break;
    }
    winner(gameWinner);
    showResult(userChoice, cpuChoice, gameWinner);
}
const main = () => {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();