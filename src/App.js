// App.jsx
import React, {useState, useEffect} from 'react';
import './App.css';
import sound from './assets/music/music.mp3';
import hawking from './assets/steven.png';
import aboutImg from './assets/about.png';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import { useTypingEffect } from './hooks/typing-effect';
import Overlay from './components/Overlay';
import meme1 from './assets/memes/img1.png';
import meme2 from './assets/memes/img2.png';
import meme3 from './assets/memes/img3.png';

function App() {
  const text = useTypingEffect('Rover The Dog', 200);
  const contract = 'TBA';


  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <div className="insideApp">
        <Overlay playAudio={playAudio} />
        <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="mainSection">
          <div className="mainMargin">
            <div className="imgBlock">
              <img className="hawkingImg" alt="hawking" src={hawking} />
            </div>
            <div className="textBlock">
              <div className="caWidget">
                <p className="caWidgetText">CA: {contract}</p>
              </div>
              <div className="headingDiv">
                <h1 className="heading">
                  STEPHEN HAWKING <br />
                  <span className="whiteText">ISLAND PIRATE</span>
                </h1>
                <a href="#">
                  <button class="button mainButton">
                    JET THE $HAWSEX
                  </button>
                </a>
                <div className="socialsBlock">
                  <h3 className="socialsText whiteText">SOCIALS:</h3>
                  <img className="socialsImg" src={telegram} alt="telegram"/>
                  <img className="socialsImg" src={twitter} alt="twitter"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <div className="about-inside">
            <div className="textBlock">
              <h2 className="heading2">
                BREAKING NEWS:<br/>
                PHYSICIST ON SEX <br/>
                TRAFFICKER'S ISLAND
              </h2>
              <p className="bodyText">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make PageMaker including versions of Lorem Ipsum. 
              </p>
            </div>
            <div className="imgBlock">
              <img className="aboutImg" src={aboutImg} alt="STEPHEN HAWKING ON THE VACATION"/>
            </div>
          </div>
        </div>
        <div className="imgSection">
          <div className="runningTextBlock">
            <h1 className="heading runningText">
              $HAWSEX<span className="whiteText">$HAWSEX</span>$HAWSEX<span className="whiteText">$HAWSEX</span>$HAWSEX<span className="whiteText">$HAWSEX</span>$HAWSEX<span className="whiteText">$HAWSEX</span>$HAWSEX<span className="whiteText">$HAWSEX</span>
            </h1>
          </div>
          <div className="imgLayoutBlock">
            <img alt="img1" src={meme1}/>
            <img alt="img2" src={meme2}/>
            <img alt="img3" src={meme3}/>
          </div>
          <div className="socials">
            <img src={telegram} alt="telegram"/>
            <img src={twitter} alt="twitter"/>
          </div>
          <p className="rightsReserved">
            $HAWSEX ALL RIGHTS RESERVED 2024.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
