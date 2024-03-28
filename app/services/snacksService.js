import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";

class SnacksService {

  addQuarter() {
    AppState.money += .25
    console.log('Adding .25', AppState.money)
  }

  buySnacks(snackName) {
    console.log('Purchasing', snackName)
    const snacksToPurchase = AppState.snacks.find(snack => snack.name == snackName)
    console.log('Purchasing', snacksToPurchase)
    if (AppState.money >= 1.00) {
      AppState.money -= 1.00
    }
  }
}




export const snacksService = new SnacksService()