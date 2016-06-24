import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Store Picker */
export default class StorePicker extends Component {
	render() {
		return (
			<form className="store-selector">
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" />
				<input type="submit" value="Send" />
			</form>
		);
	}
}