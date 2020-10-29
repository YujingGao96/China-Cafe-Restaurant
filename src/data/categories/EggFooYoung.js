import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Egg Foo Young', 'images/categories/egg.jpg')
    .setDescription('Served w/ White Rice')
    .addMenuItem(new MenuItemBuilder('Vegetable Egg Foo Young', 7.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Pork Egg Foo Young', 8.75)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken Egg Foo Young', 8.75)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef Egg Foo Young', 8.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Shrimp Egg Foo Young', 8.95)
        .setServingOptions(1).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('House Special Egg Foo Young', 9.55)
        .setServingOptions(1).setAddOns(...addOnOptions).build())