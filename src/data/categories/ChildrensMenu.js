import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";

export default new Category('Children\'s Menu', 'images/categories/children.jpg')
    .setDescription('Served w/ French Fries')
    .addMenuItem(new MenuItemBuilder('Fried Shrimp', 4.95).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings', 5.45).build())
    .addMenuItem(new MenuItemBuilder('Chicken Finger', 4.95).build())
    .addMenuItem(new MenuItemBuilder('Chicken Nugget', 4.95).build())