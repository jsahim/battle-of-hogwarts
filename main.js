// GLOBAL VARIABLES
var humanInstance 
var computerInstance
var currentGame

// QUERY SELECTORS
var spellIcons = document.querySelectorAll(".spell-icons")
var classicBox = document.getElementById("classicGameBox")
var difficultBox = document.getElementById("difficultGameBox")
var changeGameButton = document.getElementById("gameButton")
var gameSelectionScreen = document.getElementById("chooseGameScreen")
var classicFighterScreen = document.getElementById("classicFighterScreen")
var difficultFighterScreen = document.getElementById("difficultFighterScreen")
var winResultsScreen = document.getElementById("winResultsScreen")

//EVENT LISTENERS
window.addEventListener("load", setGameComponents)
classicBox.addEventListener("click", showChooseFighterScreen)
difficultBox.addEventListener("click", showChooseFighterScreen)

function setGameComponents(){
  humanInstance = new Player("Harry")
  computerInstance = new Player("Voldemort")
  currentGame = new Game (humanInstance, computerInstance)
}

function showGameSelectionScreen(){
  gameSelectionScreen.classList.remove('hidden')
  classicFighterScreen.classList.add('hidden')
  difficultFighterScreen.classList.add('hidden')
  winResultsScreen.classList.add('hidden')
}

function showChooseFighterScreen(event){
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