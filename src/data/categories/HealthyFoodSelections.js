import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Healthy Food Selections', 'images/categories/healthy.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Steamed Mixed Vegetable', 6.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Steamed Chicken w/ Broccoli', 7.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Steamed Chicken w/ Mixed Vegetable', 7.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Steamed Shrimp w/ Broccoli', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Steamed Shrimp w/ Mixed Vegetable', 9.45)
        .setServingOptions(1).setAddOns(...addOnOptions).build())