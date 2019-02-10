import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Simple Express React Webpack Babel Setup Environment';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);


module.hot.accept();