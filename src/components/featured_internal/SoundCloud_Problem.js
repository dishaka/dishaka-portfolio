import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import pop_img2 from '../../images/pop_img2.png'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .understanding {
    width: 492px;
    height: 198px;
    margin: 13px 0 0 171px;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    @media (max-width: 480px) {
      width: 332px;
      height: 191px;
      margin: 8px 0 0 22px;
    }
  }

  .understanding_heading {
    width: 77px;
    height: 25px;

    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;

    /* identical to box height, or 23px */
    letter-spacing: 0.01em;

    color: #979797;

    @media (max-width: 480px) {
      width: 116px;
      height: 23px;
      
      font-family: var(--font-mono);
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22.88px;
      
      /* identical to box height, or 23px */
      letter-spacing: 0.01em;
      
      color: #979797;
    }


  }

  .understanding_text {
    width: 492px;
    height: 153px;
    margin-top: 20px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;

    color: #000000;

    @media (max-width: 480px) {
      width: 332px;
    height: 154px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    /* or 130% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    }
  }

  .content {
    width: 485px;
    height: 221px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    margin: 78px 0 19px 392px;

    @media (max-width: 480px) {
      width: 302px;
      height: 279px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      /* or 129% */
      font-feature-settings: 'cpsp' on;
      color: #000000;
      margin: 66px 0 8px 52px;
    }
  }

  b {
    font-weight: 600;
  }

  ul {
      margin: 0px 0 14px 20px;
      padding: 0 0 0 0;
      @media (max-width: 480px) {
        margin: 0 0 10px 20px;
      }
  }

  li {
      margin: 0 0 0 5px;
      padding: 0;
  }

`;

const SoundCloud_Problem = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='understanding'>
                <div className='understanding_heading'>RESEARCH</div>
                <div className='understanding_text'>Understanding what user’s motivations are and
                getting to know them better is the best place to start! Some key steps I took
                included - gathering insights, common misconceptions and designing through user empathy
                </div>
            </div>;
  const two = <div className='content'>
                I conducted interviews with users between the ages of 17-28. When I asked how they found new music, the common answer was - YouTube, Spotify and SoundCloud. Even though Spotify launched in 2019 in India, many users used Spotify with the help of APK’s, hence held a black user base when Spotify made a ‘Wild card entry’ and gained quick popularity.
                <br></br><br></br>
                <b>Understanding Problems:</b>
                <ul>
                    <li>Difficult to navigate</li>
                    <li>Complicated, difficult to comprehend</li>
                    <li>Can’t download, no offline tracks</li>
                    <li>No Podcasts</li>
                </ul>
  </div>;

  const items = [one, two];

  const whiteBackGround = {
    background: 'white',
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

export default SoundCloud_Problem;
