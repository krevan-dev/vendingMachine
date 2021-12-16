export class Snack {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.img = data.img;
  }

  get Template() {
    return `
      <div class="col-4 text-center my-4">
        <img class="vendImg" src="${this.img}" alt="${this.name}" />
        <h5 class="mt-2">${this.name} - $${this.price} </h5>
      </div>
    `;
  }
}
