import React from 'react';
require('./Header.scss');

export default class Header extends React.Component {
  render() {
    return (
        <header className="main-header">
          <a href="#">
            <h1>dnzk</h1>
          </a>
        </header>
        );
  }
}
