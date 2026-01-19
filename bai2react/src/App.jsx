import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton';

function App() {
  const handleAlert = (msg) => alert(msg);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Button Component</h1>
      
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <MyButton type="primary" onClick={() => handleAlert("Bạn đã nhấn nút Primary!")}>
          Primary Button
        </MyButton>

        <MyButton type="success" onClick={() => handleAlert("Bạn đã nhấn nút Success!")}>
          Success Button
        </MyButton>

        <MyButton type="danger" onClick={() => handleAlert("Bạn đã nhấn nút Danger!")}>
          Danger Item
        </MyButton>
      </div>
    </div>
  );
}

export default App;