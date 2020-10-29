import React from "react";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import ItemModalBodyOptions from "./ItemModalBodyOptions";
import ItemModalBodyAddOns from "./ItemModalBodyAddOns";
import {servingOptions, servingOptionsAlt} from "../../data/ServingOptions";

const ItemModalBody = React.forwardRef(({menuItem}, ref) => {
    //const [quantity, setQuantity] = useState(1);
    return (
        <React.Fragment>
            {/* Show item descriptions*/}
            <div className='my-2'>
                {menuItem.description === ''
                    ? null
                    : <span><b>Description: </b>{menuItem.description}</span>
                }
            </div>
            {/* Show if item is spicy*/}
            <div className='my-2'>
                {menuItem.isSpicy
                    ? <span className='text-danger'><b>Caution:</b> This item is spicy.</span>
                    : null
                }
            </div>
            <form ref={ref}>
                {/* Show regular price or price options*/}
                <div className='d-flex justify-content-left my-2'>
                    {menuItem.priceOptions.length === 1
                        ? <div className='d-inline-block my-auto ml-0'>
                            <b>Price: </b>$ {menuItem.priceOptions[0].price.toFixed(2)}</div>
                        : <ItemModalBodyOptions options={menuItem.priceOptions} optionsLabel='Make it'
                                                optionType="price"/>
                    }
                </div>
                {/* Show item options*/}
                <div className='d-flex justify-content-left flex-wrap my-2'>
                    {menuItem.options.length === 0
                        ? null
                        : <ItemModalBodyOptions options={menuItem.options} optionsLabel='Pick' optionType="option"/>
                    }
                </div>
                {/* Show item serving options*/}
                <div className='d-flex justify-content-left flex-wrap my-2'>
                    {menuItem.servingOptions === 0
                        ? null
                        : (
                            menuItem.servingOptions === 1
                                ? <ItemModalBodyOptions options={servingOptions} optionsLabel='Serving with'
                                                        optionType="servingWith"/>
                                : <ItemModalBodyOptions options={servingOptionsAlt} optionsLabel='Serving with'
                                                        optionType="servingWith"/>
                        )
                    }
                </div>
                {/* Show add-ons*/}
                <div className='d-flex justify-content-left flex-wrap my-2'>
                    {menuItem.addOns.length === 0
                        ? null
                        : <ItemModalBodyAddOns addOns={menuItem.addOns}/>
                    }
                </div>
                <div className='d-flex justify-content-left flex-wrap my-2'>
                    <span className="font-weight-bold d-inline-block my-auto">Other Preferences:</span>
                    <input type="text" className="m-3"/>
                </div>
                {/*<div className='d-flex justify-content-left flex-wrap my-2'>*/}
                {/*    <span className="font-weight-bold d-inline-block my-auto">Quantity:</span>*/}
                {/*    <div className="m-3 btn-group">*/}
                {/*        <button className="btn btn-link btn-sm rounded-all shadow" onClick={e => {*/}
                {/*            e.preventDefault();*/}
                {/*            const postSetQuantity = quantity - 1;*/}
                {/*            if (postSetQuantity > 0 && postSetQuantity < 10) {*/}
                {/*                setQuantity(postSetQuantity);*/}
                {/*            }*/}
                {/*        }}>*/}
                {/*            <FontAwesomeIcon icon={faMinus}/>*/}
                {/*        </button>*/}
                {/*        <input type="number" className="btn btn-sm btn-light font-weight-bold" min="1" max="9" readOnly value={quantity}/>*/}
                {/*        <button className="btn btn-link btn-sm rounded-all shadow" onClick={e => {*/}
                {/*            e.preventDefault();*/}
                {/*            const postSetQuantity = quantity + 1;*/}
                {/*            if (postSetQuantity > 0 && postSetQuantity < 10) {*/}
                {/*                setQuantity(postSetQuantity);*/}
                {/*            }*/}
                {/*        }}>*/}
                {/*            <FontAwesomeIcon icon={faPlus}/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </form>
        </React.Fragment>
    );
});

export default ItemModalBody;