import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherDashboard } from './screen/Dashboard/WeatherDashboard';
import { SwtichTheme } from './components/SwitchTheme/SwitchTheme';
import { ThemeContext } from './context';
import { useEffect, useState } from 'react';
const localTheme = window.localStorage.getItem('theme') || 'light'
console.log('localTheme', localTheme)
function App() {
  const [theme, setTheme] = useState(localTheme)
  const onSwitchTheme = () => {
    const newTheme = theme === 'light' ? 'night' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme);
    window.localStorage.setItem('theme', newTheme)
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [])
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
