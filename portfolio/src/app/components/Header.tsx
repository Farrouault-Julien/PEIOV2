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

    </header>
  );
}