"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navigation, { useLang } from "@/components/Navigation";
import Footer from "@/components/Footer";

function HomeContent() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <>
      <Navigation />

      {/* Hero Section - Sketch Alignment */}
      <section className="hero" style={{ paddingTop: '150px' }}>
        <div className="container" style={{ position: 'relative' }}>

          <div className="hero-split">
            <div className="hero-content reveal" style={{ zIndex: 2, position: 'relative' }}>

              {/* Sketch-style "Japan Reimagined by Youth" */}
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1 }}>
                  Japan Reimagined <br />
                  <span className="font-hand" style={{ color: 'var(--accent)', fontSize: '1.4em', display: 'block', transform: 'rotate(-2deg)' }}>
                    by Youth
                  </span>
                </h1>
                {/* Decorative Hand-drawn Circle Logo from sketch */}
                <div style={{
                  position: 'absolute', top: '-10%', right: '-10%',
                  width: '300px', height: '300px',
                  border: '6px solid var(--text-primary)', borderRadius: '50% 60% 40% 70%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: 'rotate(15deg)', opacity: 0.9, overflow: 'hidden',
                  zIndex: -1
                }} className="blob-deco">
                  <img src="/images/aventure_logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              <p className="hero-description" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                {lang === "en"
                  ? "Experience Tokyo through casual walks and conversations with Japanese students. This is not a tour, but a cultural exchange focused on everyday life, local perspectives, and human connection."
                  : "日本の学生とのカジュアルな散歩と会話を通じて東京を体験。これはツアーではなく、日常生活、地元の視点、そして人と人とのつながりに焦点を当てた文化交流です。"}
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <div className="text-outline-circle" style={{ fontSize: '1.2rem' }}>
                  <span className="font-hand">
                    {lang === "en" ? "A new way to experience Tokyo" : "東京を体験する新しい方法"}
                  </span>
                </div>
              </div>

            </div>

            {/* Right side visual - Organic Blob masking */}
            <div className="hero-visual reveal" style={{ position: 'relative', height: '500px' }}>
              <img
                src="/images/aventure_1.jpg"
                className="rounded-blob-1"
                alt="Youthful group"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  position: 'absolute', top: '0', left: '0',
                  boxShadow: '20px 20px 0 var(--accent-secondary)'
                }}
              />
              <div style={{
                position: 'absolute', bottom: '15%', right: '5%',
                width: '150px', height: '150px', background: 'var(--accent-tertiary)',
                borderRadius: '50%', zIndex: -1
              }} className="animate-wiggle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Sketch Alignment (Cluster Layout) */}
      <section className="reveal" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>

            {/* Left Text */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="font-hand text-outline-circle" style={{ fontSize: '2rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>
                  {lang === "en" ? "Why we're introducing Japan by Youth" : "若者が日本を紹介する理由"}
                </span>
              </div>
              <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {lang === "en" ? (
                  <>
                    <p style={{ marginBottom: '1.5rem' }}>Because we want to share the Tokyo we love with the world, in our own words and from our own everyday experiences.</p>
                    <p>Through conversation and cultural exchange, we communicate the city's charm as we live it.</p>
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: '1.5rem' }}>私たちが愛する東京を、私たち自身の言葉で、私たち自身の日常の体験から世界共有したいからです。</p>
                    <p>会話と文化交流を通じて、私たちが住んでいる街の魅力を伝えます。</p>
                  </>
                )}
              </div>
            </div>

            {/* Right Organic Cluster (Sketch inspired) */}
            <div className="photo-cluster">
              <div className="cluster-item" style={{ top: '10%', left: '5%', width: '45%', height: '40%', transform: 'rotate(-5deg)' }}>
                <img src="/images/aventure_2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="cluster-item" style={{ top: '20%', right: '5%', width: '45%', height: '50%', transform: 'rotate(5deg)' }}>
                <img src="/images/aventure_3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="cluster-item" style={{ bottom: '5%', left: '15%', width: '50%', height: '45%', transform: 'rotate(-2deg)', zIndex: 2 }}>
                <img src="/images/aventure_4.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Horizontal Photo Marquee (Keep!) */}
      <section style={{ padding: '2rem 0', background: 'var(--bg-primary)', overflow: 'hidden' }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Generate combined array of aventure and IMG photos */}
            {(() => {
              const aventureImgs = [1, 2, 3, 4, 5].map(i => `/images/aventure_${i}.jpg`);
              const extraImgs = Array.from({ length: 21 }, (_, i) => `/images/IMG_${5121 + i}.JPG`);
              // Combine and duplicate for smooth infinite scroll
              const allImgs = [...aventureImgs, ...extraImgs, ...aventureImgs, ...extraImgs];

              return allImgs.map((src, idx) => (
                <div className="photo-card" key={idx} style={{ '--rotation': `${idx % 2 === 0 ? 2 : -2}deg` }}>
                  <img src={src} alt="Gallery" />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Founders Message - Sketch Alignment (Text Block) */}
      <section className="reveal" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="font-hand" style={{ fontSize: '3rem' }}>
              {lang === "en" ? "Message from the Founders" : "創設者からのメッセージ"}
            </h2>
          </div>

          <div style={{ background: '#fff', padding: '3rem', borderRadius: '4px', border: '2px solid var(--text-primary)', boxShadow: '10px 10px 0 var(--text-primary)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>We are Keito Terashima & Kazushi Ishizawa, founders of Aventure.</p>
            </div>
            <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>
              {lang === "en" ? (
                <>
                  <p style={{ marginBottom: '1rem' }}>While our members are students based in Japan, we are currently attending high school overseas. Living abroad, we realized that Japan is extremely popular worldwide, yet there is a gap between how Japan is viewed overseas and how we experience it as local youngsters.</p>
                  <p style={{ marginBottom: '1rem' }}>This gap inspired us to share Japan with our own words — not as an image created by others or social media, but as something we have lived and felt personally.</p>
                  <p>Through cultural exchanges and conversations with Japanese students, we hope to communicate Japan and Tokyo from the perspectives of young people living bridging the gap between Japanese and international culture.</p>
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '1rem' }}>私たちのメンバーは日本を拠点とする学生ですが、私たち代表は現在海外の高校に通っています。海外で暮らす中で、日本が世界中で非常に人気があることに気づきましたが、海外から見た日本と私たちが体験する日本との間には、時にギャップがあることも感じました。</p>
                  <p style={{ marginBottom: '1rem' }}>このギャップが、私たちの言葉で日本を共有するきっかけとなりました。他人が作り上げたイメージとしてではなく、私たちが個人的に生き、感じてきたものとして。</p>
                  <p>文化交流と会話を通じて、文化の狭間で生きる若者の視点から、日常の日本と東京を伝えたいと願っています。</p>
                </>
              )}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="rounded-blob-2" style={{ width: '80px', height: '80px', background: 'var(--accent)', margin: '0 auto 10px' }}></div>
                <span className="font-hand">Keito</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="rounded-blob-1" style={{ width: '80px', height: '80px', background: 'var(--accent-secondary)', margin: '0 auto 10px' }}></div>
                <span className="font-hand">Kazushi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section reveal">
        <div className="container contact-content">
          <h2>{lang === "en" ? "Let's see Japan together!" : "一緒に東京を旅しよう！"}</h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdV0JKrrpm5yk32sNAh0fP7Rx570VZo7jBWc0W412fVUtZ3ng/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="contact-btn animate-bounce-hover">
            {lang === "en" ? "Book a Session" : "セッションを予約"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <HomeContent />
  );
}
