import React, {useState} from 'react';
import './App.css';
import AppBar from './components/appBar.js';
import Info from './components/Info.js';
import BotNav from './components/FooterNav.js';

function App() {

  const screenConfig = useState(0);

// 1 hour 26 minutes onward

  return (
    <div>
      <AppBar />
      <Info currentScreen = {screenConfig[0]}/>
      <BotNav screenConfig = {screenConfig} />
    </div>
  );
}

export default App;
