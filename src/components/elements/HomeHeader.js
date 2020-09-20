import React from 'react';
import Button from './Button';


const HomeHeader = () => {

	return (
    <header className="main-header">
      <div className="pattern large" aria-hidden="true"></div>
         <div className="About-me">
          <p>Hello, I'm Sophie. I'm a developer who like <span>Frontend development</span>. 
          I have professional experiences in <span>full stack development</span>, working with <span>CMS</span> like <span>WordPress</span> and in <span>project management</span>. I also like to use and experiment <span>React</span>.</p>
        </div>
      <Button  link="/About" 
              label="go to about page" 
              text="READ MORE ABOUT ME"
              className="see-more" 
      />
    </header>
	)
}


export default HomeHeader;
