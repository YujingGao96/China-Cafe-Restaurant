import React, {useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPepperHot, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import SingleItemPriceOptions from "./SingleItemPriceOptions";
import ItemModalBody from "./ItemModalBody";
import ShoppingCartItemBuilder from "../../data/ShoppingCartItemBuilder";
import {addItemToCart} from "../../actions";

const SingleItem = ({menuItem, addItemToCart}) => {
    const [showModal, setShowModal] = useState(false);
    const ref = React.createRef();

    const dispatchItem = () => {
        const elements = Array.from(ref.current.elements);
        const checkedElements = elements.filter(element => element.checked);
        const defaultPrice = menuItem.priceOptions.length === 1 ? menuItem.priceOptions[0].price : 0;
        const buildingItem = new ShoppingCartItemBuilder(menuItem.name).addPriceToItem(defaultPrice);
        checkedElements.forEach(element => {
                const [type, name, price] = element.value.split(",");
                switch (type) {
                    case 'servingWith':
                        buildingItem.addSpecialInstruction(`Serving with ${name} ${price === 0 ? '' : ' ($' + parseFloat(price).toFixed(2)})`);
                        break;
                    case 'option':
                        buildingItem.name = name;
                        break;
                    case 'addOns':
                        buildingItem.addSpecialInstruction(`${name} ${price === 0 ? '' : ' ($' + parseFloat(price).toFixed(2)})`);
                        break;
                    case 'price':
                        buildingItem.addSpecialInstruction('Serving Size : ' + name);
                        break;
                    default:
                        buildingItem.addSpecialInstruction(name);
                        break;
                }
                buildingItem.addPriceToItem(parseFloat(price));
            }
        )
        const specialPreferences = elements.filter(element=> element.type==='text')[0].value;
        if (specialPreferences !== ''){
            buildingItem.addSpecialInstruction(specialPreferences);
        }
        const builtItem = buildingItem.build();
        addItemToCart(builtItem);
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <li
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                onClick={() => setShowModal(!showModal)}
            >
                <div className="text-left">
                    <p className={`my-auto ${menuItem.isSpicy ? 'text-danger' : ''}`}>
                        {menuItem.name}&nbsp;
                        {menuItem.isSpicy ? <FontAwesomeIcon icon={faPepperHot} size="sm"/> : null}
                    </p>
                    {menuItem.description ? <h6 className="text-muted small mt-1">{menuItem.description}</h6> : null}
                </div>
                <div className="text-right d-flex justify-content-end">
                    <div>
                        <SingleItemPriceOptions priceOptions={menuItem.priceOptions}/>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2 my-auto d-inline-block"/>
                </div>
            </li>
            <Modal centered show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{menuItem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemModalBody menuItem={menuItem} ref={ref}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={dispatchItem}>
                        Add to the Cart
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    );
};

export default connect(null, {addItemToCart})(SingleItem);