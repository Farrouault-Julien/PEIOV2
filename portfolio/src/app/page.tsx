"use client"
import Socials from "./components/Socials";
import HomeEtiquette from "./components/HomeEtiquette";

export default function Home() {
  return (
    <div className="layout">
      <HomeEtiquette />
      <div className="socials-position">
        <Socials />
      </div>

      <style jsx>{`
        .layout {
          position: relative;
          min-height: 100vh; /* pour un conteneur de pleine hauteur si nécessaire */
        }
        .socials-position {
          position: absolute; 
          bottom: 1rem; 
          right: 1rem;
        }
      `}</style>
    </div>
  );
}