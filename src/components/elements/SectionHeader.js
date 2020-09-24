import React from 'react';


const SectionHeader = props  => {

	return (
    <header className="main-header">
         <div className="pattern small" aria-hidden="true"></div>
          <p className="section-intro" tabindex="0">{props.content}</p>
          <p className="section-intro mobile">{props.more}</p>
        <div className="pattern small" aria-hidden="true"></div>            
    </header>
	)
}


export default SectionHeader;
