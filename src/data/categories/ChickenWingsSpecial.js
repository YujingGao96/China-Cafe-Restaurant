import Category from "../Category";
import MenuItemBuilder from "../MenuItemBuilder";

export default new Category('Chicken Wings Special', 'images/categories/wings.jpg')
    .setDescription('Flavors Available: Buffalo, Lemon Pepper and Honey')
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ French Fries', 7.45)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Plain Fried Rice', 7.45)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Pork Fried Rice', 7.95)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Chicken Fried Rice', 7.95)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Shrimp Fried Rice', 7.95)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Beef Fried Rice', 7.95)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ House Special Fried Rice', 8.55)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())
    .addMenuItem(new MenuItemBuilder('Chicken Wings (8) w/ Vegetable Fried Rice', 7.95)
        .setAddOns(
            {name: 'Add Buffalo Flavour', price: 0.5},
            {name: 'Add Lemon Pepper Flavour', price: 0.5},
            {name: 'Add Honey Flavour', price: 0.5},
            {name: 'Add Ranch Dressing', price: 0.5},
            {name: 'Make It All Drums', price: 0.5},
            {name: 'Make It All Flats', price: 0.5},
        ).build())