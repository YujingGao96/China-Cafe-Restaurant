import React from "react";

const SingleItemPriceOptions = ({priceOptions}) => {
    const renderPriceOptions = () => {
        return priceOptions.map(({portionSize, price}) => {
            return (
                <div key={portionSize} className="badge badge-warning badge-pill m-1 d-block">
                    {portionSize === 'Regular' ? '$ ' : `(${portionSize}) $ `} {price.toFixed(2)}
                </div>
            );
        })
    };

    return (
        <React.Fragment>
            {renderPriceOptions()}
        </React.Fragment>
    );
}

export default SingleItemPriceOptions;