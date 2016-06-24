import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { StorePicker, Header, Order, Inventory } from './components/';

class App extends Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header />
				</div>
				<Order />
				<Inventory />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#main'));
