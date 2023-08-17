import "./styles_q2.css";
import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const languages = ["JavaScript", "Python"];

// language context
const LanguageContext = createContext();

// Step 2: Create a Provider Component
function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) =>
      prevLanguage === languages[0] ? languages[1] : languages[0]
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function App() {
  // Wrap the MainSection component with the LanguageProvider
  return (
    <LanguageProvider>
      <MainSection />
    </LanguageProvider>
  );
}

function MainSection() {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <p id="favoriteLanguage">
        favorite programming language: {currentLanguage}
      </p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
