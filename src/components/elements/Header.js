import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {

	return (
    <header className="main-header" id="header">
     	<nav className="navigation">
        <ul className="menu">
        	<li>
            <Link to="/" 
                aria-label="top of the page"
                rel="noopener noreferrer">
                  <h1 className="myName">Sophie <span className="mobile">M.</span></h1>
            </Link>
          </li>
        	<li>
            <a href="/#projects"
                aria-labelledby="go to projects section" 
                rel="noopener noreferrer">Projects</a>
          </li>
        	<li>
            <Link to="/Resume" title="link to Resume" 
                  aria-label="go to Resume section"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-labelledby="go to the contact section" 
                aria-current="page"
                rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="About-me">
        <p>I am a french developer who love front-end development. 
        I had worked with various CMS and love coding with Javascript.
        I search for a professionnal project to evolve with great people. 
        <span className="mobile">Remote job are more than welcomed. 
        Collaborate with a international team would be a thrilling experience for me.</span></p>
      </div>
    </header>
	)
}


export default Header;