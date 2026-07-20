import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode, MdVpnKey, MdCheckCircle, MdCancel } from 'react-icons/md';

export const Navbar = ({ theme, toggleTheme, apiKey, setApiKey }) => {
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);

  const handleSaveKey = (e) => {
    e.preventDefault();
    setApiKey(tempKey.trim());
    setShowKeyInput(false);
  };

  const handleClearKey = () => {
    setApiKey('');
    setTempKey('');
    setShowKeyInput(false);
  };

  return (
    <nav className="glass-nav px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-extrabold text-xl shadow-sm">
          AR
        </div>
        <div>
          <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            AI Resume Analyzer
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs bg-card text-text px-2 py-0.5 rounded-full font-semibold">
            v1.0.0
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* API Key Manager */}
        <div className="relative">
          <button
            onClick={() => setShowKeyInput(!showKeyInput)}
            className={`flex items-center space-x-2 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-300 ${
              apiKey
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                : 'bg-[rgba(166,124,82,0.08)] text-text border border-border'
            }`}
          >
            <MdVpnKey className="text-sm" />
            <span className="hidden md:inline">
              {apiKey ? 'API Key Configured' : 'Set Gemini API Key'}
            </span>
            <span className="md:hidden">
              {apiKey ? 'Key Set' : 'Set Key'}
            </span>
          </button>

          {showKeyInput && (
            <div className="absolute right-0 mt-3 w-80 p-5 rounded-2xl glass-card border border-border shadow-2xl z-50 animate-float">
              <h3 className="text-sm font-bold mb-3 text-text flex items-center space-x-2">
                <MdVpnKey className="text-primary text-base" />
                <span>Configure Gemini API Key</span>
              </h3>
              <p className="text-[11px] text-[rgba(90,70,50,0.7)] mb-4 leading-relaxed">
                The key is saved solely in-memory inside the browser and is never uploaded anywhere except to Google's Gemini servers directly.
              </p>
              <form onSubmit={handleSaveKey} className="space-y-3">
                <input
                  type="password"
                  placeholder="Paste your AIzaSy... API Key"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 text-text"
                  required
                />
                <div className="flex space-x-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 text-xs py-2 bg-primary hover:brightness-95 text-white rounded-lg font-semibold transition"
                  >
                    Save Key
                  </button>
                  {apiKey && (
                    <button
                      type="button"
                      onClick={handleClearKey}
                      className="text-xs px-3 py-2 bg-[rgba(220,38,38,0.06)] hover:bg-[rgba(220,38,38,0.1)] text-red-600 rounded-lg font-semibold transition"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowKeyInput(false)}
                    className="text-xs px-3 py-2 bg-card hover:bg-[rgba(0,0,0,0.04)] text-text rounded-lg transition"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          className="p-2.5 rounded-xl bg-card border border-border text-text transition-all duration-300"
          aria-label="Theme (light)"
        >
          <MdOutlineLightMode className="text-lg" />
        </button>
      </div>
    </nav>
  );
};
