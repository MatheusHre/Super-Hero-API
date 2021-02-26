import React from 'react';
import { Provider } from "react-redux"
import './App.css';
import HeroPage from './pages/hero';


import store from './store';

function App() {

  return (
    <Provider store={store}>
        <HeroPage />

    </Provider>
  );
}

export default App;
