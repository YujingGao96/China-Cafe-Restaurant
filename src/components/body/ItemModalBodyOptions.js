import React from "react";
import generateRandomID from "../../utils/RandomID";

const ItemModalBodyOptions = ({options, optionsLabel, optionType}) => {
    const renderPriceOptions = () => {
        return options.map((option, index) => {
            const radioID = generateRandomID(20);
            let formattedOption = [];
            switch (optionType) {
                case 'price':
                    formattedOption = ['price', option.portionSize, option.price];
                    break;
                case 'servingWith':
                    formattedOption = ['servingWith', option.name, option.price];
                    break;
                case 'option':
                    formattedOption = ['option', option, 0];
                    break;
                default:
                    break;
            }
            return (
                <div key={generateRandomID(20)} className='my-auto mx-3 d-flex flex-nowrap'>
                    <input
                        className='mr-1 my-auto d-inline-block'
                        type='radio'
                        name={optionType}
                        id={radioID}
                        defaultChecked={index === 0}
                        value={formattedOption}
                    />
                    <label
                        className='mr-3 my-auto d-inline-block'
                        htmlFor={radioID}
                    >
                        {formattedOption[1]}
                        {formattedOption[2] === 0 ? '' : ` ($${formattedOption[2].toFixed(2)})`}
                    </label>
                </div>
            );
        });
    };

    return (
        <div>
            <h6 className='d-inline-block my-auto'><b>{optionsLabel}: </b></h6>
            <div className='m-auto d-flex justify-content-start flex-wrap'>
                {renderPriceOptions()}
            </div>
            <hr className="my-2"/>
        </div>
    );
};

export default ItemModalBodyOptions;