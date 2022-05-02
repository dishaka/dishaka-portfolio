import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import GridOne from '../../../src/images/herogridone.png';
import GridTwo from '../../../src/images/herogridtwo.png';
import GridThree from '../../../src/images/herogridthree.png';
import GridFour from '../../../src/images/herogridfour.png';
import GridFive from '../../../src/images/herogridfive.png';
import GridSix from '../../../src/images/herogridsix.png';
import GridSeven from '../../../src/images/herogridseven.png';
import PointsOne from '../../../src/images/pointsone.png';
import PointsTwo from '../../../src/images/pointstwo.png';
import PointsThree from '../../../src/images/pointsthree.png';
import PointsFour from '../../../src/images/pointsfour.png';
import PointsFive from '../../../src/images/pointsfive.png';
import PointsSix from '../../../src/images/pointssix.png';


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  color: white;

  .header_container {
      display: flex;
      flex-direction: row;
      width: 849px;
      height: 203px;
      margin: 58px 0 0 76px;
      @media (max-width: 480px) {
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: -9%;
      }
  }

  .headers_title {
    max-width: 100%;
      color: white;
      font-family: var(--font-sans);
      padding: 0 0 0 60px;
      font-size: var(--fz-heading);
      font-weight: bolder;
  }

  .header_container_h1 {
    width: 241px;
    height: 112px;
    left: 440px;
    top: 7313px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    
    /* or 128% */
    
    color: #FFFFFF;
      @media (max-width: 480px) {
        margin-bottom: 25px;
      }
  }

  .header_container_p {
    width: 442px;
    height: 203px;
    left: 847px;
    top: 7313px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    font-feature-settings: 'cpsp' on;
    
    color: #FFFFFF;
    margin: 0 0 0 166px;
      @media (max-width: 480px) {
        margin: 0 -30px 0 0;
        padding: 0 0 0 62px;
      }
  }

  .photo_grid {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 38px;
    row-gap: 72px;
    margin: 92px 12px 50px 12px;
    @media (max-width: 480px) {
      grid-template-columns: auto;
    }
  }

  .flex_container{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-mono);
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 187.4%;

      /* or 28px */
      text-align: center;

      color: #C4C4C4;


  }

  .flex_container_blank{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    @media (max-width: 480px) {
      display: none;
    }
}

  .mainimg {
      max-width: 293;
      max-height: 288px;
      margin: 12.46px 0 0 0;
  }

  .mainimg:hover {
    // transform: scale(1.15);
    // transition: 0.6s;
  }

  .points_mainimg {
      min-width: 300px;
      max-width: 301px;
      margin: 10px 0 0 0;
      margin: 10px 0 0 0;
      // display: none;
  }
`;

const Moxie_Challenges_Exp_Ite = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="header_container">
                <div className='header_container_h1'>Exploration and Iteration</div>
                <div className='header_container_p'>Initially I explored many different ways an attendee would be able to discover a challenge -
                    from their profile page, from the workout details page and from the home page.
                    I also explored different types of Challenge pages and card types as well as the usage of
                    filters. As a part of my process, I detailed out every single flow and weighed the pros
                    and cons of each. I started with the web flows and then accomodated in the app as well.
                    <br></br>
                    Although the most intuitive entry point was from the top navigation bar itself, we decided
                    to go for it, replacing the ‘Discover’ and ‘Browse’ CTA’s with ‘Workouts’
                    and ‘Challenges’.</div>
            </div>;
  const two = <div className="photo_grid">
                <div className="flex_container">V1
                <img className="mainimg" src={GridOne} alt="Main img"></img>
                <img className="points_mainimg" src={PointsOne} alt="Main img"></img>    
                </div>
                
                <div className="flex_container">V2
                <img className="mainimg" src={GridTwo} alt="Main img"></img>
                <img className="points_mainimg" src={PointsTwo} alt="Main img"></img>
                </div>
                
                <div className="flex_container">V3
                <img className="mainimg" src={GridThree} alt="Main img"></img>
                <img className="points_mainimg" src={PointsThree} alt="Main img"></img>
                </div>
                
                <div className="flex_container_blank"><div className="mainimg"></div></div>
                
                <div className="flex_container">V4
                <img className="mainimg" src={GridFour} alt="Main img"></img>
                <img className="points_mainimg" src={PointsFour} alt="Main img"></img>
                </div>
                
                <div className="flex_container">V5
                <img className="mainimg" src={GridFive} alt="Main img"></img>
                <img className="points_mainimg" src={PointsFive} alt="Main img"></img>
                </div>
                
                <div className="flex_container_blank"><div className="mainimg"></div></div>
                
                <div className="flex_container">V6
                <img className="mainimg" src={GridSix} alt="Main img"></img>
                <img className="points_mainimg" src={PointsSix} alt="Main img"></img>
                </div>
                
                <div className="flex_container">FINAL
                <img className="mainimg" src={GridSeven} alt="Main img"></img>
                </div>
                
              </div>;

  const items = [one, two];

  const blackBackGround = {
    background: 'black',
  }

  return (
    <>
    <div style={blackBackGround}>
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

export default Moxie_Challenges_Exp_Ite;
