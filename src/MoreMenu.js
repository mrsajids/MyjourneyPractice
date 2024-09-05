import React, { useState, useEffect, useRef } from 'react';
import './app.css'; // Assuming you have a separate CSS file

const MoreMenu = ({children}) => {
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    setVisible((prevVisible) => !prevVisible); // Toggle the menu visibility
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside of the menu and button
    if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div className="container1">
      <div className="more">
        <button
          ref={buttonRef}
          id="more-btn"
          className="more-btn"
          onClick={toggleMenu}
          aria-haspopup="true"
          aria-expanded={visible}
        >
          <span className="more-dot"></span>
          <span className="more-dot"></span>
          <span className="more-dot"></span>
        </button>
        <div
          ref={menuRef}
          className={`more-menu ${visible ? 'show-more-menu' : ''}`}
          aria-hidden={!visible}
        >
          <div className="more-menu-caret">
            <div className="more-menu-caret-outer"></div>
            <div className="more-menu-caret-inner"></div>
          </div>
          <ul
            className="more-menu-items"
            tabIndex="-1"
            role="menu"
            aria-labelledby="more-btn"
          >
            {/* {['Share', 'Copy', 'Embed', 'Block', 'Report'].map((item) => (
              <li className="more-menu-item" role="presentation" key={item}>
                <button type="button" className="more-menu-btn" role="menuitem">
                  {item}
                </button>
              </li>
            ))} */}{
                children
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreMenu;
