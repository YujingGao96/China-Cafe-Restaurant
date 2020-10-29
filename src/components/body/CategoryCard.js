import React, {useState} from "react";
import {connect} from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import "./CategoryCard.css"
import MenuItemsList from "./MenuItemsList";
import ChevronCompactUp from "../icons/ChevronCompactUp";
import ChevronCompactDown from "../icons/ChevronCompactDown";

const CategoryCard = ({categoryID, categoryPictureLink, categoryName, categoryDescription}) => {
    const [showList, setShowList] = useState(false);
    return (
        <div className="col-xl-4 col-md-6 col-sm-12 mt-4" id={'card' + categoryID}>
            <div className="card rounded-all shadow">
                <Accordion>
                    <Accordion.Toggle as='div' eventKey='0' onClick={()=>setShowList(!showList)}>
                        <img src={categoryPictureLink} className="card-img-top rounded-top bg-img" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title">{categoryName}</h3>
                            <p className="card-subtitle text-muted">{categoryDescription}</p>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                        <ul className="list-group list-group-flush">
                            <MenuItemsList categoryID={categoryID}/>
                        </ul>
                    </Accordion.Collapse>
                    <Accordion.Toggle as='div' eventKey='0' onClick={()=>setShowList(!showList)}>
                        <div className="p-1 text-center text-muted">
                            {!showList ? <ChevronCompactDown/> : <ChevronCompactUp/>}
                        </div>
                    </Accordion.Toggle>
                </Accordion>
            </div>
        </div>
    );
};

const mapStateToProps = ({menuCategories}, ownProps) => {
    const category = menuCategories.find(category => category.categoryID === ownProps.categoryID)
    return {
        categoryID: category.categoryID,
        categoryPictureLink: category.pictureLink,
        categoryName: category.categoryName,
        categoryDescription: category.description
    };
};
export default connect(mapStateToProps)(CategoryCard);