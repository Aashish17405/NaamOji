import { useState } from 'react';
import { TextGenerateEffect } from "./components/TextGenerateEffect";

function App() {
  const [name, setName] = useState('');
  const [nameOji, setNameoji] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const words = 'Where your name meets creativity✨'

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

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a365d,#0f172a)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
              name<span className="text-cyan-400">Oji</span>
            </h1>
            <TextGenerateEffect duration={2} filter={false} words={words} />
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generatenameOji()}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              <button 
                onClick={generatenameOji}
                disabled={isGenerating}
                className="px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : 'Generate'}
              </button>
            </div>

            {nameOji && (
              <div className="transform transition-all duration-500 ease-out">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-semibold mb-2">{nameOji}</div>
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