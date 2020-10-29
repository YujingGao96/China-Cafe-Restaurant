import generateRandomID from "../utils/RandomID";

export default class category {
    constructor(categoryName, pictureLink) {
        this.categoryID = generateRandomID(30);
        this.categoryName = categoryName;
        this.pictureLink = pictureLink;
        this.menuItems = [];
        this.description = '';
    }

    addMenuItem(menuItem) {
        this.menuItems.push(menuItem);
        return this;
    }

    setDescription(description){
        this.description = description;
        return this;
    }
}