export const addItemToCart = item => {
    return {
        type : 'ADD_ITEM_TO_CART',
        payload: item
    };
};

export const removeItemFromCart = item => {
    return {
        type : 'REMOVE_ITEM_FROM_CART',
        payload: item
    };
};

export const clearAllItemsFromCart = () =>{
    return {
        type : "CLEAR_ALL_ITEMS_FROM_CART"
    }
};
