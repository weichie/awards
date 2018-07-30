import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import Filter from '../Filter/Filter';

class Sidebar extends React.Component{
	constructor(props){
		super(props);
		this.removeLoading = this.removeLoading.bind(this);
	}

	componentDidMount() {
		const sidebarObject = document.querySelector('.sidebar');
		const sidebarText = document.querySelector('.sidebar-text p');
		const sidebarTitle = document.querySelector('.sidebar-text h1');
		const sidebarLogo = document.querySelector('.logo');
		const sidebarFooter = document.querySelector('.footer');

		setTimeout(() => {
			this.removeLoading(sidebarObject);
		}, 300);

		setTimeout(() => {
			this.removeLoading(sidebarText);
		}, 1000);

		setTimeout(() => {
			this.removeLoading(sidebarTitle);
			this.removeLoading(sidebarLogo);
			this.removeLoading(sidebarFooter);
		}, 1500);
	}

	removeLoading = div => {
		div.classList.remove('loading');
	}

	render(){
		return(
			<div className="sidebar loading">
				<Filter />
				<div className="logo loading">
					<img src="https://www.weichieprojects.com/wp-content/uploads//2017/12/logo-black.png" alt="WeichieProjects" />
				</div>
				<div className="sidebar-text">
					<h1 className="loading">See my <span>Award</span> Nomina<span>tions</span></h1>
					<p className="loading">
						I made this small project to showcase my award-nominated projects and to learn myself React. 
						It's using the Wordpress API from my main website <a href="https://weichieprojects.com" target="_blank" rel="noopener noreferrer">weichieprojects.com</a> to pull the data.
					</p>
				</div>
				<div className="footer loading">
					<Link to="/about">About</Link>
				</div>
			</div>
		);
	}
}

export default Sidebar;