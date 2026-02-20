"use client";

import Link from "next/link";
import { useLang } from "./Navigation";
import { useState, useEffect } from "react";

export default function Footer() {
    const { lang } = useLang();
    const [showKazushiBtn, setShowKazushiBtn] = useState(false);

    useEffect(() => {
        const handleReveal = () => setShowKazushiBtn(true);
        window.addEventListener('revealKazushiButton', handleReveal);
        return () => window.removeEventListener('revealKazushiButton', handleReveal);
    }, []);

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-logo" style={{ height: '40px', overflow: 'visible', display: 'flex', alignItems: 'center' }}>
                    <img src="/images/aventure_logo.jpg" alt="Aventure Logo" style={{ height: '40px', width: 'auto' }} />
                </div>

                <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
                    <a
                        href="https://www.instagram.com/aventure.japan?igsh=MWY1bjRsNzl5OHU4dw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.95rem',
                            color: '#666666',
                            fontWeight: '400',
                            letterSpacing: '0.3px',
                            transition: 'color 0.2s ease',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#333333'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#666666'}
                    >
                        instagram
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.95rem',
                            color: '#666666',
                            fontWeight: '400',
                            letterSpacing: '0.3px',
                            transition: 'color 0.2s ease',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#333333'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#666666'}
                    >
                        tiktok
                    </a>
                    <a
                        href="mailto:hello@aventure.jp"
                        style={{
                            fontSize: '0.95rem',
                            color: '#666666',
                            fontWeight: '400',
                            letterSpacing: '0.3px',
                            transition: 'color 0.2s ease',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#333333'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#666666'}
                    >
                        mail
                    </a>

                    {/* Secret Kazushi Easter Egg Toggle Button */}
                    {showKazushiBtn && (
                        <button
                            onClick={() => {
                                // Trigger the global ChoppedAnimation if it exists
                                const event = new CustomEvent('triggerChoppedAnim');
                                window.dispatchEvent(event);
                            }}
                            style={{
                                padding: 0, background: 'transparent', color: '#666666',
                                borderRadius: 0, fontWeight: '400', border: 'none',
                                cursor: 'pointer', fontSize: '0.95rem', textTransform: 'lowercase',
                                letterSpacing: '0.3px', transition: 'color 0.2s ease',
                                outline: 'none'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#333333'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#666666'}
                            title="Kazushi's World"
                        >
                            kazushi
                        </button>
                    )}
                </div>

                <p className="footer-text">
                    {lang === "en"
                        ? "© 2025 Aventure and Yuta Kodama. All rights reserved."
                        : "© 2025 Aventure and Yuta Kodama. All rights reserved."
                    }
                </p>
            </div>
        </footer>
    );
}