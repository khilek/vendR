import { AppState } from "../AppState.js"
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get snackCard() {
    return `
 
  <div class="card bg-primary shadow col-3">
    <img class="img-fluid border rounded snack-card"
      src="${this.imgUrl}" alt="">
    <div class="card-body">
      <h3 class="text-center text-light">${this.name}</h3>
      <hr />
      <p class="text-light text-end">$${this.price}</p>
      <button onclick="app.SnacksController.buySnack('${this.name}')">BUY</button>
    </div>
  </div>

  `
  }

}
