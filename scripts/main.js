import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation, browserHistory } from 'react-router';

import {
  StorePicker,
  Store,
} from './components/';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={Store} />
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
