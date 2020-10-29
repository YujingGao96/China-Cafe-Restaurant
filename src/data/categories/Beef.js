import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Beef', 'images/categories/beef.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Pepper Steak w/ Onion', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef w/ Broccoli', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef w/ Mixed Vegetable', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Mongolian Beef', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef w/ Garlic Sauce', 9.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Hunan Beef', 9.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Szechuan Beef', 9.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Hot & Spicy Shredded Beef', 9.45)
        .setSpicy(true).setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef w/ Scallops', 9.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
