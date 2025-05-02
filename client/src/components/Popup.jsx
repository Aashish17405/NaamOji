import React, { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [naamOji, setNaamOji] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // console.log(`${import.meta.env.VITE_BACKEND_URL}`)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000' }/receive-naamoji`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, naamOji }),
      });

      if (response.ok) {
        setMessage("Thanks for your feedback! We'll work on making it better ✨");
        setNaamOji('');
        setName('');
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Unable to submit feedback. Please check your connection.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm sm:text-base text-gray-400 hover:text-cyan-400 hover:underline transition-colors duration-300"
      >
        Not impressed with your NaamOji?
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Animated Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out rounded-2xl"
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          />

          {/* Modal */}
          <div 
            className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-lg transform transition-all duration-300 ease-out"
            style={{
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            <div className="backdrop-blur-xl bg-slate-900/100 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Send us your Naam<span className="text-cyan-400">Oji</span>
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  spellCheck="false"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />

                <input
                  type="text"
                  value={naamOji}
                  onChange={(e) => setNaamOji(e.target.value)}
                  placeholder="Enter your NaamOji here"
                  required
                  spellCheck="false"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />

                {message && (
                  <p className={`text-xs sm:text-sm ${
                    message.includes('Thanks') ? 'text-green-500' : 'text-red-400'
                  }`}>
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-cyan-500 text-sm sm:text-base text-white rounded-xl hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mx-auto" viewBox="0 0 24 24">
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
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Popup;