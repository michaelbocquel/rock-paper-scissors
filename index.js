const choices = ["Rock", "Paper", "Scissors"]
let computerSelection = ""
let playerSelection = ""
let currentRoundNumber = 0
let computerScore = 0
let playerScore = 0

const rockButton = document.querySelector('.rock-button')
const paperButton = document.querySelector('.paper-button')
const scissorsButton = document.querySelector('.scissors-button')

const currentRound = document.querySelector('.current-round')
currentRound.textContent = `Please make your pick`
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
	currentRound.textContent = `Please make your pick`
	roundSummaryContainer.textContent = `Waiting for battle to begin...`
	roundSummaryContainer.style.border = `1px solid var(--gold)`
	roundSummaryContainer.style.color = `var(--gold)`
	scoreContainer.textContent = `Player ${playerScore} - ${computerScore} Computer`
	scoreContainer.style.border = `1px solid var(--gold)`
	scoreContainer.style.color = `var(--gold)`
}

function playOneRound(playerSelection) {
	getRandomComputerChoice()
	if (computerSelection === playerSelection) {
		currentRoundNumber++
		roundSummaryContainer.textContent = `It's a tie`
		roundSummaryContainer.style.border = `1px solid white`
		roundSummaryContainer.style.color = `white`
		scoreContainer.style.border = `1px solid white`
		scoreContainer.style.color = `white`
	} else if
		(
		computerSelection === "Rock" && playerSelection === "Scissors" ||
		computerSelection === "Paper" && playerSelection === "Rock" ||
		computerSelection === "Scissors" && playerSelection === "Paper"
	) {
		currentRoundNumber++
		roundSummaryContainer.textContent = `You've been beaten, ${computerSelection} crushes ${playerSelection}`
		roundSummaryContainer.style.border = `1px solid red`
		roundSummaryContainer.style.color = `red`
		scoreContainer.style.border = `1px solid red`
		scoreContainer.style.color = `red`
		computerScore++
	} else {
		currentRoundNumber++
		roundSummaryContainer.textContent = `You smashed that computer into pieces, ${playerSelection} flattens ${computerSelection}`
		roundSummaryContainer.style.border = `1px solid green`
		roundSummaryContainer.style.color = `green`
		scoreContainer.style.border = `1px solid green`
		scoreContainer.style.color = `green`
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
