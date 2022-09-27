"use strict";
class Client {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
class OrderItem {
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }
}
class Order {
    constructor(client, items, paymentMethod) {
        this.client = client;
        this.items = items;
        this.paymentMethod = paymentMethod;
    }
}
