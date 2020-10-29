import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Lo Mein', 'images/categories/lomein.jpg')
    .setDescription('Soft Noodles')
    .addMenuItem(new MenuItemBuilder('Vegetable Lo Mein', 6.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Pork Lo Mein', 7.75).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken Lo Mein', 7.75).build())
    .addMenuItem(new MenuItemBuilder('Beef Lo Mein', 7.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Shrimp Lo Mein', 7.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('House Special Lo Mein', 8.55).setAddOns(...addOnOptions).build())