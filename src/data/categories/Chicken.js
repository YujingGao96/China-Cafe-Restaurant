import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Chicken', 'images/categories/chicken.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Moo Goo Gai Pan', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Broccoli', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Mixed Vegetable', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Honey Chicken', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Cashew Nuts', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Almonds', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Curry Sauce', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Garlic Sauce', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Hunan Chicken', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Szechuan Chicken', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Kung Pao Chicken', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Sweet & Sour Chicken', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('House Special Chicken', 8.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Mongolian Chicken', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Lemon Chicken', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Teriyaki Chicken', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken w/ Mushroom', 8.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
