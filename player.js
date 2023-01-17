class Player {
  constructor(playerName, playerIcon){
    this.name = playerName
    this.token = playerIcon
    this.wins = 0
  }
  takeTurn(event, userSpell) {
    var spellsArray = ["bombarda", "ebublio", "diffindo", "serpensortia", "expelliarmus"]
    var userChoice
    var compChoice
    if (currentGame.type === "classic"){
      userChoice = userSpell
      compChoice = spellsArray[Math.floor(Math.random() * 3)]
    } else if (currentGame.type === "difficult") {
      userChoice = userSpell
      compChoice = spellsArray[Math.floor(Math.random() * spellsArray.length)]
    }
    currentGame.findWinner(userChoice, compChoice)
  }
}