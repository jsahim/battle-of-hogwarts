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
      gameWinner = undefined
    } else if (userSelect === "bombarda" && (compSelect === "diffindo" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner= this.human
      console.log("User wins with bombarda");
    } else if (userSelect === "ebublio" && (compSelect === "bombarda" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = this.human
      console.log("User wins with ebublio");
    } else if (userSelect === "diffindo" && (compSelect === "ebublio" || compSelect === "serpensortia")) {
      this.human.wins++
      gameWinner = this.human
      console.log("User wins with diffindo");
    } else if (userSelect === "serpensortia" && (compSelect === "ebublio" || compSelect === "expelliarmus")) {
      this.human.wins++
      gameWinner = this.human
      console.log("User wins with serpensortia");
    } else if (userSelect === "expelliarmus" && (compSelect === "diffindo" || compSelect === "bombarda")) {
      this.human.wins++
      gameWinner = this.human
      console.log("User wins with expelliarmus");
    } else if (compSelect === "bombarda" && (userSelect === "diffindo" || userSelect === "serpensortia")) {
      this.computer.wins++
      gameWinner = this.computer
      console.log("Computer wins with bombarda");
    } else if (compSelect === "ebublio" && (userSelect === "bombarda" || userSelect === "expelliarmus")) {
      this.computer.wins++
      this.currentWinner = this.computer
      console.log("Computer wins with ebublio");
    } else if (compSelect === "diffindo" && (userSelect === "ebublio" || userSelect === "serpensortia")) {
      this.computer.wins++
      gameWinner = this.computer
      console.log("Computer wins with diffindo");
    } else if (compSelect === "serpensortia" && (userSelect === "ebublio" || userSelect === "expelliarmus")) {
      this.computer.wins++
      gameWinner = this.computer
      console.log("Computer wins with serpensortia");
    } else if (compSelect === "expelliarmus" && (userSelect === "diffindo" || userSelect === "bombarda")) {
      this.computer.wins++
      gameWinner = this.computer
      console.log("Computer wins with expelliarmus");
    }
    this.roundsCompleted++
    this.currentWinner = gameWinner
    wandTransition()
    setTimeout(function(){
      updateDisplayResults(gameWinner, userSelect, compSelect)
    }, 2000);
  }
}

