import React from "react";
import {connect} from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavCategories = ({itemNames, itemIDs}) => {

    const renderCategories = () => {
        return itemNames.map((itemName, index) => {
            return (
                <Dropdown.Item key={itemIDs[index]} href={`#card${itemIDs[index]}`}>
                    {itemName}
                </Dropdown.Item>
            );
        })
    };

    return (
        <DropdownButton
            id="dropdown-nav-categories"
            title={<FontAwesomeIcon icon={faList} size="lg" color="grey"/>}
            variant=''
            size='lg'
        >
            {renderCategories()}
        </DropdownButton>
    );
}

const mapStateToProps = ({menuCategories}) => {
    return {
        itemNames: menuCategories.map(category => category.categoryName),
        itemIDs: menuCategories.map(category => category.categoryID)
    }
};

export default connect(mapStateToProps)(NavCategories);