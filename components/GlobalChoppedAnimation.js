"use client";

import { useEffect, useState } from "react";

// Global Funny Chopped Animation Component
export const GlobalChoppedAnimation = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleTrigger = () => {
            setShow(true);
            setTimeout(() => setShow(false), 5000);
        };
        window.addEventListener('triggerChoppedAnim', handleTrigger);
        return () => window.removeEventListener('triggerChoppedAnim', handleTrigger);
    }, []);

    if (!show) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            pointerEvents: 'none', zIndex: 99999, overflow: 'hidden'
        }}>
            <style>
                {`
            @keyframes fallAndSpin {
                0% { transform: translateY(-120vh) rotate(0deg) scale(0.5); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(120vh) rotate(720deg) scale(1.5); opacity: 0; }
            }
            @keyframes textSlam {
                0% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
                20% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            }
          `}
            </style>

            {/* The giant "CHOPPED!" text */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                fontSize: '15vw', color: 'red', fontWeight: '900', fontFamily: 'Impact, sans-serif',
                textShadow: '5px 5px 0 #000, -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000',
                animation: 'textSlam 4s ease-out forwards', display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                <div>CHOPPED!</div>
                <div style={{ fontSize: '5vw', color: 'yellow' }}>OH NOOO</div>
            </div>

            {/* Falling Kazushi heads */}
            {Array.from({ length: 40 }).map((_, i) => (
                <img
                    key={i}
                    src="/images/chopped_leader.JPG"
                    alt="Falling Head"
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}vw`,
                        width: `${Math.random() * 150 + 50}px`,
                        height: 'auto',
                        animation: `fallAndSpin ${Math.random() * 2 + 2}s linear ${Math.random() * 1}s forwards`,
                        borderRadius: '20px',
                        border: '5px solid red'
                    }}
                />
            ))}
        </div>
    );
};
