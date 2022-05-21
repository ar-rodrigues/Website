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
          <a href='#' onClick={()=> setLanguage("portuguese",refer, 0)}>
            <img src={brazilFlag} alt='portugues'    height='100'/>
          </a>

          <a href='https://alisson-rodrigues.netlify.app/'>
            <img src={mexicoFlag} alt='español'  height='100'/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Language;
