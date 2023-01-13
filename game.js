class Game {
  constructor(humanPlayerIns, computerPlayerIns, gameType){
    this.human = humanPlayerIns
    this.computer = computerPlayerIns
    this.type = gameType
  }
  findWinner(userSelect, compSelect) {
    if (compSelect === userSelect) {
      return "It's a DRAW!"
    } else if (userSelect === "Bombarda" && (compSelect === "Diffindo" || compSelect === "Serpensortia")) {
      this.human.wins++
      return "User wins with Bombarda"
    } else if (userSelect === "Ebublio" && (compSelect === "Bombarda" || compSelect === "Expelliarmus")) {
      this.human.wins++
      return "User wins with Ebublio"
    } else if (userSelect === "Diffindo" && (compSelect === "Ebublio" || compSelect === "Serpensortia")) {
      this.human.wins++
      return "User wins with Diffindo"
    } else if (userSelect === "Serpensortia" && (compSelect === "Ebublio" || compSelect === "Expelliarmus")) {
      this.human.wins++
      return "User wins with Serpensortia"
    } else if (userSelect === "Expelliarmus" && (compSelect === "Diffindo" || compSelect === "Bombarda")) {
      this.human.wins++
      return "User wins with Expelliarmus"
    } else if (compSelect === "Bombarda" && (userSelect === "Diffindo" || userSelect === "Serpensortia")) {
      this.computer.wins++
      return "Computer wins with Bombarda"
    } else if (compSelect === "Ebublio" && (userSelect === "Bombarda" || userSelect === "Expelliarmus")) {
      this.computer.wins++
      return "Computer wins with Ebublio"
    } else if (compSelect === "Diffindo" && (userSelect === "Ebublio" || userSelect === "Serpensortia")) {
      this.computer.wins++
      return "Computer wins with Diffindo"
    } else if (compSelect === "Serpensortia" && (userSelect === "Ebublio" || userSelect === "Expelliarmus")) {
      this.computer.wins++
      return "Computer wins with Serpensortia"
    } else if (compSelect === "Expelliarmus" && (userSelect === "Diffindo" || userSelect === "Bombarda")) {
      this.computer.wins++
      return "Computer wins with Expelliarmus"
    }
  }
}

