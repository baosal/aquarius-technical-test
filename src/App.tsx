import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherDashboard } from './screen/Dashboard/WeatherDashboard';
import { SwtichTheme } from './components/SwitchTheme/SwitchTheme';
import { ThemeContext } from './context';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')
  const onSwitchTheme = () => {
    const newTheme = theme === 'light' ? 'night' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme);
  }
  return (
    <div className='h-screen w-screen text-text-dark'>
      <ThemeContext.Provider value={theme} >
        <SwtichTheme onChange={onSwitchTheme}></SwtichTheme>
        <WeatherDashboard></WeatherDashboard>
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
