import React,{ useState, useEffect } from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experiences from './Experiences'
import Skills from './Skills'
import Navbar from './Navbar'
import LanguageChoice from './LanguageChoice'

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function App() {
  const refer = document.referrer //identifies the redirection to avoid Language Choice
  console.log(refer)
  const [lang, setLang] = useState(0)
  

  const [activeSection, setActiveSection] = useState([
    <Experiences lang={lang}/>,
    <Education lang={lang}/>,
    <Skills lang={lang}/>
  ]);

  const [index, setIndex] = useState(0);

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
  console.log(`lang is ${lang}`)
  if(lang === 0 && refer !== 'https://alisson-rodrigues-pt.netlify.app/')return <LanguageChoice setLang={setLang} />

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
      <Contact lang={lang}/>
      <footer>
        <h4>{"</> Criado por Alisson Rodrigues </>"}</h4>
      </footer>
    </main>
  );
}

export default App;