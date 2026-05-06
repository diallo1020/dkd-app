import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">À propos</h6>
   <p>Votre destination pour les bijoux, montres, sacs et <br />
    chaussures de luxe. Nous proposons des article <br />
     sauthentiques et élégants pour sublimer votre style.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Liens rapides</h6>
    <a className="link link-hover">Accueil</a>
    <a className="link link-hover">Nos produits</a>
    <a className="link link-hover">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <a className="link link-hover">+243 XXX XXX XXX</a>
    <a className="link link-hover"> contact@boutique.com</a>
    <a className="link link-hover"> Kinshasa, RDC</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer
