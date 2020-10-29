import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";

export default new Category('Appetizers', 'images/categories/appetizers.jpg')
    .addMenuItem(new MenuItemBuilder('Crab Cheese Wonton (6)', 4.45).build())
    .addMenuItem(new MenuItemBuilder('Chinese Donut', 4.45).build())
    .addMenuItem(new MenuItemBuilder('Egg Roll (1)', 1.30).build())
    .addMenuItem(new MenuItemBuilder('Spring Roll (2)', 2.85).build())
    .addMenuItem(new MenuItemBuilder('Chicken Nuggets (10)', 3.95).build())
    .addMenuItem(new MenuItemBuilder('Steamed Or Fried Dumpling (8)', 5.75)
        .setOptions(
            'Steamed Dumpling (8)',
            'Fried Dumpling (8)'
        ).build())
    .addMenuItem(new MenuItemBuilder('Fried Jumbo Shrimp (5)', 5.45).build())
    .addMenuItem(new MenuItemBuilder('Fried Chicken Wings (10)', 7.45).build())
    .addMenuItem(new MenuItemBuilder('Honey Chicken Wings (10)', 7.45).build())
    .addMenuItem(new MenuItemBuilder('Buffalo Chicken Wings (10)', 7.45)
        .setSpicy(true).build())
    .addMenuItem(new MenuItemBuilder('Lemon Pepper Chicken Wings (10)', 7.45).build())
    .addMenuItem(new MenuItemBuilder('Appetizer Sampler (for 2)', 9.95)
        .setDescription('Egg roll, chicken wings, fried shrimp, shrimp toast, fried dumpling, & crab rangoon.').build())