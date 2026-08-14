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
                <div class="logo-container">
                    <img src={monLogo} alt="Logo de l'entreprise" class="logo" />
                    <h1>METALEX SARL</h1>
                </div>
                <ul id="navbar" className={menuOpen ? "active" : ""}>
                    <li><a href="#acceuil" onClick={() => setMenuOpen(false)}>ACCUEIL</a></li>
                    <li><a href="#apropos" onClick={() => setMenuOpen(false)}>À PROPOS</a></li>
                    <li><a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a></li>
                    <li><a href="#realisation" onClick={() => setMenuOpen(false)}>RÉALISATIONS</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;