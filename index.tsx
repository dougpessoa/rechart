import React, { useState } from 'react';
import { render } from 'react-dom';
import Chart from './Chart'

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  const [name, setName] = useState('doug');

  return (
    <Chart />
  );
};

render(<App />, document.getElementById('root'));
