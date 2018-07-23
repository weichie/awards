import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="NotFound">
		<h4>Whoops...</h4>
		<h1>404 - Page Not Found</h1>
		<p>It looks like this page does not exist...</p>
		<Link to="/">Return Home</Link>
	</div>
);

export default NotFound;