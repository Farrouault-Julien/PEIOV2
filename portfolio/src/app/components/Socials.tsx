"use client";

export default function Socials() {
  return (
    <div className="socials-container">
      <p>Instagram</p>
      <p>Behance</p>
      <style jsx>{`
        .socials-container {
          position: fixed; 
          bottom: 1rem;   
          right: 1rem;   
          background-color: white; /* Optionnel : pour le contraste */
          padding: 0.5rem;         /* Optionnel : pour un peu d'espace interne */
          border: 1px solid #000;  /* Optionnel : un contour */
        }
      `}</style>
    </div>
  );
}