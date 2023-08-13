import React, { useState } from 'react';
import "../hamburgerMenu.css"
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    <div id='menu2'className={`hamburger-menu ${isOpen ? 'open' : ''}`} >
          <a href="/#miphones" className="navlinks">Mi Phones</a>
          <a href="/#redmiphones" className="navlinks">Redmi Phones</a>
          <a href="/#tv" className="navlinks">TV</a>
          <a href="/#laptops" className="navlinks">Laptops</a>
          <a href="/#lifestyles" className="navlinks">Fitness & Lifestyles</a>
          <a href="/#home" className="navlinks">Home</a>
          <a href="/#radio" className="navlinks">Radio</a>
          <a href="/#accessories" className="navlinks">Accessories</a>
    </div>
    </>
  );
}

export default HamburgerMenu;
