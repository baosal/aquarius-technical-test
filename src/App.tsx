import React from 'react';
import './App.css';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { DashBoard } from './screen/Dashboard/Dashboard';
import { SwtichTheme } from './components/SwitchTheme/SwitchTheme';

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div>
      {/* <SwtichTheme></SwtichTheme> */}
      <DashBoard></DashBoard>
    </div>
  );
}

export default App;
