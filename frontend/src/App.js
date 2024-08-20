// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    WebApp.ready();
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/message');
      setMessage(response.data.text);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  const handleMainButtonClick = () => {
    WebApp.showAlert(`You clicked the main button!`);
  };

  WebApp.MainButton.setText('Click me!').show().onClick(handleMainButtonClick);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram Mini App</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;