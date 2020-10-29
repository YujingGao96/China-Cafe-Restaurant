import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import CreditCardForm from "./CreditCardForm";

const CheckOut = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <React.Fragment>
            <button type="button"
                    className="btn btn-success btn-sm d-block mx-auto mt-3"
                    onClick={() => {setShowModal(true)}}
            >
                Check Out
            </button>
            <Modal centered show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header>
                    <Modal.Title>Check Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreditCardForm setShowModal={setShowModal}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default CheckOut;