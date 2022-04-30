import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import pop_img3 from '../../images/pop_img3.png';
import pop_img_mob1 from '../../images/pop_img_mob1.png';
import pop_img_mob2 from '../../images/pop_img_mob2.png';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .empathy {
    width: 263px;
    height: 59px;


    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;

    /* identical to box height, or 59px */
    margin: 12px 0 0 75px;
    color: #FFFFFF;

    @media (max-width: 480px) {
      width: 175px;
      height: 39px;
      left: 22px;
      top: 2354px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 163.4%;

      /* or 39px */

      color: #FFFFFF; 
      margin: 0 0 0 22px;
    }
  }

  .content1 {
    width: 442px;
    height: 126px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    margin: -59px 0 0 482px;
    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 327px;
      height: 126px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      /* or 129% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;
      margin: 40px 0 0 22px;
    }
  }

  .contentqa {
    width: 442px;
    height: 216px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    /* or 129% */
    font-feature-settings: 'cpsp' on;
    margin: 26px 0 0 482px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 297px;
      height: 292px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      /* or 129% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;
      margin: 26px 0 0 52px;
    }
  }

  b {
    font-weight: 600;
  }

  .mainimg {
    max-width: 852.66px;
    max-height: 501.14px;
    margin: 100px 0 40px 74px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  ul {
      margin: -2px 0 0 19px;
      padding: 0 0 0 0;
  }

  li {
      margin: 0 0 -3px 0;
      padding: 0;
  }

  .mainimg_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      max-width: 326.21px;
      max-height: 410px;
      margin: 36px 0 0 25px;
    }
  }

  .mainimg_mob2 {
    display: none;
    @media (max-width: 480px) {
      display: block;
      max-width: 326px;
      max-height: 403.93px;
      margin: 34px 0 60px 25px;
    }
  }
`;

const Pop_Empathy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='empathy'>
                Empathy Mapping
                </div>;
  const two = <div className='content1'>
                Who — Who has this problem?  <br></br>
                What — What is the nature of the problem?  <br></br>
                Why — Why is the problem worth solving?  <br></br>
                Where — Where does this problem happen?  <br></br>
                <br></br>
                To help answer these questions, I made use of methods such as empathy mapping.
                </div>;

    const three = <div className='contentqa'>
                    <b>User Interview Q&A:</b>
                    <ul>
                        <li>I’d like to know if you have ever taken dance lessons before?</li>
                        <li>If you want to learn dancing how do you normally do that?</li>
                        <li>Have you ever paid for an online course before?</li>
                        <li>What motivates you to keep practicing or taking dance lessons?</li>
                        <li>Why do you want to take dance lessons?</li>
                        <li>What difficulties have you faced while looking for dance courses or online courses in general?</li>
                        <li>What features do you think will make learning /practicing dance interesting to you?</li>
                        <li>What are the dance forms/styles you would like to avail for online?</li>
                        <li>What are the platforms that you mostly use?</li>
                    </ul>
                    </div>;
  const four = <img className="mainimg" src={pop_img3} alt="Main img"></img>;

  const five = <img className="mainimg_mob" src={pop_img_mob1} alt="Main img"></img>;

  const six = <img className="mainimg_mob2" src={pop_img_mob2} alt="Main img"></img>;

  const items = [one, two, three, four, five, six];

  const whiteBackGround = {
    background: '#232323',
  }

  return (
    <div style={whiteBackGround}>
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

export default Pop_Empathy;
