import {menuCategories} from "../data/MenuCategories";

const searchKeyword = keyword => {
    keyword = keyword.trim();
    let result = [];
    const keywordSet = keyword.split(" ");
    //search for matching the first keyword, and add them to the array
    menuCategories.forEach(category => {
        result = [...result, ...category.menuItems.filter(menuItem => menuItem.name.toLowerCase().includes(keywordSet[0].toLowerCase()))];
    });

    //filtering by the rest of the keyword, and add them to the array
    if (keywordSet.length >= 2) {
        keywordSet.forEach(keywordItem => {
            result = [...result.filter(one => one.name.toLowerCase().includes(keywordItem.toLowerCase())), ...result];
        });
    }

    //search by the keyword itself
    menuCategories.forEach(category => {
        result = [...category.menuItems.filter(menuItem => menuItem.name.toLowerCase().includes(keyword.toLowerCase())), ...result];
    });

    return [...new Set(result)];
};


export default searchKeyword;