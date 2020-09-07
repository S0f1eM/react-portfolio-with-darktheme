import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './elements/DarkModeToggle';


const Header = () => {

	return (
    <header className="main-header" id="header">
     	<nav className="navigation">
        <ul className="menu">
        	<li>
            <a className="logo" href="/" aria-label="top of the home page">
                <h1>Sophie M.</h1>
            </a>
          </li>
        	<li>
            <a href="/#projects"
                aria-label="go to portfolio âge" 
                rel="noopen:nth-child(5)er noreferrer">Portfolio</a>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to about âge"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact page" 
                aria-current="page"
                rel="noopener noreferrer">Contact</a>
          </li>
          <li>
          <DarkModeToggle />
          </li>
        </ul>
      </nav>
      <div className="pattern large"></div>
      <div className="About-me">
        <p>Hello, I'm Sophie. I'm a creative developer who love <span>Frontend development</span>. 
        I have professional experiences in <span>full stack development</span>, with <span>CMS</span> like <span>WordPress</span> and also in <span>project management</span>. I can be part in every step of the creative process for a website redesign, 
        from the writing of the specifications through a plugin development to the delivery in production.</p>
      </div>
    </header>
	)
}


export default Header;
