type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string,
    public price: number,
    public size: Size = ''
  ) {}

  toString() {
    if (!this.isValidProperties()) return;

    return `Product: ${this.name} | ${this.price} | ${this.size}`;
  }

  private isValidProperties(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length === 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if (this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${key} is not a valid property`);
      }
    }

    return true;
  }
}

(() => {
  const bluePants = new Product('Blue large pants', 10, 'S');
  console.log(bluePants.toString());
})();
