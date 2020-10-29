import React from "react";
import CategoryCard from "./CategoryCard";
import {connect} from 'react-redux';
import Masonry from "react-masonry-component";

class CategoriesList extends React.Component {
    renderCategories() {
        return (
            this.props.categoriesIDs.map(categoryID => {
                return (
                    <CategoryCard key={categoryID} categoryID={categoryID}/>
                );
            })
        );
    }

    render() {
        return (
            <Masonry
                className={'categoryList'}
                imagesLoadedOptions={{background: '.bg-img'}}
                enableResizableChildren={true}
            >
                {this.renderCategories()}
            </Masonry>
        );
    }
}

const mapStateToProps = ({menuCategories}) => {
    return {
        categoriesIDs: menuCategories.map(category => category.categoryID)
    };
}

export default connect(mapStateToProps)(CategoriesList);