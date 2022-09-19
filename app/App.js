import { ActivePokemansController } from "./Controllers/ActivePokemansController.js";
import { ApiPokemansController } from "./Controllers/apiPokemansController.js";


class App {
  activePokemansController = new ActivePokemansController()
  apiPokemansController = new ApiPokemansController()
}

window["app"] = new App();
