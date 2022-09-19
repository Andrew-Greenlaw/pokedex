import { appState } from "../AppState.js"
import { apiPokemansService } from "../Services/ApiPokemansService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawApiPokemans() {
  let template = ''
  appState.apiPokemans.forEach(p => template += p.ApiPokemanTemplate)
  setHTML('pokeman-list', template)
}
export class ApiPokemansController {
  constructor() {
    appState.on('apiPokemans', _drawApiPokemans)
    this.getApiPokemans()
  }
  async getApiPokemans() {
    try {
      await apiPokemansService.getApiPokemans()
    } catch (error) {
      console.error('[GETAPIPOKEMANS]', error)
      Pop.error(error)
    }
  }
  async getPokeDetails(url) {
    try {
      console.log(url)
      await apiPokemansService.getPokeDetails(url)
    } catch (error) {
      console.error('[GETPOKEDETAILS]')
      Pop.error(error)
    }

  }
}