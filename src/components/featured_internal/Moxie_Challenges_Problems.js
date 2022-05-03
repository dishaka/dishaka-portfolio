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
    width: 116px;
    height: 161px;
    margin: 20px 0 0 171px;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    @media (max-width: 480px) {
      width: 332px;
      height: 142px;
      margin: 7px 0 0 22px;
    }
  }

  .undersanding_heading {
    width: 116px;
    height: 23px;

    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
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
      line-height: 163.4%;
      
      /* identical to box height, or 23px */
      letter-spacing: 0.01em;
      
      color: #979797;
    }


  }

  .understanding_text {
    width: 492px;
    height: 116px;
    margin-top: 22px;
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
    height: 105px;

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
    height: 343px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    margin: 78px 0 0 392px;

    @media (max-width: 480px) {
      width: 302px;
      height: 453px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      /* or 129% */
      font-feature-settings: 'cpsp' on;
      color: #000000;
      margin: 66px 0 0 52px;
    }
  }

  b {
    font-weight: 600;
  }

  .mainimg {
    max-width: 970.83px;
    max-height: 494.33px;
    margin: 133px 0 0px 15.5px;
    padding: 0 0 0 0;
    @media (max-width: 480px) {
      max-width: 332px;
      max-height: 168px;
      margin: 43px 0 7px 22px;
    }
  }

  ul {
      margin: 0px 0 14px 20px;
      padding: 0 0 0 0;
      @media (max-width: 480px) {
        margin: 0 0 10px 20px;
      }
  }

  li {
      margin: 0;
      padding: 0;
  }


  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
`;

const Pop_Problem = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='understanding'>
                <div className='undersanding_heading'>UNDERSTANDING</div>
                <div className='understanding_text'>Defining user personality. <br></br>
                        Understanding what user’s motivations are and getting to know them better is
                        the best place to start!
                </div>
            </div>;
  const two = <div className='content'>
                <b>Key Demographic</b>
                <ul>
                    <li>People who want to learn dancing and develop it as a skill.</li>
                    <li>From 16-32 years old</li>
                    <li>Males and Females</li>
                    <li>Stay in a nuclear family</li>
                </ul>
                <b>Motivations to learn dance online:</b>
                <ul>
                    <li>Friend’s or relative’s wedding coming up, need to learn for an occasion.</li>
                    <li>Wanted to learn dance as a hobby, learning a skill and getting fit along with a buddy.</li>
                </ul>
                <b>Painpoints while learning:</b>
                <ul>
                    <li>Loose motivation as learning online can be monotonus.</li>
                    <li>No streamlined courses</li>
                    <li>Lack of trusted trainers.</li>
                </ul>
                <b>Social forces (external factors that influence decisions):</b>
                <ul>
                    <li>Ongoing pandemic making people take online courses more than ever, quick and easy way to learn a
                        skill, kill boredom and stay in shape while having fun.</li>
                </ul>
  </div>;
  const three = <img className="mainimg" src={pop_img2} alt="Main img"></img>;

  const items = [one, two, three];

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

export default Pop_Problem;
