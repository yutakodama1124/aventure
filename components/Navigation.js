"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangContext";

// Export useLang for backward compatibility if needed, but pages should ideally import from LangContext directly. 
// For now, re-exporting to minimize refactor churn in pages.
export { useLang };

export default function Navigation() {
    const pathname = usePathname();
    const { lang, setLang } = useLang();

    const navItems = [
        { href: "/", label: { en: "Home", jp: "ホーム" } },
        { href: "/about", label: { en: "About", jp: "私たちについて" } },
        { href: "/team", label: { en: "Team", jp: "チーム" } },
        { href: "/contact", label: { en: "Contact", jp: "お問い合わせ" } },
    ];

    return (
        <nav className="nav">
            <div className="container nav-inner">
                <Link href="/" className="logo">
                    Aventure
                </Link>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? "active" : ""}`}
                        >
                            {lang === "en" ? item.label.en : item.label.jp}
                        </Link>
                    ))}

                    <div className="lang-switch">
                        <button
                            className={`lang-btn ${lang === "en" ? "active" : ""}`}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                        <button
                            className={`lang-btn ${lang === "jp" ? "active" : ""}`}
                            onClick={() => setLang("jp")}
                        >
                            JP
                        </button>
                    </div>
                </div>

                <button className="menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
