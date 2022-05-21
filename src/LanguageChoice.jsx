import React from "react";
import {websites} from './data'

function Language({setLang, brazilFlag, mexicoFlag}) {
  const refer = document.referrer.toString()
  

  const setLanguage = (cacheName, url,num)=>{
    
    const data = new Response(JSON.stringify(url));
  

    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(num).then((cache) => {
        cache.put(cacheName, data);
      });
    }
    setLang(num);
    
  }

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

          <a href='#' onClick={()=> setLanguage("spanish",refer, 1)}>
            <img src={mexicoFlag} alt='bandera de mexico'  width='100'/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Language;
