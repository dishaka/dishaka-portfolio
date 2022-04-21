import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import POP from '../../../src/images/POP.png';
import Dancing from '../../../src/images/Dancing.png';
import Ligntning from '../../../src/images/Ligntning.png';
import EmptyB from '../../../src/images/emptyboom.png';
import FullB from '../../../src/images/fullboom.png';
import Pop_Bar from '../../../src/images/pop_barcode.png';
import Pop_Down from '../../../src/images/pop_downarrow.png';
import Group41 from '../../../src/images/Group 41.png';
import Group42 from '../../../src/images/Group 42.png';
import Group43 from '../../../src/images/Group 43.png';
import Group45 from '../../../src/images/Group 45.png';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--black);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .parent_div {
    position: relative;
  }

  .mainimg_pop {
      position: absolute;
      top: 271px;
      left: 429px;
    max-width: 385px;
    max-height: 121px;
  }

  .mainimg_dancing {
    position: absolute;
    top: 424px;
    left: 429px;
    max-width: 770px;
    max-height: 174px;
  }

  .lightning {
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 18px;
      position: absolute;
      top: 265px;
      left: 875px;
  }

  .ligntning_img {
      max-width: 96px;
      max-height: 127px;
  }

  .emptyb_img {
      position: absolute;
      max-width: 72px;
      max-height: 60.5px;
      left: 276px;
      top: 180px;
  }

  .fullb_img {
    position: absolute;
    max-width: 72px;
    max-height: 60.5px;
    left: 173px;
    top: 180px;
  }

  .popbar_img {
    position: absolute;
    max-width: 265px;
    max-height: 267px;
    left: 1386px;
    top: 195px;
  }

  .down_arrow{
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 62.5px;
    position: absolute;
    top: 717px;
    left: 445.5px;
  }

  .down_arrow_img {
      max-width: 82px;
      max-height: 123px;
  }

  .infobox {
    position: absolute;
    top: 673px;
    left: 767px;
    width: 972px;
    height: 210px;
    border: 2px solid #212121;
    box-sizing: border-box;
    border-radius: 104px;
  }

  .group41 {
    position: absolute;
    width: 195px;
    height: 123.5px;
    left: 856px;
    top: 714px;    
  }

  .group42 {
    position: absolute;
    width: 45.95px;
    height: 34.98px;
    left: 881px;
    top: 756px;
  }

  .group43 {
    position: absolute;
    width: 45.85px;
    height: 33.93px;
    left: 974px;
    top: 745px;
  }

  .group45 {
    position: absolute;
    width: 119px;
    height: 26px;
    left: 890px;
    top: 756px;    
  }

  .infotext {
    position: absolute;
    width: 575px;
    height: 266px;
    left: 1103px;
    top: 718px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -0.015em;
    font-feature-settings: 'cpsp' on;
    color: #212121;
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Pop_Dancing = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div>
                <img className="mainimg_pop" src={POP} alt="Main img"></img>
                <img className="mainimg_dancing" src={Dancing} alt="Main img"></img>
                <div className="lightning">
                    <img className="ligntning_img" src={Ligntning} alt="Main img"></img>
                    <img className="ligntning_img" src={Ligntning} alt="Main img"></img>
                    <img className="ligntning_img" src={Ligntning} alt="Main img"></img>
                </div>
                <img className="emptyb_img" src={EmptyB} alt="Main img"></img>
                <img className="fullb_img" src={FullB} alt="Main img"></img>
                <img className="popbar_img" src={Pop_Bar} alt="Main img"></img>
                <div className="down_arrow">
                    <img className="down_arrow_img" src={Pop_Down} alt="Main img"></img>
                    <img className="down_arrow_img" src={Pop_Down} alt="Main img"></img>
                </div>

                <div className="infobox"></div>
                <img className="group41" src={Group41} alt="Main img"></img>
                <img className="group42" src={Group42} alt="Main img"></img>
                <img className="group43" src={Group43} alt="Main img"></img>
                <img className="group45" src={Group45} alt="Main img"></img>
                <div className="infotext">Learn dance online through livestreams and video on demand channels, easy
                    streamlined courses with trainers you trust!</div>
                
            </div>

  const items = [one];

  const greyBackGround = {
    background: '#E5E5E5',
  }

  return (
    <div style={greyBackGround}> 
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
  );
};

export default Pop_Dancing;
