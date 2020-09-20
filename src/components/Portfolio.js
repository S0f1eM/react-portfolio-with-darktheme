import React from 'react';
import ProjectCard from './elements/ProjectCard';
import Button from './elements/Button';
import SectionHeader from './elements/SectionHeader';
import Quote from './elements/Quote';


const Portfolio = () => {

	const content = "Here are some projects I build or still working on. Some are professional projects (like IUEM websites and the directory plugin). There are also personal projects I made on my free time like portfolios or FreeCodeCamp projects to keep on training.";
	const more = "I use JavaScript for most of those project from vanilla JS to React. I also love playing with shapes and colors thanks to CSS possibilitie. I'm training to improve my accessibility knowledge cause I really think it's important to make the web accessible for all and I'm also working on UI/UX design.";				

    const quote = `"Be stubborn about your goals and flexible about your methods."`;

	return (
		<>
			<section className="portfolio" id="portfolio">
				
				<SectionHeader content={content} more={more} />
				
				<div className="portfolio-list">
					<ProjectCard  
			          title="Personal website 2020" 
			          img="darkmode-portfolio.png"
			          content="A website with a darkmode effect built with React. Made of a portfolio, about section and contact pages."
			          skills=" React - CSS - Netlify"
			          url="/"
			          github="https://github.com/S0f1eM/portfolio-2020"
			        />
			        <ProjectCard 
			          title="Pictures API Search" 
			          img="screenshot-pictures-search.png"
			          content="An Images search page made with React and axios client to fetch data using the Unsplash API."
			          skills=" React - Unsplash API - axios "
			          url="https://github.com/S0f1eM/pics-search-unsplash"
			        />
			        <ProjectCard 
			          title="Drum Machine" 
			          img="screenshot-drum-machine.png"
			          content="A drum machine build with React & React-dom on Codepen for the FreeCodeCamp Front-end projects."
			          skills=" React - React-dom"
			          url="https://codepen.io/s0ph1/full/abNZapq"
			        />
			        <ProjectCard 
			          title="Pomodoro" 
			          img="screenshot-pomodoro.png"
			          content="A Pomodoro build with React & moment.js on Codepen for the FreeCodeCamp Front-end projects."
			          skills=" React - moment.js "
			          url="https://codepen.io/s0ph1/full/mdPrWKZ"
			        />
			        <ProjectCard  
			          title="Semantic UI Template" 
			          img="screenshot-MoodColors.png"
			          content="A Blog template made with Reactjs using the react-semantic-ui integration and shorthands props."
			          skills=" React - react-semantic-ui"
			          url="http://moodcolors.surge.sh/"
			          github="https://github.com/S0f1eM/neon-template"
			        />
			        <ProjectCard 
			          title="IUEM Websites" 
			          img="screenshot-iuem.png"
			          content="A university institute and 3 laboratories ( Lemar, Geosciences and Amure ) partners websites built with WordPress."
			          skills=" HTML - LESS - PHP - MySQL"
			          url="https://www-iuem.univ-brest.fr"
			        />
			        <ProjectCard 
			          title="Directory WP Plugin" 
			          img="plugin-directory.png"
			          content="A WordPress directory manager plugin to manage a researchers directory (php & MySQL) and show the list on the website."
			          skills=" PHP - MySQL - JavaScript"
			          url="https://www-iuem.univ-brest.fr/annuaire/"
			          github="https://github.com/S0f1eM/my-first-wp-plugin"
			        />
			        <ProjectCard  
			          title="Full CSS Portfolio"
			          img="flexbox-portfolio.png" 
			          content="A developer portfolio made from scratch with Flexbox and no JavaScript. It was a personal challenge for my 2019 portfolio."
			          skills=" CSS3 - Flexbox - HTLM5"
			          url="https://flexbox-portfolio.surge.sh"
			          github="https://github.com/S0f1eM/portfolio-full-css"
			        />
			        <ProjectCard 
			          title="Bootstrap Portfolio" 
			          img="bootstrap-portfolio.png"
			          content="A responsive portfolio made from scratch with bootstrap at the end of my developer certification in 2016."
			          skills=" HTML5 - CSS3 - jQuery - Bootstrap"
			          url="https://bootstrap-portfolio.surge.sh "
			          github="https://github.com/S0f1eM/Bootstrap-portfolio"
			        />			 
				</div>
				<Button  link="/About" 
              			 label="go to about page" 
              		     text="VIEW MY RESUME"
              			 className="see-more" 
                />
			</section>

			<Quote quote={quote} />
		</>
	)
}


export default Portfolio;