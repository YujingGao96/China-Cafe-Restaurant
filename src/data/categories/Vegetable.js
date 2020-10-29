import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Vegetable', 'images/categories/vegetables.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Mixed Vegetable Delight', 7.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Broccoli w/ Garlic Sauce', 7.45).setSpicy(true)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Mixed Vegetable w/ Garlic Sauce', 7.45).setSpicy(true)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Szechuan Bean Curd', 7.45).setSpicy(true)
        .setServingOptions(1).setAddOns(...addOnOptions).build())