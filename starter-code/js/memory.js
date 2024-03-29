class MemoryGame {
  constructor(cards){
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
  }
  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }
    this.pairsClicked++
    return false
  }
  isFinished() {
    if(this.pairsGuessed == this.cards.length/2)return true
    return false
  }
}