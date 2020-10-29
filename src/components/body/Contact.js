import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt, faClock, faTruck, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import "./CategoryCard.css";

const Contact = () => {
    return (
        <div className="mt-3 mb-2 row px-3">
            <div className="col-12">
                <div className="card shadow rounded-all p-3">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 p-3 rounded-all my-auto">
                            <div className="embed-responsive embed-responsive-4by3 rounded-all shadow">
                                <iframe id="googleMapFrame"
                                        title="China Cafe Map"
                                        className="embed-responsive-item rounded-all"
                                        src="https://maps.google.com/maps?q=4231%20Macon%20Rd%2C%20Columbus%2C%20GA%2031907&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                >
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 p-3 my-auto">
                            <div className="px-2 d-flex flex-row my-3">
                                <div className="px-2 my-auto">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} size="lg"/>
                                </div>
                                <div className="px-1 my-auto">
                                    <h4 className="font-weight-bolder my-auto">4231 Macon Road, Columbus, GA 31907</h4>
                                </div>
                            </div>

                            <div className="ml-2">
                                <div className="row">
                                    <div className="col-md-6 col-12 m-auto">
                                        <div className="d-flex flex-row mt-4">
                                            <div className="pl-2 my-auto">
                                                <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
                                            </div>
                                            <div className="px-2 my-auto">
                                                <h5 className="px-2 font-weight-bolder">Telephone</h5>
                                                <div className="px-2 text-muted font-weight-bold">(706) 562-0868</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 m-auto">
                                        <div className="d-flex flex-row mt-4">
                                            <div className="pl-2 my-auto">
                                                <FontAwesomeIcon icon={faTruck} size="lg"/>
                                            </div>
                                            <div className="my-auto">
                                                <h5 className="px-2 font-weight-bolder">Delivery</h5>
                                                <div className="text-muted d-flex flex-row px-2">
                                                    {/*<img*/}
                                                    {/*    src="images/doordashAlt.png"*/}
                                                    {/*    alt="Doordash Logo"*/}
                                                    {/*    width="100px"*/}
                                                    {/*    height="28px"*/}
                                                    {/*/>*/}
                                                    <div className="px-2 my-auto">
                                                        <img
                                                            className="shadow rounded-lg"
                                                            src="images/doordash.png"
                                                            alt="Doordash"
                                                            width="30px"
                                                            height="30px"/>
                                                    </div>
                                                    <div className="px-2 my-auto font-weight-bolder">
                                                        <img
                                                            className="shadow rounded-lg"
                                                            src="images/waitr.png"
                                                            alt="Waitr"
                                                            width="30px"
                                                            height="30px"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 m-auto">
                                        <div className="d-flex flex-row mt-4">
                                            <div className="pl-2 my-auto">
                                                <FontAwesomeIcon icon={faClock} size="lg"/>
                                            </div>
                                            <div className="px-2 my-auto">
                                                <h5 className='px-2 font-weight-bolder'>Hours</h5>
                                                <div className="text-muted d-flex flex-row">
                                                    <div className="px-2 my-auto">
                                                        <div className="font-weight-bold">Mon-Thu</div>
                                                        <div className="font-weight-bold">Fri-Sat</div>
                                                        <div className="font-weight-bold">Sunday</div>
                                                    </div>
                                                    <div className="px-2 my-auto">
                                                        <div>11:00AM-09:00PM</div>
                                                        <div>11:00AM-10:00PM</div>
                                                        <div>Closed</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;