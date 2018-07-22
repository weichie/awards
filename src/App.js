import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import AwardList from './components/AwardList/AwardList';

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
				throw new Error('Request failed!');
			}, networkError => {
				console.log(networkError.message);
			}).then(jsonResponse => {
				this.setState({awards: jsonResponse,});
			});
	}

	render() {
		return (
			<div className="App">
				<Sidebar />
				<AwardList awards={this.state.awards} />
			</div>
		);
	}
}

export default App;
