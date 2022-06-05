import { Router } from "./router.js";
import { Background } from "./background.js";

const router = new Router();
const background = new Background()

router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/explorer', "/pages/explorer.html")

router.handle()

background.addBackground()

window.onpopstate = () => router.handle()
window.route = () => router.route()

