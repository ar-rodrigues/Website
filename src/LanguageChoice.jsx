import React from "react";
import {websites} from './data'

function Language({setLang}) {
  const spanishFlag = "spanish-flag.png";
  const brazilFlag = "brazil-flag.png";

  return (
    <header
    className="language"
    >
      <div className='flag-box'>
        <h3>Idioma</h3>
        <div>
          <a href='https://alisson-rodrigues-pt.netlify.app/' >
            <img src={brazilFlag} alt='bandeira do brasil'    width='100'/>
          </a>

          <a href='#' onClick={()=>setLang(1)}>
            <img src={spanishFlag} alt='bandera de españa'  width='100'/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Language;
