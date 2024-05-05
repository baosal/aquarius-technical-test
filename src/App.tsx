import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { WeatherDashboard } from './screen/Dashboard/WeatherDashboard';
import { SwtichTheme } from './components/SwitchTheme/SwitchTheme';

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div>
      {/* <SwtichTheme></SwtichTheme> */}
      <WeatherDashboard></WeatherDashboard>
    </div>
  );
}

export default App;
