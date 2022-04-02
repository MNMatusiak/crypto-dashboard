import React from "react";
import './Nav.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h3>Crypto Dashboard</h3>

            <ul className="nav-links">

                <Link className="nav-links" to="/cryptolist">
                    <li>Crypto List</li>
                </Link>
                <Link className="nav-links" to="/exchangerates">
                    <li>Exchange Rates</li>
                </Link>
                {/*<Link className="nav-links" to="/cryptonews">*/}
                {/*    <li>Crypto News</li>*/}
                {/*</Link>*/}

            </ul>
        </nav>
    )
}

export default Nav;