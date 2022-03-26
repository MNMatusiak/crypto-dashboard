import React from "react";
import './Nav.css';

const Nav = () => {
    return(
        <nav>
            <h3>Crypto Dashboard</h3>
            <ul className="nav-links">
                <li>Crypto List</li>
                <li>Exchange Rates</li>
                <li>Crypto News</li>
            </ul>
        </nav>
    )
}

export default Nav;