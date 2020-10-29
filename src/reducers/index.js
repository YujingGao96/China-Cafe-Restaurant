import {combineReducers} from "redux";
import {menuCategories} from "../data/MenuCategories";

const shoppingCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_ITEM_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'CLEAR_ALL_ITEMS_FROM_CART':
            return [];
        default:
            return state;
    }
};

const totalPriceReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return state + action.payload.price;
        case 'REMOVE_ITEM_FROM_CART':
            return state - action.payload.price;
        case 'CLEAR_ALL_ITEMS_FROM_CART':
            return 0;
        default:
            return state;
    }
};

const menuCategoriesReducer = () => {
    return menuCategories;
};

export default combineReducers({
    shoppingCart: shoppingCartReducer,
    totalPrice: totalPriceReducer,
    menuCategories : menuCategoriesReducer
});