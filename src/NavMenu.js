import React, { useState } from 'react';
// import { User, EnvelopeSimple, GearSix, Question, SignOut } from 'phosphor-react';
import './app.css'; // Import the CSS file

const NavMenu = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav>
            <div className="menu-toggle"></div>
            <div className="profile" onClick={toggleMenu}>
                <div className="user">
                    <h3>Katherine Cooper</h3>
                    <p>@probablykat66</p>
                </div>
                <div className="img-box">
                    <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="some user image" />
                </div>
            </div>
            <div className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="">d</a></li>
                    <li><a href="">5</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;
