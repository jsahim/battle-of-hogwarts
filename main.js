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

function setGameComponents(){
  humanInstance = new Player("Harry")
  computerInstance = new Player("Voldemort")
  currentGame = new Game (humanInstance, computerInstance)
}

// function showGameSelectionScreen(){
// }

// function showChooseFighterScreen(){
// }

// function showWinnerScreen(){
// }