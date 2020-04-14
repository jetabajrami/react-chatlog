import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message';

const App = () => {
  console.log(chatMessages);
  const msg = {
    "sender":"Vladimir",
    "body":"because I am what",
    "timeStamp":"2018-05-29T22:50:22+00:00"
  }

  return (
    <div id="App">
      <header>
        <h1>Chat messenger</h1>
      </header>
      <main>
        <Message message = {msg}/>
      </main>
    </div>
  );
};

export default App;
