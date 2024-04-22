import React from 'react';
// import { render } from 'react-dom';
import App from './src/client/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
// uncomment so that webpack can bundle styles
import { createRoot } from 'react-dom/client';

// Find the root element to attach the app to
const rootElement = document.getElementById('root');
// Create a root container
const root = createRoot(rootElement);

// Render the app within the HashRouter
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// );
