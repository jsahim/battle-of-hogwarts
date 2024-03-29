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
var wandDisplayScreen = document.getElementById("wandScreen")
var humanScore = document.getElementById("humanScore")
var computerScore = document.getElementById("computerScore")


//EVENT LISTENERS
window.addEventListener("load", setGameComponents)
classicBox.addEventListener("click", assignGameType)
difficultBox.addEventListener("click", assignGameType)
changeGameButton.addEventListener("click", showGameSelectionScreen)
spellIcons.forEach(event => event.addEventListener("click", selectSpell))


//FUNCTIONS FOR SCREEN DISPLAY
function showGameSelectionScreen(){
  subHeading.innerText = "Choose Your Game!"
  gameSelectionScreen.classList.remove('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
  changeGameButton.classList.add('hidden')
  wandDisplayScreen.classList.add('hidden')
}

function showChooseFighterScreen(){
  humanInstance.resetChoice()
  computerInstance.resetChoice()
  subHeading.innerText = "Choose Your Spell!"
  gameSelectionScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
  wandDisplayScreen.classList.add('hidden')
  if(currentGame.type === "classic"){
    classicFighterScreen.classList.remove('hidden')
    difficultFighterScreen.classList.add('hidden')
  } else {
    classicFighterScreen.classList.add('hidden')
    difficultFighterScreen.classList.remove('hidden')
  }
  assessButtonUse()
}

function showWandTransition(){
  document.body.style.cursor = "none"
  gameSelectionScreen.classList.add('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
  changeGameButton.classList.add('hidden')
  wandDisplayScreen.classList.remove('hidden')
}

function showWinnerScreen(){
  gameSelectionScreen.classList.add('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
  wandDisplayScreen.classList.add('hidden')
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

function assessButtonUse(){
  if(currentGame.roundsCompleted === 0){
    changeGameButton.classList.add('hidden')
  } else {
    changeGameButton.classList.remove('hidden')
  }
}

function selectSpell(event){
  var spellsArray
  var compChoice
  var humanChoice = event.target.id
  if (currentGame.type === "classic"){
    spellsArray = ["bombarda", "ebublio", "diffindo"]
  } else if (currentGame.type === "difficult") {
    spellsArray = ["bombarda", "ebublio", "diffindo", "serpensortia", "expelliarmus"]
  }
  compChoice = spellsArray[Math.floor(Math.random() * spellsArray.length)]
  humanInstance.takeTurn(humanChoice)
  computerInstance.takeTurn(compChoice)
  currentGame.findWinner(humanInstance.choice, computerInstance.choice)
}

function updateDisplayResults(winnerObj, userSpell, compSpell){
  document.body.style.cursor = "auto"
  winResultsScreen.innerHTML = " "
  humanScore.innerText = humanInstance.wins
  computerScore.innerText = computerInstance.wins
  winResultsScreen.innerHTML =       
  `<img class="spell-icons disabled" id="${userSpell}" src="images/${userSpell}.png" alt="${userSpell}-image">
  <img class="spell-icons disabled" id="${compSpell}" src="images/${compSpell}.png" alt="${compSpell}-image">`
  if(!winnerObj){
    subHeading.innerText = "✨Priori Incantatem✨ It's a draw!"
  } else {
    subHeading.innerText = `${winnerObj.winnerIcon} ${winnerObj.winnerName} ${winnerObj.winnerIcon} won this battle with ${winnerObj.winnerSpell}!`
  }
  showWinnerScreen()
  setTimeout(showChooseFighterScreen, 2500)
}
