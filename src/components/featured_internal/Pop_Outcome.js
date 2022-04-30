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
    height: 502px;
    margin: 60px 0 0 147px;
    @media (max-width: 480px) {
        width: 332px;
        height: 494;
        margin: 7px 0 0 23px;
      }
  }

  .undersanding_heading {
    width: 68px;
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
        width: 68px;
        height: 23px;

        font-family: var(--font-mono);
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 163.4%;

        /* identical to box height, or 23px */
        letter-spacing: 0.01em;
        margin: 0 0 0 0;

        color: #979797;
    }
  }

  .understanding_text {
    width: 492px;
    height: 457px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;
    margin: 22px 0 0 0;
    color: #000000;

    @media (max-width: 480px) {
        width: 332px;
        height: 457px;

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
    height: 208px;
    margin: 78px 0 0 368px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #000000;

    @media (max-width: 480px) {
        width: 302px;
        height: 224px;
        margin: 66px 0 33px 52px; 
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
  }

`;

const Pop_Outcome = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='understanding'>
                <div className='undersanding_heading'>OUTCOME</div>
                <div className='understanding_text'>
                    Pop Dancing is an app that helps users to learn dance online, through Livestreams and
                    Video on Demand channels. It helps users find courses and lessons organised by levels
                    with timelines to facilitate their easy learning process and provides a community to
                    help users connect with people with same interests and find a community to attend
                    classes with. This platform also gives access to free and paid content so that the
                    user benefits streamlined courses with trusted trainers they feel at ease with. 
                    <br></br>
                    <br></br>
                    This project being my first design sprint was super fun and exciting. I had a
                    lot of key takeaways from this project.
                </div>
            </div>;
  const two = <div className='content'>
                <b>1. Time efficiency</b>
                <br></br>
                <br></br>
                At the beginning, 5 days seemed like a very short period of time to do a complete
                project. Following the design process in the form of a design sprint definitely
                helped to drive innovative ideas.
                <br></br>
                <br></br>
                <br></br>
                <b>2. Pursuing important problems first</b>
                <br></br>
                <br></br>
                Time limit meant reprioritization of the features. Need-to-have and
                nice-to-haves were filtered out, giving optimal results.
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

export default Pop_Outcome;
