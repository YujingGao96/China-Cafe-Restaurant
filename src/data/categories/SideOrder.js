import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import PriceOption from "../PriceOption";

export default new Category('Side Order', 'images/categories/side.jpg')
    .addMenuItem(new MenuItemBuilder('White Rice', 0)
        .setPriceOptions(
            new PriceOption('Pint', 1.00),
            new PriceOption('Quart', 1.95)
        ).build())
    .addMenuItem(new MenuItemBuilder('Fried Rice', 0)
        .setPriceOptions(
            new PriceOption('Pint', 2.95),
            new PriceOption('Quart', 3.95)
        ).build())
    .addMenuItem(new MenuItemBuilder('Fortune Cookies (10 pcs)', 1.00).build())
    .addMenuItem(new MenuItemBuilder('Crispy Noodles', 0.50).build())
    .addMenuItem(new MenuItemBuilder('French Fries', 0)
        .setPriceOptions(
            new PriceOption('Small', 1.95),
            new PriceOption('Large', 2.95)
        ).build())
    .addMenuItem(new MenuItemBuilder('Steam Broccoli', 3.75).build())