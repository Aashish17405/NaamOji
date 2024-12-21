import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nameOji, setNameOji] = useState('');

  const emojiMap = {
    "she": '♀️',
    "shi": '♀️',
    "hill": '⛰️',
    "hil": '⛰️',
    "hash": '#️⃣',
    "ash": '#️⃣',
    "jali": '🪼',
    "jelly": '🪼',
    "jeli": '🪼',
    "gun": '🔫',
    "shit": '💩',
    "kow": '🐮',
    "kou": '🐮',
    "cow": '🐮',
    "neeru": '💧',
    "niru": '💧',
    "water": '💧',
    "yan": '☯️',
    "yinyan": '☯️',
    "kki": '🗝️',
    "ki": '🗝️',
    "key": '🗝️',
    "kee": '🗝️',
  };

  function handleSubmit() {
    let tempName = name;

    // Replace each substring with its emoji
    Object.keys(emojiMap).forEach((key) => {
      const regex = new RegExp(key, 'g'); // Create a regex to find all occurrences
      tempName = tempName.replace(regex, emojiMap[key]);
    });

    setNameOji(tempName);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='enter the name'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Get NameOji</button><br />
      {nameOji}
    </div>
  );
}

export default App;
