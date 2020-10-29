import React from "react";
import generateRandomID from "../../utils/RandomID";

const ItemModalBodyAddOns = ({addOns}) => {
    const renderPriceOptions = () => {
        return addOns.map(addOn => {
            const checkBoxID = generateRandomID(20);
            return (
                <div key={generateRandomID(20)} className='my-auto mx-3 d-flex flex-nowrap'>
                    <input
                        className='mr-1 my-auto d-inline-block'
                        type='checkbox'
                        name='addOns'
                        value={['addOns', addOn.name, addOn.price]}
                        id={checkBoxID}
                    />
                    <label
                        className='mr-3 my-auto d-inline-block'
                        htmlFor={checkBoxID}
                    >
                        {`${addOn.name}  +$${addOn.price.toFixed(2)}`}
                    </label>
                </div>
            );
        });
    };

    return (
        <div>
            <h6 className='d-inline-block my-auto'><b>Customization: </b></h6>
            <div className='m-auto d-flex justify-content-start flex-wrap'>
                {renderPriceOptions()}
            </div>
            <hr className="my-2"/>
        </div>
    );
};

export default ItemModalBodyAddOns;