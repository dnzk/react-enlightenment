require('file?name=[name].[ext]!./index.html');
require('./global-style/global.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header';

class App extends React.Component {
  render() {
    return (
        <Header />
        );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
