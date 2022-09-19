export class ApiPokeman {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }
  get ApiPokemanTemplate() {
    return/*html*/`
    <div class="selectable no-select" onclick="app.apiPokemansController.getPokeDetails('${this.url}')">
      <h3>${this.name}</h3>
    </div>
    `
  }

}