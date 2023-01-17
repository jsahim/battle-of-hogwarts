class Player {
  constructor(playerName, playerIcon){
    this.name = playerName
    this.token = playerIcon
    this.wins = 0
    this.choice = null
  }
  takeTurn(spell) {
    this.choice = spell
  }
  reset(){
    this.choice = null
  }
}