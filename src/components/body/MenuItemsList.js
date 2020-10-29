import React from "react";
import SingleItem from "./SingleItem";
import {connect} from 'react-redux';

const CategoryList = ({menuItems}) => {
    return (
        menuItems.map(menuItem => {
            return <SingleItem key={menuItem.id} menuItem={menuItem}/>
        })
    );
};

const mapStateToProps = ({menuCategories}, ownProps) => {
    const category = menuCategories.find(category => category.categoryID === ownProps.categoryID);
    return {
        menuItems : category.menuItems
    }
};

export default connect(mapStateToProps)(CategoryList);