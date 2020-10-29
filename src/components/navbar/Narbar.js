import React from "react";
import ShoppingCart from "./ShoppingCart";
import NavCategories from "./NavCategories";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-custom fixed-top nav-rounded-bottom">
            <div className="container">
                <NavCategories/>
                <div className="px-2">
                    <a className="navbar-brand" href="/">
                        <img src="images/logo.png" alt="Logo" width="auto" height="40vh" className="align-top"/>
                    </a>
                </div>
                <ShoppingCart/>
            </div>
        </nav>
    );
};

export default Navbar;