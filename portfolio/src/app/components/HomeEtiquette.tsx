"use client";
import Link from "next/link";


export default function HomeEtiquette() {
  return (
    <div className="home-etiquette">
      {/* Partie supérieure : logo + titre */}
      <div className="header">
      <img
            src="/logo.png"
            alt="Logo"
            className="logo_img"
          />
      </div>

      {/* Liens de navigation */}
      <nav className="links">
        <ul>
          <li><Link legacyBehavior href="/works"><a className="link">works</a></Link></li>
          <li><Link legacyBehavior href="/about"><a className="link">about</a></Link></li>
          <li><Link legacyBehavior href="/contact"><a className="link">say hi</a></Link></li>
        </ul>
      </nav>

      {/* Étiquettes colorées
      
      <div className="tags">
        <div className="tag graphic">graphic design</div>
        <div className="tag typography">typography</div>
      </div>
      
      */}
      
    </div>
  );
}