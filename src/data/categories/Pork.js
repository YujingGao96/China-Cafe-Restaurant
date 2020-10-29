import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Pork', 'images/categories/pork.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Pork w/ Garlic Sauce', 8.45).setSpicy(true)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Hunan Pork', 8.45).setSpicy(true)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Pork w/ Mixed Vegetables', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())