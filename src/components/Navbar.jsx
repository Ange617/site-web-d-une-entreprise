import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import monLogo from "../assets/logo.png";
import "./NavbarStyles.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav>
                {menuOpen && (
                    <div
                        className="overlay"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <img src={monLogo} alt="Logo" className="logo" />

                <ul id="navbar" className={menuOpen ? "active" : ""}>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>À PROPOS</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>SERVICES</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>RÉALISATIONS</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;