import React, { useState } from "react";


function Portfolio() {
  const firstImg = "tugueder_v2.png";
  const secondgImg = "sites-preview.png";
  

  return (
    <section id="portfolio" className="portfolio">
      <h3>
        Portfólio
      </h3>
    <div className="portf-list">
      <div className="portf-item">
        <h4>Ecommerce - WordPress</h4>
        <a 
          href="https://tugueder.epizy.com/"
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
    </div>


      
    </section>
  );
}

export default Portfolio;
