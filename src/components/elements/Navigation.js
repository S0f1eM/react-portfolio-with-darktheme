import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';


const Navigation = () => {

	return (     	
      <nav className="navigation">
        
        <ul className="menu top-nav">

            <li className="left-nav">
               <Link to="/"  
                    aria-label="go to home page"
                    data-menuanchor="home page"
                    className="logo no-hover"
                    role="navigation">
                  <h1>Sophie M.</h1>
              </Link>
            </li>

          <li>
            <Link to="/Portfolio" 
                  aria-label="go to portfolio" 
                  data-menuanchor="portfolio"
                  className="nav"
                rel="noopener noreferrer"
                role="navigation">PORTFOLIO
            </Link>
          </li>
        	 <li>
            <Link to="/About"  
                  aria-label="go to about page"
                  data-menuanchor="about page"
                  className="nav"
                  rel="noopener noreferrer"
                  role="navigation">ABOUT
           </Link>
          </li>
          <li className="toggle-mode">
            <DarkModeToggle />
          </li>
        </ul>

          <ul className="menu right-nav">
            <li>
              <Link to="/"  
                  aria-label="go to home page"
                  data-menuanchor="home page"
                  role="navigation">HOME
              </Link>
            </li>
            <li>
              <Link to="/Resources"  
                    aria-label="go to resources page"
                    data-menuanchor="resources page"
                    className="nav"
                    rel="noopener noreferrer"
                    role="navigation">RESOURCES
              </Link>
            </li>
              <li>
              <Link to="/Getintouch" 
                  aria-label="go to the contact page" 
                  data-menuanchor="contact"
                  rel="noopener noreferrer"
                  role="navigation">CONTACT</Link>
            </li>
            <li>
            <Link to="/Portfolio" 
                  aria-label="go to portfolio" 
                  data-menuanchor="portfolio"
                  className="desktop"
                rel="noopener noreferrer"
                role="navigation">PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="/About"  
                  aria-label="go to about page"
                  data-menuanchor="about page"
                  className="desktop"
                  rel="noopener noreferrer"
                  role="navigation">ABOUT
            </Link>
          </li>
          <li>
            <Link to="/Resources"  
                  aria-label="go to resources page"
                  data-menuanchor="resources page"
                  className="desktop"
                  rel="noopener noreferrer"
                  role="navigation">RESOUCRCES
            </Link>
          </li>
        </ul>
      </nav>    
	)
}


export default Navigation;
