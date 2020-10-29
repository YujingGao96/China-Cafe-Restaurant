import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Mei Fun', 'images/categories/meifun.jpg')
    .setDescription('Rice Noodles')
    .addMenuItem(new MenuItemBuilder('Vegetable Mei Fun', 6.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Pork Mei Fun', 7.75).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken Mei Fun', 7.75).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef Mei Fun', 7.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Shrimp Mei Fun', 7.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('House Special Mei Fun', 8.55).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Singapore Chow Mei Fun', 8.95).setAddOns(...addOnOptions)
        .setSpicy(true).build())