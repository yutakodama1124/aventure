"use client";

import { useEffect } from "react";
import Navigation, { useLang } from "@/components/Navigation";
import Footer from "@/components/Footer";

function AboutContent() {
    const { lang } = useLang();

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

        document.querySelectorAll(".reveal").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const content = {
        en: {
            intro: "Aventure is a student-led cultural exchange initiative.",
            members: "Created by young people who want to share Japan with the world in a more honest and personal way.",
            realization: "Living abroad, we realized that Japan is extremely popular worldwide. Yet, there is a gap between how Japan is imagined overseas and how we experience it in daily life.",
            starting: "This realization became the starting point of Aventure.",
            approach: "Rather than relying on guidebooks, we communicate Japan as we know it — through everyday moments and personal perspectives.",
            notTour: "Aventure is not a sightseeing service. It is a volunteer-based cultural exchange centered on human connection.",
            experience: "Walking together, talking, and sharing time. No fixed schedules, just natural exchange.",
            meaning: "Sharing Japan means communicating how it feels to live here. We hope to bridge cultural gaps and create genuine connections.",
            belief: "We believe the most meaningful way to understand a country is through its people."
        },
        jp: {
            intro: "Aventureは、学生主導の文化交流イニシアチブです。",
            members: "もっと素直で個人的な方法で日本を世界と共有したい若者によって作られました。",
            realization: "海外で生活する中で、日本が世界中で非常に人気があることに気づきました。しかし、海外でイメージされる日本と、私たちが日常で体験する日本との間にはギャップがあります。",
            starting: "その気づきが、Aventureの出発点となりました。",
            approach: "ガイドブックに頼るのではなく、私たちが知っている日本を、日常の瞬間と個人的な視点を通して伝えます。",
            notTour: "Aventureは観光サービスではありません。人間関係を中心としたボランティアベースの文化交流です。",
            experience: "一緒に歩き、話し、時間を共有する。決まったスケジュールはなく、自然な交流だけ。",
            meaning: "日本を共有するということは、ここに住む感覚を伝えることです。文化的なギャップを埋め、本物のつながりを作ることを願っています。",
            belief: "国を理解する最も意味のある方法は、その国の人々を通してだと信じています。"
        }
    };

    const t = content[lang];

    return (
        <>
            <Navigation />

            <div className="page-header" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <span className="font-hand" style={{ fontSize: '1.5rem', color: 'var(--accent)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                        About Us
                    </span>
                    <h1 style={{ marginTop: '1rem', fontSize: '3.5rem' }}>
                        {lang === "en" ? "Our Story" : "私たちについて"}
                    </h1>
                </div>
            </div>

            {/* Intro Section - Split with Text Left, Photo Right */}
            <section style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div className="reveal">
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', lineHeight: 1.4 }}>
                                {t.intro} <br />
                                <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>{t.members}</span>
                            </p>
                            <div className="text-outline-circle" style={{ marginTop: '1rem' }}>
                                <span className="font-hand" style={{ fontSize: '1.2rem' }}>Based in Tokyo</span>
                            </div>
                        </div>
                        <div className="reveal" style={{ position: 'relative', height: '400px' }}>
                            {/* Single strong image with 'tape' look */}
                            <div style={{
                                position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
                                background: '#fff', padding: '10px 10px 40px 10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transform: 'rotate(2deg)'
                            }}>
                                <img src="/images/aventure_1.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '30px', background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(0,0,0,0.1)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Realization - Reverse Split */}
            <section className="reveal" style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
                        <div className="photo-cluster" style={{ height: '400px' }}>
                            <div className="cluster-item" style={{ top: '10%', left: '10%', width: '50%', height: '60%', transform: 'rotate(-5deg)' }}>
                                <img src="/images/aventure_5.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="cluster-item" style={{ bottom: '10%', right: '10%', width: '50%', height: '50%', transform: 'rotate(5deg)', zIndex: 2 }}>
                                <img src="/images/aventure_3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-hand" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--accent)' }}>
                                {lang === "en" ? "The Realization" : "気づき"}
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                {t.realization}
                            </p>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {t.starting}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Polaroid Cards */}
            <section className="reveal">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>{lang === "en" ? "What We Value" : "大切にしていること"}</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Card 1 */}
                        <div style={{ background: '#fff', padding: '1rem 1rem 3rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transform: 'rotate(-1deg)' }}>
                            <div style={{ height: '200px', background: 'var(--bg-accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '4rem' }}>🚶</span>
                            </div>
                            <h3 className="font-hand" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>No Scripts</h3>
                            <p>{t.approach}</p>
                        </div>

                        {/* Card 2 */}
                        <div style={{ background: '#fff', padding: '1rem 1rem 3rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transform: 'rotate(1deg)' }}>
                            <div style={{ height: '200px', background: 'var(--bg-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '4rem' }}>🤝</span>
                            </div>
                            <h3 className="font-hand" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent)' }}>Real Connection</h3>
                            <p>{t.notTour}</p>
                        </div>

                        {/* Card 3 */}
                        <div style={{ background: '#fff', padding: '1rem 1rem 3rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transform: 'rotate(-1deg)' }}>
                            <div style={{ height: '200px', background: 'var(--accent-tertiary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '4rem' }}>🌏</span>
                            </div>
                            <h3 className="font-hand" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Sharing Life</h3>
                            <p>{t.meaning}</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default function AboutPage() {
    return (
        <AboutContent />
    );
}
