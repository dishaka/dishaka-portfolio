import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import BackgroundOne from './background_one.png'
import CardOne from '../../../src/images/cardone.png';
import CardTwo from '../../../src/images/cardtwo.png';
import CardThree from '../../../src/images/cardthree.png';
import CardFour from '../../../src/images/cardfour.png';
import CardFive from '../../../src/images/cardfive.png';
import CardSix from '../../../src/images/cardsix.png';
import CardSeven from '../../../src/images/cardseven.png';
import CardEight from '../../../src/images/cardeight.png';
import PointsOne from '../../../src/images/herolightpointsone.png';
import PointsTwo from '../../../src/images/herolightpointstwo.png';
import PointsThree from '../../../src/images/herolightpointsthree.png';


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  color: white;
  font-family: var(--font-sans);

  .header_container {
    width: 849px;
    height: 179px;
    margin: 80px 0 0 76px;
    display: flex;
    @media (max-width: 480px) {
        flex-direction: column;
        margin: 0 0 0 22px;
        height: 326px;
    }
}

.header_container_h1 {
  width: 241px;
  height: 112px;
  left: 440px;
  top: 9025px;
  
  font-family: 'Calibre';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  
  /* or 128% */
  
  color: #FFFFFF;
    @media (max-width: 480px) {
      width: 330px;
      height: 39px;
      
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 163.4%;
      
      /* or 39px */
      
      color: #FFFFFF;
      
      
    }
}

.header_container_p {
  width: 442px;
  height: 179px;
  left: 847px;
  top: 9025px;
  
  font-family: 'Calibre';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  
  /* or 133% */
  font-feature-settings: 'cpsp' on;
  margin: 0 0 79px 166px;
  color: #FFFFFF;
    @media (max-width: 480px) {
      width: 330px;
      height: 246px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;

      /* or 133% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;
      padding: 0;
      margin: 40px 0 0 0;
    }
}

  .semi_header_light {
    width: 950px;
    height: 26px;
    left: 366px;
    top: 9316px;
    
    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 187.4%;
    
    /* or 26px */
    
    color: #FFFFFF;
      margin: 112px 0 0 2px;
      @media (max-width: 480px) {
        margin: 40px 0 0 22px;
      }
  }

  .semi_header_dark {
    width: 950px;
    height: 26px;
    left: 366px;
    top: 9316px;
    
    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 187.4%;
    
    /* or 26px */
    
    color: #FFFFFF;
      margin: 33px 0 0 2px;
      @media (max-width: 480px) {
        margin: 100px 0 0 22px;


      }
  }

  .photo_grid {
    padding: 0 0 0 0px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 18px;
    // row-gap: 60px;
    margin: 40px 0 0 0;
    @media (max-width: 480px) {
        grid-template-columns: auto auto;
        column-gap: 0px;
        margin: 0;
        width: 360px;
        row-gap: 40px;
        height: 740px;
        // margin: 40px 0 50px 0px;
      }
  }

  .flex_container{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-style: normal;
      font-family: var(--font-mono);
      font-weight: 600;
      font-size: 14px;
      line-height: 187.4%;

      /* or 26px */
      text-align: center;

      color: #C4C4C4;
      @media (max-width: 480px) {
        width: 158px;
        height: 332px;
        margin: 40px 0 0 22px;
      }
  }

  .mainimg {
      max-width: 226.9px;
      max-height: 337.21px;
      min-width: 226px;
      min-height: 337px;
      margin: 22px 0 0px 0;
      @media (max-width: 480px) {
        max-width: 157.57px;
        max-height: 232.58px;
        min-width: 157px;
        min-height: 232px;
        // margin: 0 0 0 40px;
      }
  }

  .mainimg:hover {
    // transform: scale(1.25);
    // transition: 0.6s;
    // @media (max-width: 480px) {
    //     transform: scale(1.10);
    //   }
  }

  .card_mainimg {
      min-width: 234px;
      max-width: 235px;
    //   max-height: 40px;
      // background: white;
      margin: 10px 0 0 6px;
      @media (max-width: 480px) {
          margin: 20px 0 0 7px;
          min-width: 157px;
          max-width: 157.5px;
          min-height: 55px;
          max-height: 60px;
        }
  }

  .extmar {
    width: 0;
    height: 0;
    margin: 0 0 55px 0;
  }

  .margindown {
    display: none;
    @media(max-width: 480px) {
      display: block;
      margin: 50px 0 0 0;
    }
  }
`;

const Moxie_Challenges_Cards_Design = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="header_container">
                <div className='header_container_h1'>Card Types and Designs</div>
                <div className='header_container_p'>Throughout the project, requirements changes and new constraints were uncovered.
                    Early on, I set a list of requirements which kept on having minor tweaks and
                    adjustments, so I decided to make some elements that could be shifted and moved
                    around depending on priorities.
                    <br></br>
                    <br></br> 
                    Ultimately I made 2 different layouts for card types, both the light and dark
                    mode as we were undergoing a branding refresh at the same time. I wanted to
                    keep both options open and handy in case of any quick last minute changes.</div>
            </div>;
  const two = <>
                <div className="semi_header_light">Light Mode:</div>
                    <div className="photo_grid">
                        <div className="flex_container">V1
                        <img className="mainimg" src={CardOne} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsOne} alt="Main img"></img>    
                    </div>
                    
                    <div className="flex_container">V2
                        <img className="mainimg" src={CardTwo} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsTwo} alt="Main img"></img>
                    </div>
                    
                    <div className="flex_container">V3
                        <img className="mainimg" src={CardThree} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsTwo} alt="Main img"></img>
                    </div>
                    
                    <div className="flex_container">V4
                        <img className="mainimg" src={CardFour} alt="Main img"></img>
                        {/* <img className="card_mainimg" src={CardFour} alt="Main img"></img> */}
                    </div>
                </div>

                <div className="semi_header_dark">Dark Mode:</div>
                    <div className="photo_grid">
                    <div className="flex_container">V1
                        <img className="mainimg" src={CardFive} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsOne} alt="Main img"></img>
                    </div>
                    
                    <div className="flex_container">V2
                        <img className="mainimg" src={CardSix} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsTwo} alt="Main img"></img>
                    </div>

                    <div className="flex_container">V3
                        <img className="mainimg" src={CardSeven} alt="Main img"></img>
                        <img className="card_mainimg" src={PointsThree} alt="Main img"></img>
                    </div>

                    <div className="flex_container">FINAL
                        <img className="mainimg" src={CardEight} alt="Main img"></img>
                        {/* <img className="card_mainimg" src={CardSix} alt="Main img"></img> */}
                    </div>
                    <div className='extmar'></div>
                </div>
            </>;
    
    const three = <div className='margindown'></div>

  const items = [one, two, three];

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundOne})`,
  }

  return (
    <>
    <div style={backgroundStyle}>
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
    </div>
    </>
  );
};

export default Moxie_Challenges_Cards_Design;
