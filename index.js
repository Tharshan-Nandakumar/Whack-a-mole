const squares = document.querySelectorAll('.square');
const mole = document.querySelector('mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
const start = document. getElementById('start')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId = null

//removing any existing moles
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

//adds a mole randomly to one of the 9 squares
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id
}

//if mole square clicked, score increases
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

//counting down timer from 60
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    } 
}

//mole changes position every 0.5s and timer count down to 0 from 60
function moveMole() {
    timerId = setInterval(randomSquare, 750);
    countDownTimerId = setInterval(countDown, 1000)
}

//game starts when start button clicked
start.addEventListener('click', moveMole)