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
      

      <style jsx>{`
        .home-etiquette {
          position: fixed;
          top: 1rem;
          left: 1rem;
          width: 25%;
          height :45% ;
          background-color: #fff;
          border: 1px solid #000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          display: flex;
          justify-content: space-between ;
          flex-direction: column;
          gap: 1rem;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo_img {
            width: 200px;
            height: auto;
        }

        .links {
            text-decoration : none;
        }

        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        nav ul li {
          font-size: 1.5rem;
        }

        .link {
            text-decoration:none;
        }

        .link:visited {
            color : black
        }
        

        .tags {
          display: flex;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.5rem;
          font-size: 0.9rem;
          border-radius: 3px;
        }

        .graphic {
          background-color: #d8cef6;
        }

        .typography {
          background-color: #cff6bd;
        }
      `}</style>
    </div>
  );
}