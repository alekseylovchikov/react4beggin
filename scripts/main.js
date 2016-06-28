import React from 'react';
import ReactDOM from 'react-dom';

import { 
	Router,
	Route,
	browserHistory,
} from 'react-router';

import {
  StorePicker,
  Store,
  NotFound,
} from './components/';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={Store} />
		<Route path="*" component={NotFound} />
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
