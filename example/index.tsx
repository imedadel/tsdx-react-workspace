import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import pkg from '<package>';

const App = () => {
  return (
    <div>
      Yo.
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
