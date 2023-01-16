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
classicBox.addEventListener("click", assignGameType)
difficultBox.addEventListener("click", assignGameType)
changeGameButton.addEventListener("click", showGameSelectionScreen)
spellIcons.forEach(
  event => event.addEventListener("click", selectSpell)
)


//FUNCTIONS FOR SCREEN DISPLAY

function showGameSelectionScreen(){
  subHeading.innerText = "Choose Your Game!"
  gameSelectionScreen.classList.remove('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
  changeGameButton.classList.add('hidden')
}

function showChooseFighterScreen(){
  subHeading.innerText = "Choose Your Spell!"
  if(currentGame.type === "classic"){
    gameSelectionScreen.classList.add('hidden')
    classicFighterScreen.classList.remove('hidden')
    difficultFighterScreen.classList.add('hidden')
    winResultsScreen.classList.add('hidden')
    assessButtonUse()
  } else {
    gameSelectionScreen.classList.add('hidden')
    classicFighterScreen.classList.add('hidden')
    difficultFighterScreen.classList.remove('hidden')
    winResultsScreen.classList.add('hidden')
    assessButtonUse()
  }
}

function showWinnerScreen(){
  gameSelectionScreen.classList.add('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
}



//FUNCTIONS FOR GAME PLAY

function setGameComponents(){
  humanInstance = new Player("Harry", "⚡️")
  computerInstance = new Player("Voldemort", "💀")
  currentGame = new Game (humanInstance, computerInstance)
}

function assignGameType(event){
  currentGame.type = event.target.dataset.parent
  showChooseFighterScreen()
}

function selectSpell(event){
  var chosenSpell = event.target.id
  humanInstance.takeTurn(event, chosenSpell)
}


function assessButtonUse(){
  if(currentGame.roundsCompleted === 0){
    changeGameButton.classList.add('hidden')
  } else {
    changeGameButton.classList.remove('hidden')
  }
}

function updateDisplayResults(winnerInstance, userSpell, compSpell){
  winResultsScreen.innerHTML = " "
  humanScore.innerText = " " + humanInstance.wins
  computerScore.innerText = " " + computerInstance.wins
  winResultsScreen.innerHTML =       
  `<img class="spell-icons disabled" id="${userSpell}" src="images/${userSpell}.png" alt="${userSpell}">
  <img class="spell-icons disabled" id="${compSpell}" src="images/${compSpell}.png" alt="${compSpell}">`
  if(winnerInstance === undefined){
    subHeading.innerText = "✨Priori Incantatem✨ It's a draw!"
  } else {
    subHeading.innerText = `${winnerInstance.token} ${winnerInstance.name} ${winnerInstance.token} won this battle!`
  }
  showWinnerScreen()
  setTimeout(showChooseFighterScreen, 2000)
}

