const choices = ["Rock", "Paper", "Scissors"]
let computerSelection = ""
let playerSelection = ""
let currentRoundNumber = 0
let computerScore = 0
let playerScore = 0

const rockButton = document.querySelector('.rock-button')
const paperButton = document.querySelector('.paper-button')
const scissorsButton = document.querySelector('.scissors-button')

const currentRoundContainer = document.querySelector('.current-round-container')
const currentRound = document.querySelector('.current-round')
currentRound.textContent = `Please make your pick`

const playerPickDisplay = document.querySelector('.player-pick-display')
playerPickDisplay.src = `./images/loading.png`

const computerPickDisplay = document.querySelector('.computer-pick-display')
computerPickDisplay.src = `./images/loading.png`

const roundSummaryContainer = document.querySelector('.round-summary-container')
roundSummaryContainer.textContent = `Waiting for battle to begin...`

const scoreContainer = document.querySelector('.score-container')
scoreContainer.textContent = `Player ${playerScore} - ${computerScore} Computer`

const winnerContainer = document.querySelector('.winner-container')

const playAgainButton = document.querySelector('.play-again-button')

winnerContainer.classList.add('is-hidden')
playAgainButton.classList.add('is-hidden')

rockButton.addEventListener("click", () => playOneRound("Rock"))
paperButton.addEventListener("click", () => playOneRound("Paper"))
scissorsButton.addEventListener("click", () => playOneRound("Scissors"))

function getRandomComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3)
	computerSelection = choices[randomNumber]
}

function resetGame() {
	computerSelection = ""
	playerSelection = ""
	currentRoundNumber = 0
	computerScore = 0
	playerScore = 0
	rockButton.disabled = false
	paperButton.disabled = false
	scissorsButton.disabled = false
	winnerContainer.classList.add('is-hidden')
	playAgainButton.classList.add('is-hidden')
	currentRoundContainer.style.border = `1px solid var(--gold)`
	currentRoundContainer.style.color = `var(--gold)`
	currentRound.textContent = `Please make your pick`
	playerPickDisplay.src = `./images/loading.png`
	computerPickDisplay.src = `./images/loading.png`
	roundSummaryContainer.textContent = `Waiting for battle to begin...`
	scoreContainer.textContent = `Player ${playerScore} - ${computerScore} Computer`
}

function playOneRound(playerSelection) {
	getRandomComputerChoice()
	if (computerSelection === playerSelection) {
		currentRoundNumber++
		playerPickDisplay.src = `./images/${playerSelection.toLowerCase()}-white.png`
		computerPickDisplay.src = `./images/${computerSelection.toLowerCase()}-white.png`
		roundSummaryContainer.textContent = `It's a tie`
		currentRoundContainer.style.border = `1px solid white`
		currentRoundContainer.style.color = `white`
	} else if
		(
		computerSelection === "Rock" && playerSelection === "Scissors" ||
		computerSelection === "Paper" && playerSelection === "Rock" ||
		computerSelection === "Scissors" && playerSelection === "Paper"
	) {
		currentRoundNumber++
		playerPickDisplay.src = `./images/${playerSelection.toLowerCase()}-red.png`
		computerPickDisplay.src = `./images/${computerSelection.toLowerCase()}-red.png`
		roundSummaryContainer.textContent = `You've been beaten, ${computerSelection} crushes ${playerSelection}`
		currentRoundContainer.style.border = `1px solid red`
		currentRoundContainer.style.color = `red`
		computerScore++
	} else {
		currentRoundNumber++
		playerPickDisplay.src = `./images/${playerSelection.toLowerCase()}-green.png`
		computerPickDisplay.src = `./images/${computerSelection.toLowerCase()}-green.png`
		roundSummaryContainer.textContent = `You smashed that computer into pieces, ${playerSelection} flattens ${computerSelection}`
		currentRoundContainer.style.border = `1px solid green`
		currentRoundContainer.style.color = `green`
		playerScore++
	}
	currentRound.textContent = `Round ${currentRoundNumber}`
	scoreContainer.textContent = `Player ${playerScore} - ${computerScore} Computer`
	if (playerScore === 5 || computerScore === 5) {
		winnerContainer.classList.remove('is-hidden')
		playAgainButton.classList.remove('is-hidden')
		rockButton.disabled = true
		paperButton.disabled = true
		scissorsButton.disabled = true
	}
	if (playerScore === 5) {
		winnerContainer.textContent = 'Player won'
		winnerContainer.style.color = `green`
		playAgainButton.style.border = `1px solid green`
		playAgainButton.style.color = `green`
	} else if (computerScore === 5) {
		winnerContainer.textContent = 'Computer won'
		winnerContainer.style.color = `red`
		playAgainButton.style.border = `1px solid red`
		playAgainButton.style.color = `red`
	}
}

playAgainButton.addEventListener('click', resetGame)
