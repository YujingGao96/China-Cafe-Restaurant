import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import PriceOption from "../PriceOption";

export default new Category('Soups', 'images/categories/soups.jpg')
    .setDescription('Served w/ Crispy Noodles')
    .addMenuItem(new MenuItemBuilder('Wonton Soup', 0)
        .setPriceOptions(
            new PriceOption('Small', 1.95),
            new PriceOption('Large', 3.25)
        ).build())
    .addMenuItem(new MenuItemBuilder('Egg Drop Soup', 0)
        .setPriceOptions(
            new PriceOption('Small', 1.95),
            new PriceOption('Large', 3.25)
        ).build())
    .addMenuItem(new MenuItemBuilder('Hot & Sour Soup', 0)
        .setSpicy(true)
        .setPriceOptions(
            new PriceOption('Small', 2.15),
            new PriceOption('Large', 3.45)
        ).build())
    .addMenuItem(new MenuItemBuilder('Vegetable w/ Bean Curd Soup', 4.25).build())
    .addMenuItem(new MenuItemBuilder('House Special Soup', 4.55).build())
    .addMenuItem(new MenuItemBuilder('Wonton Egg Drop Soup', 4.95).build())
    .addMenuItem(new MenuItemBuilder('Chicken Rice Soup', 4.55).build())
    .addMenuItem(new MenuItemBuilder('Chicken Noodles Soup', 4.95).build())