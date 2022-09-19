import { appState } from "../AppState.js"
import { ActivePokeman } from "../Models/ActivePokeman.js"
import { ApiPokeman } from "../Models/ApiPokeman.js"
import { PokeApi } from "./AxiosService.js"

class ApiPokemansService {
  async getPokeDetails(url) {
    const res = await PokeApi.get(url)
    console.log(res.data)
    appState.activePokemans = new ActivePokeman(res.data)
    console.log(appState.activePokemans)
  }

  async getApiPokemans() {
    const res = await PokeApi.get('/pokemon')
    console.log(res.data);
    appState.apiPokemans = res.data.results.map(p => new ApiPokeman(p))
  }

}
export const apiPokemansService = new ApiPokemansService()