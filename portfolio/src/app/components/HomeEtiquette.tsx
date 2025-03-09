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
      <nav>
        <ul>
          <li><Link href="/works">works</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/contact">say hi</Link></li>
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
          height :50% ;
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

        .title {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
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
          font-size: 1rem;
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
          background-color: #d8cef6; /* Violet pâle, modifiez selon vos goûts */
        }

        .typography {
          background-color: #cff6bd; /* Vert pâle, modifiez selon vos goûts */
        }
      `}</style>
    </div>
  );
}