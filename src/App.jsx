import { useState } from 'react';
import { TextGenerateEffect } from "./components/TextGenerateEffect";

function App() {
  const [name, setName] = useState('');
  const [nameOji, setNameoji] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const words = 'Where your name meets creativity✨'

  const emojiMap = {
    "raja": '🤴',
    "raju": '🤴',
    "raj": '🤴',
    "krishna": '🪈',
    "krishn": '🪈',
    "three": '3️⃣',
    "thri": '3️⃣',
    "tri": '3️⃣',
    "aagh": '🔥',
    "aag": '🔥',
    "agh": '🔥',
    "ag": '🔥',
    "agni": '🔥',
    "fire": '🔥',
    "phire": '🔥',
    "nippu": '🔥',
    "nip": '🔥',
    "raag": '🎵',
    "rag": '🎵',
    "chand": '🌜',
    "chandra": '🌜',
    "moon": '🌕',
    "armour": '🛡️',
    "armar": '🛡️',
    "armer": '🛡️',
    "shy": '🙈',
    "shay": '🙈',
    "dhan": '💵',
    "money": '💵',
    "mani": '💵',
    "thin": '🥫',
    "tin": '🥫',
    "serp": '🐍',
    "nagula": '🐍',
    "naga": '🐍',
    "saamp": '🐍',
    "samp": '🐍',
    "her": '♀️',
    "kar": '🚗',
    "car": '🚗',
    "vindh": '💨',
    "vind": '💨',
    "windh": '💨',
    "wind": '💨',
    "jeeth": '🏆',
    "jeet": '🏆',
    "win": '🏆',
    "vin": '🏆',
    "run": '🏃‍♂️',
    "ran": '🏃‍♂️',
    "beer": '🍺',
    "bir": '🍺',
    "bhir": '🍺',
    "rook": '🐦‍⬛',
    "rukh": '🐦‍⬛',
    "ruk": '🐦‍⬛',
    "shith": '💩',
    "shit": '💩',
    "she": '♀️',
    "shi": '♀️',
    "shh": '🤫',
    "sh": '🤫',
    "hill": '⛰️',
    "hil": '⛰️',
    "hash": '#️⃣',
    "ash": '#️⃣',
    "jali": '🪼',
    "jelly": '🪼',
    "jeli": '🪼',
    "gun": '🔫',
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
    "why": '❓',
    "vy": '❓',
    "vai": '❓',
    "no": '🙅',
    "he": '♂️',
    "man": '👨',
    "ant": '🐜',
    "deepa":'🪔',
    "deep":'🪔',
    "diya":'🪔',
    "deeya":'🪔',
    "rani": '👑',
    "aarti": '🕯️',
    "neel": '🌊',
    "tara": '🌠',
    "lily": '🌸',
    "lilly": '🌸',
    "rose": '🌹',
    "sun": '🌞',
    "sooraj": '🌞',
    "suraj": '🌞',
    "sundhya": '🌞',
    "suriya": '🌞',
    "surya": '🌞',
    "suri": '🌞',
    "maya": '🪞',
    "om": '🕉️',
    "book": '📚',
    "day": '🌅',
    "thi":'☕',
    "ti":'☕',
    "tti":'☕',
    "eye":'👁️',
    "ai":'👁️',
    "ee":'😬',
    "aak":'🍃',
    "ak":'🍃',
    "aaku":'🍃',
    "han":'🐔',
    "hen":'🐔',
    "ek": '1️⃣',
    "do": '2️⃣',
    "teen": '3️⃣',
    "chaar": '4️⃣',
    "paanch": '5️⃣',
    "cheh": '6️⃣',
    "saat": '7️⃣',
    "sat": '7️⃣',
    "sath": '7️⃣',
    "aath": '8️⃣',
    "nou": '9️⃣',
    "rum": '🍷',
    "ram": '🍷',
    "tea": '☕',
    "ri": '🔁',
    "re": '🔁',
    "pin": '📌',
    "war": '⚔',
    "var": '⚔'
  };

  function generatenameOji() {
    let tempName = name;
    setIsGenerating(true);
    Object.keys(emojiMap).forEach((key) => {
      const regex = new RegExp(key, 'gi'); // Case insensitive
      tempName = tempName.replace(regex, emojiMap[key]);
    });
    setTimeout(() => {
      setNameoji(tempName)
      setIsGenerating(false)
    }, 500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(nameOji)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    })
    .catch((err) => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-4">
    {/* Animated background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a365d,#0f172a)]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
    </div>

    {/* Main content */}
    <div className="relative w-full max-w-sm px-10 sm:px-0 sm:max-w-md lg:max-w-lg xl:max-w-2xl">
      <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            Naam<span className="text-cyan-400">Oji</span>
          </h1>
          <TextGenerateEffect duration={2} filter={true} words={words} />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generatenameOji()}
              spellCheck="false"
              autoComplete='true'
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={generatenameOji}
              disabled={isGenerating}
              className="w-full sm:w-auto px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                'Generate'
              )}
            </button>
          </div>

          {nameOji && (
            <div className="transform transition-all duration-500 ease-out relative">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm">
                <div className="text-2xl sm:text-4xl font-semibold mb-2 relative">
                  <span
                    className={`absolute -top-5 left-1/2 transform -translate-x-1/2 text-green-500 text-sm font-medium transition-transform duration-300 ease-out ${
                      copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                  >
                    Copied!
                  </span>
                  <button onClick={handleCopy} className="relative">
                    {nameOji}
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  Your nameOji is ready to share! ✨
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;