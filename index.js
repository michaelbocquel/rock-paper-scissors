const choices = ["Rock", "Paper", "Scissors"]
let computerChoice = ""
let playerChoice = ""

function getRandomComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3)
	computerChoice = choices[randomNumber]
}

getRandomComputerChoice()
console.log(`Computer choice : ${computerChoice}`)

const rockButton = document.querySelector('.rock-button')
const paperButton = document.querySelector('.paper-button')
const scissorsButton = document.querySelector('.scissors-button')
const randomButton = document.querySelector('.random-button')

function getPlayerChoice(choice) {
	playerChoice = choice
	console.log(`Player Choice : ${playerChoice}`)
}

rockButton.addEventListener("click", () => getPlayerChoice("Rock"))
paperButton.addEventListener("click", () => getPlayerChoice("Paper"))
scissorsButton.addEventListener("click", () => getPlayerChoice("Scissors"))