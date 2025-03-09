"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav className="desktop-nav">
        <ul>
          <Link href="/about"><li>About</li></Link>
          <Link href="/works"><li>Works</li></Link>
          <Link href="/contact"><li>Say Hi</li></Link>
        </ul>
      </nav>
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        &#9776;
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <button className="close-button" onClick={toggleMobileMenu}>X</button>
          <ul>
          <Link href="/about"><li>About</li></Link>
          <Link href="/works"><li>Works</li></Link>
          <Link href="/contact"><li>Say Hi</li></Link>
          </ul>
        </div>
      )}

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo img {
          width : 100px;
        }
        nav.desktop-nav ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .mobile-menu-button {
          display: none;
          font-size: 2rem;
          cursor: pointer;
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .mobile-menu-overlay ul {
          list-style: none;
          padding: 0;
          text-align: center;
        }
        .mobile-menu-overlay li {
          margin: 1rem 0;
          font-size: 1.5rem;
        }
        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          nav.desktop-nav {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}