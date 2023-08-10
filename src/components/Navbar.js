import React from 'react'
import "../styles/Navbar.css"
// import {logo} from "../data/data.json"

const searchIcon =<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>;
const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-inear">
                <div className="logo">
                    <a href="/">
                        <img id="logo-img" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="text" />
                    </a>
                </div>
                <div className='menu'>
                    <a href="/#miphones" className="navlinks">Mi Phones</a>
                    <a href="/#redmiphones" className="navlinks">Redmi Phones</a>
                    <a href="/#tv" className="navlinks">TV</a>
                    <a href="/#laptops" className="navlinks">Laptops</a>
                    <a href="/#lifestyles" className="navlinks">Fitness & Lifestyles</a>
                    <a href="/#home" className="navlinks">Home</a>
                    <a href="/#radio" className="navlinks">Radio</a>
                    <a href="/#accessories" className="navlinks">Accessories</a>
                </div>
                <div className="input">
                    <input type="text" placeholder='Search Products'/>&nbsp;{searchIcon}
                </div>
        </div>
    </div>
  )
}

export default Navbar