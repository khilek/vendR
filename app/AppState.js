
import { Snack } from "./models/Snack.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**@type {number} */
  money = 0

  snacks = [
    new Snack({
      name: '3 Musketeers',
      price: 1.00,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0004000042208?banner=harristeeter'
    }),
    new Snack({
      name: 'Snickers',
      price: 2.00,
      imgUrl: 'https://i.ebayimg.com/images/g/RHkAAOSwdEZgxkh0/s-l1200.webp'
    }),
    new Snack({
      name: 'Whatchamacallit',
      price: 3.00,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvSu-8qLxWvlz61A8LvZp26hMmcFy4I5NqcpQYnyohYttDRAqjUdyRwJLcIahid6Pio&usqp=CAU'
    }),
    // new Snack({
    //   name: '3 Musketeers',
    //   price: 1.00,
    //   imgUrl: 'https://www.kroger.com/product/images/large/front/0004000042208?banner=harristeeter'
    // })
  ]






}

export const AppState = createObservableProxy(new ObservableAppState())