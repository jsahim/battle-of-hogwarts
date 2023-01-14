class Player {
  constructor(playerName){
    this.name = playerName
    this.wins = 0
  }
  takeTurn(event) {
    var spellsArray = ["bombarda", "ebublio", "diffindo", "serpensortia", "expelliarmus"]
    var userChoice
    var compChoice
    if (currentGame.type === "classic"){
      userChoice = "bombarda"
      compChoice = spellsArray[Math.floor(Math.random() * 3)]
      console.log(userChoice, compChoice)
    } else if (currentGame.type === "difficult") {
      userChoice = "bombarda"
      compChoice = spellsArray[Math.floor(Math.random() * spellsArray.length)]
      console.log(userChoice, compChoice)
    }
    currentGame.findWinner(userChoice, compChoice)
  }
}