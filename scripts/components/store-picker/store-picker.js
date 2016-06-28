import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import h from '../../helpers';

/* Store Picker */
export default class StorePicker extends Component {
	goToStore(e) {
		e.preventDefault();
		let storeID = this.refs.storeId.value;
		browserHistory.push('/store/' + storeID);
	}
	
	render() {
		const { props } = this;
		return (
			<form className="store-selector" onSubmit={ this.goToStore.bind(this) }>
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={ h.getFunName() } required />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}