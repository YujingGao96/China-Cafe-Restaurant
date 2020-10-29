import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import {addOnOptions} from "../AddOnOptions";

export default new Category('Fried Rice', 'images/categories/rice.jpg')
    .addMenuItem(new MenuItemBuilder('Vegetable Fried Rice', 6.45).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Pork Fried Rice', 6.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Chicken Fried Rice', 6.95).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Beef Fried Rice', 7.45).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('Shrimp Fried Rice', 7.75).setAddOns(...addOnOptions).build())
    .addMenuItem(new MenuItemBuilder('House Special Fried Rice', 7.95).setAddOns(...addOnOptions).build())