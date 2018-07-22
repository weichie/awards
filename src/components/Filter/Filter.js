import React from 'react';
import './Filter.css';

class Filter extends React.Component{
	render(){
		return(
			<div className="filter">
				<nav>
					<a href="#!" className="active">View All</a>
					<a href="#!">Own Projects</a>
					<a href="#!">On Subcontract</a>
				</nav>
			</div>
		);
	}
}

export default Filter;