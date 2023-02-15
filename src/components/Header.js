import React from "react";
import Nav from "./Nav";
import logo from "./../assets/little-lemon-logo.jpg";

function Header() {
    return (
        <>
        <header>
            <img src={logo} alt="logo" title="little lemon tree logo"></img>
            <Nav />
        </header>
        </>
    );
};

export default Header;