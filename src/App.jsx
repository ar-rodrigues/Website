import React,{ useState, useEffect } from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experiences from './Experiences'
import Skills from './Skills'
import Navbar from './Navbar'
import LanguageChoice from './LanguageChoice'
import Portfolio from './Portfolio'


import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function App() {
  const mexicoFlag = "mexico-flag.png";
  const brazilFlag = "brazil-flag.png";
  
  const refer = document.referrer //identifies the redirection 
  
  const [lang, setLang] = useState(0)
  

  const [activeSection, setActiveSection] = useState([
    <Experiences lang={lang}/>,
    <Education lang={lang}/>,
    <Skills lang={lang}/>
  ]);

  const [index, setIndex] = useState(1);

  console.log(index)
  useEffect(() => {
    const lastIndex = activeSection.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, activeSection]);
  

  caches.keys().then((cache)=> setLang(cache[0]))
  
  
  if(lang != 0)return <LanguageChoice setLang={setLang} brazilFlag={brazilFlag} mexicoFlag={mexicoFlag} />

  return (
    <main>
      <Navbar setIndex={setIndex} lang={lang}/>
      <Home lang={lang}/>
      <About lang={lang}/>
      <div id="experiences" className="experiences">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <AiOutlineRight />
        </button>
        {activeSection[index]}
      </div>
      <Portfolio />
      <Contact lang={lang}/>
      <footer>
        <div>
          <a href='https://alisson-rodrigues-pt.netlify.app/'>
            <img src={brazilFlag} height="25" />
          </a>
          <a href='https://alisson-rodrigues.netlify.app/'>
            <img src={mexicoFlag} height="25" />
          </a>
        </div>
        <h4>{"</> Creado por Alisson Rodrigues </>"}</h4>
      </footer>
    </main>
  );
}

export default App;