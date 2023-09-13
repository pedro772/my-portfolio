import { useState, useEffect, useRef } from 'react';

import './App.css';
import chevronDownIcon from "/assets/chevron-down.svg";
import unexpandedArrow from "/assets/chevron-right.svg";
import expandedArrow from "/assets/arrow-right.svg";

import basketballPic from "/assets/basketball.jpg";
import formulaOnePic from "/assets/formula-one.jpg";
import gamingPic from "/assets/gaming.jpg";
import githubIcon from "/assets/github.png";
import mailIcon from "/assets/mail.png";
import linkedinIcon from "/assets/linkedin.png";
import twitterIcon from "/assets/twitter.png";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const home = useRef(null);
  const work = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: [0.1, 0.9],
    });
  
    if(home.current) {
      observer.observe(home.current);
    }
    if (work.current) {
      observer.observe(work.current);
    }
    if (about.current) {
      observer.observe(about.current);
    }
    if (contact.current) {
      observer.observe(contact.current);
    }
  
    return () => observer.disconnect();
  }, []);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  return (
    <div className='app'>
      <nav className='navbar'>
        <h1 className='logo'>Pedro Lucena</h1>
        <div className='navbar__options'>
          <button className={`navbar__button ${activeSection === 'work' ? 'active' : ''}`} onClick={() => handleClick(work)}>WORK</button>
          <button className={`navbar__button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleClick(about)}>ABOUT</button>
          <button className={`navbar__button ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleClick(contact)}>CONTACT</button>
        </div>
      </nav>

      <main className='main'>
        <section className='home' ref={home} id='home'>
          <h1 className='greeting'>
            Hello, I'm Pedro,
            <span className='emphasis'> Full Stack Developer </span>
            specialising in <span className='emphasis'>React and Spring Boot</span>
          </h1>
          <img className='home__icon bounce' src={chevronDownIcon} onClick={() => handleClick(work)} />
        </section>

        <section className='work' ref={work} id='work'>
          <h2 className='works__title'>Selected <span className='emphasis'>Works</span></h2>
            <section className='project'>
              <a className='project__card audiophile' href='https://github.com/pedro772/audiophile-ecommerce' target="blank">
              </a>
              <div className='project__info'>
                <h5 className='project__title'>AUDIOPHILE E-COMMERCE</h5>
                <p className='description'>
                  A Multi-page <span className='emphasis'>E-Commerce website</span> built with 
                  <span className='emphasis'> Next.js</span>,
                  <span className='emphasis'> React</span>,
                  <span className='emphasis'> SASS</span>, 
                  <span className='emphasis'> Typescript</span> and the 
                  <span className='emphasis'> Context API </span>
                </p>
                <label className='project__label'>Web Application</label>
                <div>
                  <a href='https://github.com/pedro772/audiophile-ecommerce' target="blank"  className='project__link'>
                    View Work
                    <img className='link__icon not-expanded' src={unexpandedArrow} />
                    <img className='link__icon expanded' src={expandedArrow} />
                  </a>
                </div>
              </div>
            </section>

            <section className='project'>
              <a className='project__card countries' href='https://github.com/pedro772/countries' target="blank">
              </a>
              <div className='project__info'>
                <h5 className='project__title'>WHERE IN THE WORLD?</h5>
                <p className='description'>
                  <span className='emphasis'>Countries </span>
                  REST API
                  <span className='emphasis'> displayer </span>
                  with Theme Switcher built with 
                  <span className='emphasis'> React</span>,
                  <span className='emphasis'> TypeScript</span>, 
                  <span className='emphasis'> Styled Components</span> and the 
                  <span className='emphasis'> Context API </span>
                </p>
                <label className='project__label'>Web Application</label>
                <div>
                  <a href='https://github.com/pedro772/countries' target="blank"  className='project__link'>
                    View Work
                    <img className='link__icon not-expanded' src={unexpandedArrow} />
                    <img className='link__icon expanded' src={expandedArrow} />
                  </a>
                </div>
              </div>
            </section>

            <section className='project'>
              <a className='project__card smartfit' href='https://github.com/pedro772/challenge-smartfit' target="blank">
              </a>
              <div className='project__info'>
                <h5 className='project__title'>SMARTFIT CHALLENGE</h5>
                <p className='description'>
                  SmartFit Gym Finder challenge built using
                  <span className='emphasis'> React</span>,
                  <span className='emphasis'> TypeScript</span> and
                  <span className='emphasis'> TailwindCSS</span>.
                </p>
                <label className='project__label'>Web Application</label>
                <div>
                  <a href='https://github.com/pedro772/challenge-smartfit' target="blank" className='project__link'>
                    View Work
                    <img className='link__icon not-expanded' src={unexpandedArrow} />
                    <img className='link__icon expanded' src={expandedArrow}/>
                  </a>
                </div>
              </div>
            </section>

            <section className='project'>
              <a className='project__card travel' href='https://github.com/pedro772/my-travel-destinations' target="blank">
              </a>
              <div className='project__info'>
                <h5 className='project__title'>MY TRAVEL DESTINATIONS</h5>
                <p className='description'>
                  A <span className='emphasis'>Travel Journal</span> CRUD application built with 
                  <span className='emphasis'> React</span>, <span className='emphasis'>JavaScript </span> 
                  and the <span className='emphasis'>BEM</span> methodology to organize CSS.
                </p>
                <label className='project__label'>Web Application</label>
                <div>
                  <a href='https://github.com/pedro772/my-travel-destinations' target="blank" className='project__link'>
                    View Work
                    <img className='link__icon not-expanded' src={unexpandedArrow} />
                    <img className='link__icon expanded' src={expandedArrow}/>
                  </a>
                </div>
              </div>
            </section>
        </section>

        <section className='about' ref={about} id='about'>
          <div className='about__container'>
            <div className='about__info'>
              <h4 className='about__title'>A BIT ABOUT ME</h4>
              <p className='description'>
              <span className='emphasis'> </span>
                I am a self-taught Full Stack Developer who loves
                <span className='emphasis'> learning new things and working on random challenges. </span>
                I'm also
                <span className='emphasis'> passionate about music</span>,
                <span className='emphasis'> games</span> and
                <span className='emphasis'> sports </span>
                specially basketball and Formula 1.
              </p>
            </div>

            <div className='about__images'>
              <div className='main__image'>
                <img className='about__image' src={basketballPic} />
              </div>
              <div className='secondary__images'>
                <img className='about__image' src={formulaOnePic} />
                <img className='about__image' src={gamingPic} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer' ref={contact} id='contact'>
        <h1 className='greeting'>Get <span className='emphasis'>in touch.</span></h1>
        
        <section className='contact__options'>
          <a href='https://linkedin.com/in/pedrolucena772/' target="blank">
            <img src={linkedinIcon} className='contact__option' />
          </a>
          <a href='mailto:plucena17230@gmail.com'>
            <img src={mailIcon} className='contact__option' />
          </a>
          <a href='https://twitter.com/plucenadev' target="blank">
            <img src={twitterIcon} className='contact__option' />
          </a>
          <a href='https://github.com/pedro772' target="blank">
            <img src={githubIcon} className='contact__option' />
          </a>
        </section>

        <label className='project__label'>Design made by <span className='emphasis'>Srinivas Design</span></label>
      </footer>
    </div>
  )
}

export default App
