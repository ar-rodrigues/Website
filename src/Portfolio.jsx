import React, { useState } from "react";


function Portfolio() {
  const firstImg = "drakelfo-website.png";
  const secondgImg = "sites-preview.png";
  const thirdImg = "dashboard.png";
  

  return (
    <section id="portfolio" className="portfolio">
      <h3>
        Portfólio
      </h3>
    <div className="portf-list">
      <div className="portf-item">
        <h4>Ecommerce - WordPress</h4>
        <a 
          href="https://drakelfo.mx/"
          target="_blank">
            <img src={firstImg} />
        </a>
      </div>
      <div className="portf-item">
        <h4>Single Page App - React</h4>
        <a 
          href="https://alisson-rodrigues.netlify.app/"
          target="_blank">
            <img src={secondgImg} />
        </a>
      </div>
       <div className="portf-item">
        <h4>Fullstack Dashboard App - NEXT JS</h4>
        <a 
          href="https://drakelfo-dashboard.alissonrodrigu3.repl.co/dashboard"
          target="_blank">
            <img src={thirdImg} />
        </a>
      </div>
    </div>


      
    </section>
  );
}

export default Portfolio;
