import React from 'react';
import './App.css';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function App() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <div className="bg-bg-clear w-151px">
      <h2 className="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
      <button data-act-className="shadow-outline" data-set-theme="" className="bg-green-700 focus:outline-none m-1 rounded p-2">Default</button>
      <button data-act-className="shadow-outline" data-set-theme="dark" className="bg-green-700 focus:outline-none m-1 rounded p-2">Dark</button>
      <button data-act-className="shadow-outline" data-set-theme="black" className="bg-green-700 focus:outline-none m-1 rounded p-2">Black</button>
      <button data-act-className="shadow-outline" data-set-theme="pink" className="bg-green-700 focus:outline-none m-1 rounded p-2">🌸 Pink</button>
      <button data-act-className="shadow-outline" data-set-theme="🐬" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐬 Blue</button>
      <button data-act-className="shadow-outline" data-set-theme="🐤" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐤 Yellow</button>
    </div>
  );
}

export default App;
