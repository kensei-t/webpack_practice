import ReactDom from 'react-dom';
import * as React from 'react';

// difine application
const App = (props) => {
  return(
    <div　style={{ color: '#000'}}>
      Hello React App!
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
