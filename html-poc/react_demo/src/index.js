import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

/*
function MyWelcomeMessage(props) {
  const headingStyle = {
      color: 'brown',
      textAlign: 'center'
  };

  return <h1 style={headingStyle}>Welcome To React Demo!</h1>;
}


root.render(<MyWelcomeMessage />);
*/

