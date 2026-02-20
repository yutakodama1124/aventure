"use client";

import { LangProvider } from "./LangContext";

export default function Providers({ children }) {
    return (
        <LangProvider>
            {children}
        </LangProvider>
    );
}
