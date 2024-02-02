const choices = ["Rock", "Paper", "Scissors"]
let computerSelection = ""
let playerSelection = ""
let computerScore = 0
let playerScore = 0

function getRandomComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3)
	computerSelection = choices[randomNumber]
}

const rockButton = document.querySelector('.rock-button')
const paperButton = document.querySelector('.paper-button')
const scissorsButton = document.querySelector('.scissors-button')
const randomButton = document.querySelector('.random-button')

const roundSummaryContainer = document.querySelector('.round-summary-container')
const scoreContainer = document.querySelector('.score-container')

rockButton.addEventListener("click", () => playOneRound("Rock"))
paperButton.addEventListener("click", () => playOneRound("Paper"))
scissorsButton.addEventListener("click", () => playOneRound("Scissors"))

function playOneRound(playerSelection) {
	getRandomComputerChoice()
	console.log(`Computer selection : ${computerSelection}`)
	console.log(`Player Selection : ${playerSelection}`)
	if (computerSelection === playerSelection) {
		roundSummaryContainer.textContent = `It's a tie`
	} else if
		(
		computerSelection === "Rock" && playerSelection === "Scissors" ||
		computerSelection === "Paper" && playerSelection === "Rock" ||
		computerSelection === "Scissors" && playerSelection === "Paper"
	) {
		roundSummaryContainer.textContent = `You've been beaten, ${computerSelection} crushes ${playerSelection}`
		computerScore++
	} else {
		roundSummaryContainer.textContent = `You smashed that computer into pieces, ${playerSelection} flattens ${computerSelection}`
		playerScore++
	}
	scoreContainer.textContent = `Player ${playerScore} - ${computerScore} Computer`
}