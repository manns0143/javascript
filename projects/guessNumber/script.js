let randomNum = parseInt(Math.random() * 100 + 1)
// console.log(randomNum)

const submit = document.querySelector('#submitBtn')
const userInput = document.querySelector('#guessField')

const res = document.querySelector('.result')
const guesses = document.querySelector('.guesses')
const remGuess = document.querySelector('.remainGuess')
const lowOrHi = document.querySelector('.lowOrHigh')

let prevGuess = []
let playGame = true
const p = document.createElement('p')

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        const input = parseInt(userInput.value)
        // console.log(input)
        validateGuess(input)
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('please enter a valid number between 1 to 100, both inclusive')
    } else {
        prevGuess.push(guess)
        if (prevGuess.length >= 10) {
            displayGuess(guess)
            displayMessage(`game over. random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`you guessed it right, random number was ${randomNum}`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`guess higher`)
    } else {
        displayMessage(`guess lower`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesses.innerHTML = prevGuess
    remGuess.innerHTML = 10 - prevGuess.length
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    playGame = false
    p.innerHTML = `<h3 id='newGame'>start new game</h3>`
    res.appendChild(p)
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (event) => {
        event.preventDefault()
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guesses.innerHTML = prevGuess
        remGuess.innerHTML = 10 - prevGuess.length
        userInput.removeAttribute('disabled')
        res.removeChild(p)
        displayMessage(' ')
        playGame = true
    })
}