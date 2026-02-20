"use client";

import { useEffect, useState } from "react";
import Navigation, { useLang } from "@/components/Navigation";
import Footer from "@/components/Footer";

// Funny Chopped Animation Component
const ChoppedAnimation = () => {
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            pointerEvents: 'none', zIndex: 9999, overflow: 'hidden'
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
                    0% { transform: scale(5); opacity: 0; }
                    20% { transform: scale(1); opacity: 1; }
                    80% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(0); opacity: 0; }
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

function TeamContent() {
    const { lang } = useLang();
    const [showKazushiLinks, setShowKazushiLinks] = useState(false);
    const [showChoppedAnimation, setShowChoppedAnimation] = useState(false);

    const triggerChoppedAnimation = () => {
        setShowChoppedAnimation(true);
        // Hide after animation finishes (5s max)
        setTimeout(() => setShowChoppedAnimation(false), 5000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const presidents = [
        {
            nameEn: "Keito Terashima",
            nameJp: "Keito Terashima",
            role: "Co-Founder",
            bioEn: "Connecting cultures through shared experience.",
            bioJp: "共有された体験を通じて文化をつなぐ。",
            color: "var(--accent)",
            image: "/images/keito.jpg"
        },
        {
            nameEn: "Kazushi Izawa",
            nameJp: "Kazushi Izawa",
            role: "Co-Founder",
            bioEn: "Believing in the power of real conversation.",
            bioJp: "本当の会話の力を信じています。",
            color: "var(--accent-secondary)",
            image: "/images/chopped_leader.jpg"
        },
    ];

    const members = [
        { nameEn: "Shota Miyamoto", nameJp: "Shota Miyamoto", image: "/images/chopped_1.jpg" },
        { nameEn: "Daiki Mihara", nameJp: "Daiki Mihara", image: "/images/chopped_2.jpg" },
        { nameEn: "Yuji Shimomoto", nameJp: "Yuji Shimomoto", image: "/images/gay.jpg" },
        { nameEn: "Kou Shimada", nameJp: "Kou Shimada", image: "/images/thickbrows.jpg" },
    ];

    return (
        <>
            {showChoppedAnimation && <ChoppedAnimation />}
            <Navigation />

            <div className="page-header" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <span className="font-hand" style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', transform: 'rotate(2deg)', display: 'inline-block' }}>
                        The Squad
                    </span>
                    <h1 style={{ marginTop: '1rem', fontSize: '3.5rem' }}>
                        {lang === "en" ? "Our People" : "メンバー"}
                    </h1>
                </div>
            </div>

            {/* Presidents Section - Large Polaroids */}
            <section className="presidents-section">
                <div className="container">
                    <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 className="font-hand" style={{ fontSize: '2.5rem' }}>{lang === "en" ? "Founders" : "代表"}</h2>
                    </div>

                    <div className="presidents-grid reveal-stagger" style={{ gap: '3rem' }}>
                        {presidents.map((president, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    if (president.nameEn === "Kazushi Izawa") {
                                        window.dispatchEvent(new CustomEvent('revealKazushiButton'));
                                    }
                                }}
                                style={{
                                    background: '#fff', padding: '15px 15px 60px 15px',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                    transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                                    transition: 'transform 0.3s ease',
                                    cursor: president.nameEn === "Kazushi Izawa" ? 'pointer' : 'default'
                                }}
                                className="animate-bounce-hover"
                            >
                                <div style={{
                                    height: '300px', background: 'var(--bg-secondary)',
                                    marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {/* Placeholder Image */}
                                    <img src={president.image} alt={lang === "en" ? president.nameEn : president.nameJp} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 className="font-hand" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                        {lang === "en" ? president.nameEn : president.nameJp}
                                    </h3>
                                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: president.color }}>{president.role}</div>
                                    <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                        "{lang === "en" ? president.bioEn : president.bioJp}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Members Section - Masonry Polaroids */}
            <section>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="text-outline-circle">
                            <h2 style={{ margin: 0 }}>{lang === "en" ? "Volunteers" : "ボランティア"}</h2>
                        </div>
                        <p style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0' }}>
                            {lang === "en"
                                ? "Japanese students sharing their everyday Tokyo."
                                : "日常の東京を共有する学生たち。"}
                        </p>
                    </div>

                    <div style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '6rem'
                    }} className="reveal-stagger">
                        {members.map((member, index) => (
                            <div key={index} style={{
                                flex: '0 0 220px',
                                background: '#fff', padding: '10px 10px 40px 10px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                transform: `rotate(${index % 2 === 0 ? '-1.5deg' : '1.5deg'})`,
                                transition: 'all 0.3s ease'
                            }} className="animate-bounce-hover">
                                <div style={{
                                    height: '220px', background: 'var(--bg-primary)',
                                    marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <img src={member.image} alt={member.nameEn} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div className="font-hand" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                                        {lang === "en" ? member.nameEn : member.nameJp}
                                    </div>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>STAR GUIDE</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Join CTA */}
            <section className="contact-section reveal">
                <div className="container contact-content">
                    <h2 className="font-hand" style={{ fontSize: '3rem', marginBottom: '2rem' }}>{lang === "en" ? "Join the Family?" : "一緒に活動しませんか？"}</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        {lang === "en"
                            ? "Looking for students who want to share their unique view of Japan."
                            : "独自の視点で日本を共有したい学生を募集しています。"}
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddosxwgFnNXWGdr6D2D4APOh_iP6crlXSKawGCKXxa3SeYLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ background: 'var(--accent-secondary)' }}>
                        {lang === "en" ? "Join the Team" : "チームに参加"}
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default function TeamPage() {
    return (
        <TeamContent />
    );
}

