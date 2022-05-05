import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import BackgroundOne from './background_one.png';
import pop_img1 from '../../images/pop_img1.png'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .title_holder {
    display: flex;
    justify-content: center;
    width: 1000px;
    max-height: 25px;
    margin-top: 60px;
    @media (max-width: 480px) {
      max-width: 100vw;
      margin: 100px 0 0 0;
    }
  }

  .title {
    height: 21px;
    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 163.4%;

    /* or 21px */
    text-align: center;
    // margin: 0 0 0 441px;
    color: #C4C4C4; 
    @media (max-width: 480px) {
      font-family: var(--font-mono);
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 163.4%;

      /* or 21px */
      text-align: center;

      color: #C4C4C4;
    }
  }

  .project_name {
    width: 687px;
    height: 44px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 163.4%;

    /* or 65px */
    text-align: center;
    margin: 16px 0 0 157px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 218px;
      height: 44px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 163.4%;

      /* or 52px */
      text-align: center;

      color: #FFFFFF;
      margin: 4px 0 0px 79px;
    }
  }

  .mainimg {
    max-width: 949.53px;
    max-height: 608px;
    margin: 68px 0 0 25.09px;
    @media (max-width: 480px) {
      max-width: 342.37px;
      max-height: 220px;
      margin: 57px 0 0 16px;
    }
  }

  .descrip{
    width: 571px;
    height: 215px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;
    margin: 150px 0 0 24px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 330px;
      height: 243px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;

      /* or 130% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;

      margin: 64px 0 0 22px;
    }
  }

  .credits{
    margin: -179px 0 66px 714px;
    width: 261px;
    height: 142px;
    @media (max-width: 480px) {
      width: 261px;
      height: 142px;
      margin: 69px 0 17px 22px;
    }
  }

  .header {
    width: 140px;
    height: 21px;

    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;

    /* or 21px */

    color: #C4C4C4;
    
  }

  .headertext {
    width: 261px;
    height: 46px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin-top: 10px;
    margin-bottom: 22px;
    /* or 123% */
    font-feature-settings: 'cpsp' on;

    color: #FFFFFF;
  }
`;

const Pop_Dancing = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='title_holder'>
              <div className='title'>
                CASE STUDY - 2021
            </div>
            </div>
  const two = <div className='project_name' >
                  POP Dancing
  </div>;
  const three = <img className="mainimg" src={pop_img1} alt="Main img"></img>;

  const four = <div className="descrip">
                Many people want to learn skills like dancing in their free time to stay fit, as a
                passion project, for an occasion or just for fun. But they do not find the complete
                information they need easily and even if they do, its not organised and complete.
                People need a quick and easy solution to save time, learn in the comfort of their
                own home without lacking motivation to complete the classes.
              </div>

    const five = <div className='credits'>
                  <div className='header'>MY ROLE</div>
                  <div className='headertext'>A personal project, user research, information architecture and
                                              ideation, interaction design and prototype for mobile
                                              </div>
                  <div className='header'>TIME FRAME</div>
                  <div className='headertext'>5 days for the entire sprint</div>
                </div>;

  const items = [one, two, three, four, five];

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 650px',
    backgroundPosition: '0 100%'
  }

  const blackBackGround = {
    background: 'black',
  }

  return (
    <div style={blackBackGround}>
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
    </div>
  );
};

export default Pop_Dancing;
