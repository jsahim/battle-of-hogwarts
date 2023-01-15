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
changeGameButton.addEventListener("click", showGameSelectionScreen)
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


function displayResults(winnerInstance, userSpell, compSpell){
  winResultsScreen.innerHTML = " "
  humanScore.innerText = humanInstance.wins
  computerScore.innerText = computerInstance.wins
  winResultsScreen.innerHTML =       
  `<img class="spell-icons" id="${userSpell}" src="images/${userSpell}.png" alt="${userSpell}">
  <img class="spell-icons" id="${compSpell}" src="images/${compSpell}.png" alt="${compSpell}">`
  if(winnerInstance === undefined){
    subHeading.innerText = "✨Priori Incantatem✨ It's a draw!"
  } else {
    subHeading.innerText = `${winnerInstance.token} ${winnerInstance.name} ${winnerInstance.token} won this battle!`
  }
  showWinnerScreen()
  setTimeout(assessGameType, 2000)
}

function showGameSelectionScreen(){
  gameSelectionScreen.classList.remove('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
  changeGameButton.classList.add('hidden')
}

function assessGameType(){
  changeGameButton.classList.remove('hidden')
  showChooseFighterScreen()
}

function showChooseFighterScreen(event){
  subHeading.innerText = "Choose Your Spell!"
  if(currentGame.type === "classic" || (event.target.parentNode.id === "classicGameBox" && currentGame.roundsCompleted === 0)){
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
  changeGameButton.classList.add('hidden')
}