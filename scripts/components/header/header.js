import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  static defaultProps = {
    tagline: '',
  };

  static propTypes = {
    tagline: PropTypes.string,
  };

  render() {
    const { props } = this;
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{ props.tagline }</span></h3>
      </header>
    );
  }
}
