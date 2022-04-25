import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import pop_img4 from '../../images/pop_img4.png'
import pop_img5 from '../../images/pop_img5.png'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .title {
    width: 687px;
    height: 44px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    text-align: center;
    margin: 20px 0 0 157px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 308px;
      height: 54px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 114.4%;

      /* or 27px */
      text-align: center;

      color: #FFFFFF;
      margin: 17px 0 0 34px;
    }
  }

  .mainimg {
    max-width: 986.19px;
    max-height: 383.41px;
    margin: 80px 0 0 7px;
    @media (max-width: 480px) {
      max-width: 327px;
      max-height: 127px;
      margin: 32px 0 0 25px;
    }
  }

  .mainimg1 {
    min-width: 974.58px;
    min-height: 651.22px;
    margin: 112px 0 0 0px;
    @media (max-width: 480px) {
      min-width: 347.5px;
      min-height: 240.5px;
      max-width: 348px;
      max-height: 241px;
      margin: 36px 0 15px 14px;
    }
  }

`;

const Pop_Journey = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='title'>
                User Journey Mapping & User Flow
                </div>;
  const two = <img className="mainimg" src={pop_img4} alt="Main img"></img>;

  const three = <img className="mainimg1" src={pop_img5} alt="Main img"></img>;

  const items = [one, two, three];

  const blackBackGround = {
    background: 'black',
  }

  return (
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
  );
};

export default Pop_Journey;
