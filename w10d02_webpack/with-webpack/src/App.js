import React from 'react';
import Header from './components/Header';
import CounterComponent from './components/CounterComponent';

import './App.scss';

const App = () => {
  console.log('pasta time');
  console.log('pizza is also tasty');

  const links = [
    {path: '/', name: 'home'},
    {path: '/buttons', name: 'buttons'}
  ];
  
  return React.createElement("div", 
    {className: 'App'},
    React.createElement(Header, {links}),
    React.createElement(CounterComponent, null)
  )
};

export default App;