import { useRef } from 'react';

import './App.css';
import chevronDownIcon from "/assets/chevron-down.svg";
import unexpandedArrow from "/assets/chevron-right.svg";
import expandedArrow from "/assets/arrow-right.svg";

import myTravelDestinationsPreview from "/assets/my-travel-destinations.png";
import whereInTheWorld from "/assets/where-in-the-world.png";
import challengeSmartFit from "/assets/challenge-smartfit.png";
import reactFacts from "/assets/react-facts.png";
import basketballPic from "/assets/basketball.jpg";
import formulaOnePic from "/assets/formula-one.jpg";
import gamingPic from "/assets/gaming.jpg";
import githubIcon from "/assets/github.png";
import mailIcon from "/assets/mail.png";
import linkedinIcon from "/assets/linkedin.png";
import twitterIcon from "/assets/twitter.png";

function App() {
  const work = useRef(null);
  const about = useRef(null)

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className='app'>
      <nav className='navbar'>
        <h1 className='logo'>Pedro Lucena</h1>
        <div className='navbar__options'>
          <button className='navbar__button'>HOME</button>
          <button className='navbar__button' onClick={() => handleClick(work)}>WORK</button>
          <button className='navbar__button' onClick={() => handleClick(about)}>ABOUT</button>
        </div>
      </nav>

      <main className='main'>
        <section className='home'>
          <h1 className='greeting'>
            Hello, I'm Pedro,
            <span className='emphasis'> Front End Developer </span>
            specialising in <span className='emphasis'>React</span>
          </h1>
          <img className='home__icon' src={chevronDownIcon} onClick={() => handleClick(work)} />
        </section>

        <section className='work' ref={work}>
          <h2 className='works__title'>Selected <span className='emphasis'>Works</span></h2>
            <section className='project'>
              <a className='project__card' href='https://github.com/pedro772/countries' target="blank">
                <img className='project__image' src={whereInTheWorld} />
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
              <a className='project__card' href='https://github.com/pedro772/my-travel-destinations' target="blank">
                <img className='project__image' src={myTravelDestinationsPreview} />
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
          
          <section className='project'>
            <a className='project__card' href='https://github.com/pedro772/challenge-smartfit' target="blank">
              <img className='project__image' src={challengeSmartFit} />
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
            <a className='project__card' href='https://github.com/pedro772/react-facts' target="blank">
              <img className='project__image' src={reactFacts} />
            </a>
            <div className='project__info'>
              <h5 className='project__title'>REACT FACTS</h5>
              <p className='description'>
                My <span className='emphasis'>first React-made project </span>, 
                a simple landing page with some facts about react made to display a light/dark mode switch.
              </p>
              <label className='project__label'>Landing Page</label>
              <div>
                <a href='https://github.com/pedro772/react-facts' target="blank" className='project__link'>
                  View Work
                  <img className='link__icon not-expanded' src={unexpandedArrow} />
                  <img className='link__icon expanded' src={expandedArrow}/>
                </a>
              </div>
            </div>
          </section>
        </section>

        <section className='about' ref={about}>
          <div className='about__container'>
            <div className='about__info'>
              <h4 className='about__title'>A BIT ABOUT ME</h4>
              <p className='description'>
              <span className='emphasis'> </span>
                I am a self-taught Front End developer who loves
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

      <footer className='footer'>
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
