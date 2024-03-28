import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";


export class SnacksController {
  constructor() {
    console.log("Vending Snacks")

    this.drawSnacksCard()
    this.buySnack()
    AppState.on('money', () => console.log('MONEY CHANGED!'))
    AppState.on('money', this.drawMoney)
  }

  addQuarter() {
    snacksService.addQuarter()
    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.money
    setText('money', `$${money.toFixed(2)}`)
  }

  drawSnacksCard() {
    const snackCard = AppState.snacks
    let snackContent = ''
    snackCard.forEach(snack => snackContent += snack.snackCard)
    setHTML('snack-card', snackContent)
  }

  buySnack() {
    console.log('Buying Snack')
    snacksService.buySnacks()
  }

}