import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import routes from './routes';
require('./styles/reset.css');

// Create the application mounting node
const mountingNode = document.createElement('div');

// Append mounting node to body
document.body.appendChild(mountingNode);

// TODO create main container to define big picture colors/sizes in the screen
render(
  <Provider store={Store}>
    <div>
      {routes}
    </div>
  </Provider>,
  mountingNode
);
