import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawActivePokemans() {
  // @ts-ignore
  setHTML('active-pokeman', appState.activePokemans.CardTemplate)
}
export class ActivePokemansController {
  constructor() {
    appState.on('activePokemans', _drawActivePokemans)
  }
}