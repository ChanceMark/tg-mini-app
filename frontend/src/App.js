// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMessage();
    WebApp.ready();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/message');
      const data = await response.data;
      setMessage(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  const handleMainButtonClick = () => {
    WebApp.showAlert(`You clicked the main button!`);
  };

  WebApp.MainButton.setText('Click me!').show().onClick(handleMainButtonClick);

  console.log(message);

  if (message == '') {
    return(
      <div className="App">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram Mini App</h1>
        {/* <p>{message}</p> */}
        <h2>Product List</h2>
        <ul>
          {message.map(product => (
              <li key={product.ID}>
                {product.Name} - ${product.Price}
              </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;