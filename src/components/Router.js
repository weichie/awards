import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import About from './About/About';
import NotFound from './NotFound/NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router;