export class ActivePokeman {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.other['official-artwork'].front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }
  get CardTemplate() {
    return/*html*/`
    <div class="card">
      <div class="card-header">
        <h3>${this.name}</h3>
      </div>
      <div class="card-body">
        <img src="${this.img}" alt="${this.name}">
      </div>
      <div class="card-footer">
        <div>
          <p><b>${this.weight}</b></p>
          <p><b>${this.height}</b></p>
        </div>
        <div>${this.types}</div>
      </div>
    </div>
    `
  }
} 