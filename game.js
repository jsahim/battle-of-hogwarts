class Game {
  constructor(humanPlayerIns, computerPlayerIns){
    this.human = humanPlayerIns
    this.computer = computerPlayerIns
    this.type = null
    this.currentWinner = null
    this.roundsCompleted = 0
  }
  findWinner(userSelect, compSelect) {
    var gameWinner
    if (compSelect === userSelect) {
      gameWinner = null
    } else if (userSelect === "bombarda" && (compSelect === "diffindo" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner = { winnerName: this.human.name, winnerIcon: this.human.token, winnerSpell: this.human.choice }
    } else if (userSelect === "ebublio" && (compSelect === "bombarda" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = { winnerName: this.human.name, winnerIcon: this.human.token, winnerSpell: this.human.choice }
    } else if (userSelect === "diffindo" && (compSelect === "ebublio" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner = { winnerName: this.human.name, winnerIcon: this.human.token, winnerSpell: this.human.choice }
    } else if (userSelect === "serpensortia" && (compSelect === "ebublio" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = { winnerName: this.human.name, winnerIcon: this.human.token, winnerSpell: this.human.choice }
    } else if (userSelect === "expelliarmus" && (compSelect === "diffindo" || compSelect === "bombarda")) {
      this.human.wins++
      gameWinner = { winnerName: this.human.name, winnerIcon: this.human.token, winnerSpell: this.human.choice }
    } else {
      this.computer.wins++
      gameWinner = { winnerName: this.computer.name, winnerIcon: this.computer.token, winnerSpell: this.computer.choice }
    }
    this.roundsCompleted++
    this.currentWinner = gameWinner
    showWandTransition()
    setTimeout(function(){ updateDisplayResults(gameWinner, userSelect, compSelect) }, 2000);
  }
}

