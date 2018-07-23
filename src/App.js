import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import AwardList from './components/AwardList/AwardList';
import About from './components/About/About';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			awards: {}
		}
	}

	componentDidMount(){
		const cors = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://www.weichieprojects.com/wp-json/awards/all-posts';
		fetch(`${cors}${url}`)
			.then(response => {
				if(response.ok){
					return response.json();
				}
			}, networkError => {
				console.log(networkError.message);
			}).then(jsonResponse => {
				this.setState({awards: jsonResponse});
			});
	}

	render(){
		return(
			<div className="App">
				<Sidebar />
				<div className="content">
					<AwardList awards={this.state.awards} />
				</div>
			</div>
		)
	}
}

export default App;
