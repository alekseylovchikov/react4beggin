import React, { Component } from 'react';

import Header from '../header/header';
import Order from '../order/order';
import Inventory from '../inventory/inventory';

export default class Store extends Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory />
			</div>
		);
	}
}