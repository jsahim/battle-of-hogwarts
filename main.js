// GLOBAL VARIABLES
var humanInstance 
var computerInstance
var currentGame

// QUERY SELECTORS
var subHeading = document.getElementById("subHeading")
var spellIcons = document.querySelectorAll(".spell-icons")
var classicBox = document.getElementById("classicGameBox")
var difficultBox = document.getElementById("difficultGameBox")
var changeGameButton = document.getElementById("gameButton")
var gameSelectionScreen = document.getElementById("chooseGameScreen")
var classicFighterScreen = document.getElementById("classicFighterScreen")
var difficultFighterScreen = document.getElementById("difficultFighterScreen")
var winResultsScreen = document.getElementById("winResultsScreen")
var humanScore = document.getElementById("humanScore")
var computerScore = document.getElementById("computerScore")

//EVENT LISTENERS
window.addEventListener("load", setGameComponents)
classicBox.addEventListener("click", showChooseFighterScreen)
difficultBox.addEventListener("click", showChooseFighterScreen)
difficultBox.addEventListener("click", showChooseFighterScreen)
spellIcons.forEach(
  event => event.addEventListener("click", selectSpell)
)

function setGameComponents(){
  humanInstance = new Player("Harry", "⚡️")
  computerInstance = new Player("Voldemort", "💀")
  currentGame = new Game (humanInstance, computerInstance)
}

function selectSpell(event){
  var chosenSpell = event.target.id
  humanInstance.takeTurn(event, chosenSpell)
}


function displayResults(winner, userSpell, compSpell){
  winResultsScreen.innerHTML = " "
  humanScore.innerText = humanInstance.wins
  computerScore.innerText = computerInstance.wins
  subHeading.innerText = `${winner.token} ${winner.name} ${winner.token} won this battle!`
  winResultsScreen.innerHTML =       
  `<img class="spell-icons" id="${userSpell}" src="images/${userSpell}.png" alt="${userSpell}">
  <img class="spell-icons" id="${compSpell}" src="images/${compSpell}.png" alt="${compSpell}">`
  showWinnerScreen()
}

function showGameSelectionScreen(){
  gameSelectionScreen.classList.remove('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
}

function showChooseFighterScreen(event){
  subHeading.innerText = "Choose your spell!"
  if(event.target.parentNode.id === "classicGameBox"){
    currentGame.type = "classic"
    gameSelectionScreen.classList.add('hidden')
    classicFighterScreen.classList.remove('hidden')
    difficultFighterScreen.classList.add('hidden')
    winResultsScreen.classList.add('hidden')
  } else {
    currentGame.type = "difficult"
    gameSelectionScreen.classList.add('hidden')
    classicFighterScreen.classList.add('hidden')
    difficultFighterScreen.classList.remove('hidden')
    winResultsScreen.classList.add('hidden')
  }
}

function showWinnerScreen(){
  gameSelectionScreen.classList.add('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.remove('hidden')
}