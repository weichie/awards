import React from 'react';
import './Sidebar.css';

import Filter from '../Filter/Filter';

class Sidebar extends React.Component{
	render(){
		return(
			<div className="sidebar">
				<Filter />
				<div className="logo">
					<img src="https://www.weichieprojects.com/wp-content/uploads//2017/12/logo-black.png" alt="WeichieProjects" />
				</div>
				<div className="sidebar-text">
					<h1>See my <span>Award</span> Nomina<span>tions</span></h1>
					<p>
						I made this small project to showcase my award-nominated projects and to learn myself React. 
						It's using the Wordpress API from my main website <a href="https://weichieprojects.com" target="_blank" rel="noopener noreferrer">weichieprojects.com</a> to pull the data.
					</p>
				</div>
			</div>
		);
	}
}

export default Sidebar;