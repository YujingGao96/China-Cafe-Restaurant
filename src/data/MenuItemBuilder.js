import generateRandomID from "../utils/RandomID";
import PriceOption from "./PriceOption";

export default class MenuItemBuilder {
    constructor(name, defaultPrice) {
        this.id = generateRandomID(30);
        this.name = name;
        this.isSpicy = false;
        this.priceOptions = [new PriceOption('Regular', defaultPrice)];
        this.addOns = [];
        this.options = [];
        this.servingOptions = 0; // 0: No options 1: Default White Rice 2: Default Fried Rice
        this.description = '';
    }

    setSpicy(isSpicy) {
        this.isSpicy = isSpicy;
        return this;
    }

    setPriceOptions(...priceOptions) {
        this.priceOptions = priceOptions; //this will override the default price option
        return this;
    }

    setAddOns(...addOns) {
        this.addOns = addOns;
        return this;
    }

    setOptions(...options) {
        this.options = options;
        return this;
    }

    setServingOptions(servingOptions) {
        this.servingOptions = servingOptions;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    build() {
        return new MenuItem(this.id, this.name, this.isSpicy, this.priceOptions, this.addOns, this.options, this.servingOptions, this.description);
    }
}

class MenuItem {
    constructor(id, name, isSpicy, priceOptions, addOns, options, servingOptions, description) {
        this.id = id
        this.name = name;
        this.isSpicy = isSpicy;
        this.priceOptions = priceOptions;
        this.addOns = addOns;
        this.options = options;
        this.servingOptions = servingOptions;
        this.description = description;
    }
}