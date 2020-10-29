import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="footer_bg">
                    <div className="footer_bg_one"/>
                    <div className="footer_bg_two"/>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center my-3">
                            <p className="mb-0 f_400">© China Cafe 2020 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;