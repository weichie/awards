import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends React.Component{
	render(){
		return(
			<div className="about">
				<h1>About</h1>
				<div className="container">
					<p>
						I made this project for learning purposes. To get my hands on ReactJS and improve my overall ES6 skills. I followed the CodeCademy Pro Intense couse to get started with React, and wanted to create this live project as a first test of what I've learned so far. My course is not finished yet, so I'll add new features to this project on the go.
					</p>
					<p>
						For now the project only displays data from a json-file. I implemented React Router to make it possible to navigate to the about page. I'll add other routers for each project as well, to share more details about the projects instead of instantly linking to it. Next up I want to link this project up to firebase, to make it possible that users can vote or comment on my projects. For now React looks like a bit of over-kill for this project, but once I've linked it to firebase and made user-votes/comments possible, I think I had a good first-practice with React.
					</p>
					<h4>- Project Setup</h4>
					<p>
						I've setup my main website on <a href="https://weichieprojects.com" target="_blank" rel="noopener noreferrer">weichieprojects.com</a> to have an extra custom post type called awards. I activated the Wordpress API on this post-type so I'll have a json link of all this data. Because of this setup I don't need to update my project but can just update my main website and React will pull the new data automatically.
					</p>
					<p>
						This project purely uses React and is created/published by the 'create-react-app' command. No other back-/front-end frameworks are used on this project.
					</p>
					<h4>- Project Features</h4>
					<p>
						Because this is my first React Project, I'll write down some more details about the features I've used in this project. Please don't hesitate to send me feedback if you think I didn't do it in the right way.
					</p>
					<h6>React Router</h6>
					<p>
						I'm currently using React Router to make it possible to navigate using React form the main app to the about page. It has a fallback function for non-existing urls. I'll add navigation to single projects as well soon, so I'll learn React Router with specific project ID's as well.
					</p>
					<h6>State</h6>
					<p>
						I'm initializing the state of my app in the parent App Component. I'll pass the entire json string from my website into the 'awards' state. After passing this through to my child components, to display my award-list, I'll loop over the json file and add a Award component for each object in the json file.
					</p>
					<h6>Animation / loading</h6>
					<p>
						I'm using 'componentDidMount', 'componentWillUnmount' and 'componentWillMount' to play around with some extra animation classes and a smoother loading effect.
					</p>
					<h6>Firebase</h6>
					<p>
						I didn't link this project to firebase yet so far...
					</p>
					<Link className="back" to="/">Back to homepage</Link>
				</div>
			</div>
		);
	}
}

export default About;