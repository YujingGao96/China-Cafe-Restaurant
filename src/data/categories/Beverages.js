import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";
import PriceOption from "../PriceOption";

export default new Category('Beverages', 'images/categories/drink.jpg')
    .addMenuItem(new MenuItemBuilder('Coke, Sprite', 0)
        .setPriceOptions(
            new PriceOption('Canned', 0.95),
            new PriceOption('Bottle', 1.95),
            new PriceOption('2 Liter',3.35)
        )
        .setOptions('Coke', 'Sprite').build())
    .addMenuItem(new MenuItemBuilder('Diet Coke, Lemonade, Dr. Pepper', 1.95)
        .setOptions('Diet Coke', 'Lemonade', 'Dr. Pepper').build())
    .addMenuItem(new MenuItemBuilder('Iced Tea', 0)
        .setPriceOptions(
            new PriceOption('Small', 0.95),
            new PriceOption('Large', 1.95)
        ).build())
    .addMenuItem(new MenuItemBuilder('Bottle Water', 0.95).build())