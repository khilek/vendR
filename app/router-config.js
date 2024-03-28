
import { Router } from "./utils/Router.js";
import { SnacksController } from "./controllers/SnacksController.js";

export const router = new Router([
  {
    path: '',
    controllers: [SnacksController],
    view: 'app/views/SnacksView.html'
  },
  {
    path: '#/about',
    view: 'app/views/SnacksView.html'
  }
])