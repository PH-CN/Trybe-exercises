class Client {
  constructor(private _name: string) { }

  get name() {
    return this._name
  }

  set name(newName: string) {
    this._name = newName;
  }
}

class OrderItem {
  item: string;
  price: number;

  constructor(item: string, price: number) {
    this.item = item;
    this.price = price;
  }
}

class Order {
  client: Client;
  items: OrderItem[]
  paymentMethod: string;
  discount?: number;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this.client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
  }
}