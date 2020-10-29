import React, {useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faTrash, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import calculateTax from "../../utils/calculateTax";
import Dropdown from "react-bootstrap/Dropdown";
import {removeItemFromCart} from "../../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CheckOut from "./CheckOut";

const ShoppingCart = ({shoppingCart, totalPrice, removeItemFromCart}) => {
    const [shownModals, setShownModals] = useState([]);
    const addShownModal = modalID => {
        setShownModals([...shownModals, modalID])
    };
    const removeShownModals = modalID => {
        setShownModals(shownModals.filter(shownModal => shownModal !== modalID))
    };
    const containsModal = modalID => shownModals.includes(modalID);

    const generateShoppingList = () => {
        return (
            shoppingCart.map((item) => {
                const modalID = "modal" + item.id;
                return (
                    <React.Fragment key={item.id}>
                        <Dropdown.Item className="text-right" as="div" onClick={() => addShownModal(modalID)}>
                            <div className="d-flex justify-content-between">
                                <div className="small ml-1 text-left">
                                    {item.name}
                                </div>
                                <div className="small ml-1 text-right font-weight-bold">
                                    $ {item.price.toFixed(2)} &nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <div className="dropdown-divider"/>
                        <Modal centered show={containsModal(modalID)} onHide={() => removeShownModals(modalID)}
                               id={modalID}>
                            <Modal.Header closeButton>
                                <Modal.Title>{item.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="h6"><b>Price: $</b>{item.price.toFixed(2)}</div>
                                <div className="h6"><b>Special Instruction:</b></div>
                                {item.specialInstructions.length === 0 ? <div className="ml-3">None</div> : null}
                                {item.specialInstructions.map(specialInstruction => {
                                    return (
                                        <div className="ml-3" key={specialInstruction}>
                                            - {specialInstruction}
                                        </div>
                                    );
                                })}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => removeItemFromCart(item)}>
                                    <FontAwesomeIcon icon={faTrash}/> Remove
                                </Button>
                                <Button variant="secondary" onClick={() => removeShownModals(modalID)}>
                                    <FontAwesomeIcon icon={faShoppingCart}/> Continue
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </React.Fragment>
                );
            })
        );
    };

    const printTotal = () => {
        const beforeTax = totalPrice.toFixed(2);
        const tax = calculateTax(totalPrice).toFixed(2);
        const afterTax = (parseFloat(beforeTax) + parseFloat(tax)).toFixed(2);

        return (
            <React.Fragment>
                <div>
                    <div className="font-weight-normal text-muted">
                        <small>
                            {'Subtotal: $ ' + beforeTax}
                        </small>
                    </div>
                    <div className="font-weight-normal text-muted">
                        <small>
                            {'Tax (GA 8%): $ ' + tax}
                        </small>
                    </div>
                    <div className="font-weight-bolder text-dark ">
                        {'Total: $ ' + afterTax}
                    </div>
                </div>
                {shoppingCart.length === 0
                    ? null
                    : <CheckOut/>
                }
            </React.Fragment>

        );
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                id='dropdown-nav-shopping-cart'
                variant=''
                size='lg'
            >
                <React.Fragment>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" color="grey"/>
                    <span className="badge badge-warning badge-pill"
                          id="items-count">{shoppingCart.length === 0 ? '' : shoppingCart.length}</span>
                </React.Fragment>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight>
                {generateShoppingList()}
                <Dropdown.Item className="text-right" as="div">
                    {shoppingCart.length === 0 ? 'Your Cart is Empty' : printTotal()}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = ({shoppingCart, totalPrice}) => {
    return {
        shoppingCart,
        totalPrice
    };
}

export default connect(mapStateToProps, {removeItemFromCart})(ShoppingCart);