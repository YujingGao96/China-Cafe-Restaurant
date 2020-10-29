import React from 'react';
import {connect} from "react-redux";
import Cards from 'react-credit-cards';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faShoppingCart, faCreditCard} from "@fortawesome/free-solid-svg-icons";
import 'react-credit-cards/es/styles-compiled.css';
import {clearAllItemsFromCart} from "../../actions";
import {submitOrder} from "../../utils/submitOrder";

class CreditCardForm extends React.Component {
    state = {cvc: '', expiry: '', focus: '', name: '', number: '', phone: '', tip: '', finishedPayment: false};

    sendOrder = (e) => {
        e.preventDefault();
        submitOrder(this.props.shoppingCart, this.props.totalPrice, this.state.number, this.state.name, this.state.expiry, this.state.cvc, this.state.phone, this.state.tip)
        this.setState({finishedPayment: true});
    };

    handleInputFocus = (e) => {
        this.setState({focus: e.target.name});
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        if (this.state.finishedPayment) {
            return (
                <div className="text-center m-auto p-4">
                    <div>
                        <FontAwesomeIcon icon={faCheckCircle} size="7x" color="green"/>
                    </div>
                    <div className="my-3 h5 font-weight-bolder">
                        We've received your order.
                    </div>
                    <button className="btn btn-link d-block m-auto"
                            onClick={() => this.props.clearAllItemsFromCart()}>
                        Dismiss
                    </button>
                </div>
            );
        }
        return (
            <div>
                <div className="text-center my-3">
                            <span className="font-weight-bolder">
                                Total Price:
                            </span> $
                    {(this.props.totalPrice * 1.08).toFixed(2)}
                </div>
                <div id="PaymentForm">
                    <Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus}
                           name={this.state.name} number={this.state.number}/>
                    <form className="my-3" onSubmit={e => this.sendOrder(e)}>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <input type="number" className="form-control" id="inputCardNumber" name="number"
                                       placeholder="Card Number" required onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="form-group col-5">
                                <input type="text" className="form-control" id="inputName" name="name" required
                                       placeholder="Name" onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-6">
                                <input type="number" className="form-control" id="inputExpiry" name="expiry" required
                                       placeholder="Expiry" onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="form-group col-6">
                                <input type="number" className="form-control" id="inputCVC" name="cvc"
                                       placeholder="CVC/CVV" required onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-8">
                                <input type="tel" className="form-control" id="inputPhoneNumber"
                                       placeholder="Phone Number"
                                       name="phone" required onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group col-4">
                                <input type="number" className="form-control" id="inputTip"
                                       placeholder="Tip"
                                       min='0'
                                       step='any'
                                       name="tip" onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="mx-auto d-flex justify-content-around">
                            <button className="mx-1 btn btn-secondary" onClick={(e) => {e.preventDefault(); this.props.setShowModal(false)}}>
                                <FontAwesomeIcon icon={faShoppingCart}/> Cancel
                            </button>
                            <button type="submit" className="mx-1 btn btn-success">
                                <FontAwesomeIcon icon={faCreditCard}/> Pay Now
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({shoppingCart, totalPrice}) => {
    return {
        shoppingCart,
        totalPrice
    };
}

export default connect(mapStateToProps, {clearAllItemsFromCart})(CreditCardForm);