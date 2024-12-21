import { useState } from 'react';

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
    "no": '🙅'
  };

  function handleSubmit() {
    let tempName = name;
    Object.keys(emojiMap).forEach((key) => {
      const regex = new RegExp(key, 'gi'); // Case insensitive
      tempName = tempName.replace(regex, emojiMap[key]);
    });

    setNameOji(tempName);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center bg-black">
        <h1 className="text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-lg">
          🌟 NameOji Generator 🌟
        </h1>
        <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-lg">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 text-lg outline-none focus:ring-4 focus:ring-pink-400"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Get NameOji
          </button>
          {nameOji && (
            <div className="mt-6 ">
              <h2 className="text-2xl font-semibold text-center text-purple-600">Your NameOji:</h2>
              <p className="mt-3 border border-gray-600 py-4 text-3xl text-center font-bold text-indigo-600">{nameOji}</p>
            </div>
          )}
        </div>
        <footer className="mt-8 mr-24 text-sm text-white/90">
          Made with ❤️ using ReactVite & TailwindCSS
        </footer>
      </div>
    </div>
  );
}

export default App;
