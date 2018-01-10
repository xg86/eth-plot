import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'

import App from './App';
import DevTools from './DevTools';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <div>
          <HashRouter>
            <App />
          </HashRouter>
          {/* Being the dev version of our Root component, we include DevTools below */}
          <DevTools />
        </div>
      </Provider>
    );
  }
};