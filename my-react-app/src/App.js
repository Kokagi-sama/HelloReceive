import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await fetch('http://localhost:5000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'hello' }),
      });

      const responseData = await response.json();
      setResponse(responseData.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Front-end: 
          <p>Sending Hello Message to Backend</p>
        </h1>
        <button onClick={sendMessage}>Send "hello"</button>
        <p>Response from backend: {response}</p>
      </header>
    </div>
  );
}

export default App;
