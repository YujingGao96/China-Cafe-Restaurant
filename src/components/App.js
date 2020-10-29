import React, {useEffect} from "react";
import CategoriesList from "./body/CategoriesList";
import Footer from "./footer/Footer";
import Contact from "./body/Contact";
import Navbar from "./navbar/Narbar";
import activateServer from "../api/activateServer";
import SearchBar from "./body/SearchBar";

const App = () => {
    useEffect(()=> {
        activateServer();
    },[])
    return (
        <div>
            <div className="container">
                <Navbar/>
                <Contact/>
                <SearchBar/>
                <CategoriesList/>
            </div>
            <Footer/>
        </div>

    );
};

export default App;