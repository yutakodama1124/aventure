"use client";

import { useEffect } from "react";
import Navigation, { useLang } from "@/components/Navigation";
import Footer from "@/components/Footer";

function ContactContent() {
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

    // Placeholder URL
    const tourGuideFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdV0JKrrpm5yk32sNAh0fP7Rx570VZo7jBWc0W412fVUtZ3ng/viewform?usp=publish-editor";
    const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSddosxwgFnNXWGdr6D2D4APOh_iP6crlXSKawGCKXxa3SeYLw/viewform?usp=dialog";

    return (
        <>
            <Navigation />

            <div className="page-header" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <span className="font-hand text-outline-circle" style={{ fontSize: '1.5rem', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                        Say Hello
                    </span>
                    <h1 style={{ marginTop: '1rem', fontSize: '3.5rem' }}>
                        {lang === "en" ? "Get in Touch" : "お問い合わせ"}
                    </h1>
                </div>
            </div>

            <section style={{ paddingTop: 0 }}>
                <div className="container">

                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

                        {/* Visitor Postcard */}
                        <div className="animate-bounce-hover" style={{
                            background: '#fff',
                            padding: '2rem',
                            border: '1px solid var(--border)',
                            boxShadow: '10px 10px 0 var(--accent)',
                            position: 'relative',
                            transform: 'rotate(-1deg)'
                        }}>
                            <div className="rounded-blob-1" style={{ width: '80px', height: '80px', background: 'var(--bg-accent)', position: 'absolute', top: '-30px', right: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                                📸
                            </div>
                            <h3 className="font-hand" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                {lang === "en" ? "For Visitors" : "訪問者の方へ"}
                            </h3>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                                {lang === "en"
                                    ? "Interested in experiencing Tokyo with local students? We'd love to show you around."
                                    : "地元の学生と一緒に東京を体験してみませんか？ぜひご案内させてください。"}
                            </p>
                            <a href={tourGuideFormUrl} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                {lang === "en" ? "Request a Guide" : "ガイドをリクエスト"}
                            </a>
                        </div>

                        {/* Student Postcard */}
                        <div className="animate-bounce-hover" style={{
                            background: '#fff',
                            padding: '2rem',
                            border: '1px solid var(--border)',
                            boxShadow: '10px 10px 0 var(--accent-secondary)',
                            position: 'relative',
                            transform: 'rotate(1deg)'
                        }}>
                            <div className="rounded-blob-2" style={{ width: '80px', height: '80px', background: 'var(--accent-tertiary)', position: 'absolute', top: '-30px', right: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                                🎒
                            </div>
                            <h3 className="font-hand" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                {lang === "en" ? "For Students" : "学生の方へ"}
                            </h3>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                                {lang === "en"
                                    ? "Want to join our team? Share your perspective and make friends from around the world."
                                    : "私たちのチームに参加しませんか？あなたの視点を共有し、世界中に友達を作りましょう。"}
                            </p>
                            <a href={volunteerFormUrl} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--accent-secondary)' }}>
                                {lang === "en" ? "Join the Squad" : "チームに参加"}
                            </a>
                        </div>

                    </div>

                    {/* General Inquiries - Letter */}
                    <div className="reveal" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                {lang === "en" ? "General Inquiries" : "その他のお問い合わせ"}
                            </h3>
                        </div>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            {lang === "en" ? "Partnerships, press, or just saying hi?" : "パートナーシップ、取材、または挨拶からでも。"}
                        </p>
                        <a href="mailto:hello@aventure.jp" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                            hello@aventure.jp
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default function ContactPage() {
    return (
        <ContactContent />
    );
}
