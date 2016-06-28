import React, { Component } from 'react';

import h from '../../helpers';

/* Store Picker */
export default class StorePicker extends Component {
	render() {
		const { props } = this;
		return (
			<form className="store-selector">
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={ h.getFunName() } required />
				<input type="submit" value="Send" />
			</form>
		);
	}
}