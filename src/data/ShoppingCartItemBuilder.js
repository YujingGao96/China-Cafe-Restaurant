import generateRandomID from "../utils/RandomID";

export default class ShoppingCartItemBuilder {
    constructor(name) {
        this.id = generateRandomID(30);
        this.name = name;
        this.price = 0;
        this.specialInstructions = [];
    }

    addPriceToItem(price) {
        this.price += price;
        return this;
    }

    addSpecialInstruction(specialInstruction) {
        this.specialInstructions.push(specialInstruction);
        return this;
    }

    build() {
        return new ShoppingCartItem(this.id, this.name, this.price, this.specialInstructions);
    }
}

class ShoppingCartItem {
    constructor(id, name, price, specialInstructions) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.specialInstructions = specialInstructions;
    }
}