import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import BackgroundOne from './background_one.png';
import pop_img1 from '../../images/soundcloud.png';
import styles from './Moxie_Challenges_Background.module.css';

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
      line-height: 21.24px;

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
      width: 342px;
      height: 67px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 35px;

      /* or 52px */
      text-align: center;

      color: #FFFFFF;
      margin: 12px 0 0px 16px;
    }
  }

  .mainimg {
    max-width: 991.9px;
    max-height: 483px;
    margin: 68px 0 0 4px;
    @media (max-width: 480px) {
      max-width: 342px;
      max-height: 171.72px;
      margin: 46px 0 0 16px;
    }
  }

  .descrip{
    width: 571px;
    height: 150px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;
    margin: 140px 0 0 24px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 330px;
      height: 183px;

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
    margin: -121px 0 66px 714px;
    width: 261px;
    height: 142px;
    @media (max-width: 480px) {
      width: 261px;
      height: 92px;
      margin: 64px 0 28px 22px;
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
    margin-top: 14px;
    margin-bottom: 138px;
    /* or 123% */
    font-feature-settings: 'cpsp' on;

    color: #FFFFFF;
  }
`;

const SoundCloud = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='title_holder'>
              <div className='title'>
                CASE STUDY - 2020
            </div>
            </div>
  const two = <div className='project_name' >
                  SoundCloud App Re-Design
  </div>;
  const three = <img className="mainimg" src={pop_img1} alt="Main img"></img>;

  const four = <div className="descrip">
                I’ve chosen to re-design SoundCloud as this was the first ever music streaming app I
                completely fell in love with, but somehow very few friends appreciated it as much.
                Hence to get to know the issues better, through research I found the user’s habits.
              </div>

    const five = <div className='credits'>
                  <div className='header'>MY ROLE</div>
                  <div className='headertext'>A personal project, user research, information architecture
                                                and ideation, interaction design and prototype for mobile
                                              </div>
                </div>;

  const items = [one, two, three, four, five];

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 629px',
    backgroundPosition: '0 100%'
  }

  const blackBackGround = {
    background: 'black',
  }

  return (
    <div style={blackBackGround}>
          <div className={styles.custom_background_soundcloud}>
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

export default SoundCloud;
