import React from 'react';
import './Filter.css';

class Filter extends React.Component{
	componentDidMount(){
		const filterObject = document.querySelector('.filter');

		setTimeout(() => {
			filterObject.classList.remove('loading');
		}, 1500);
	}

	render(){
		return(
			<div className="filter loading">
				<nav>
					<a href="#!" className="active">View All</a>
				</nav>
			</div>
		);
	}
}

export default Filter;