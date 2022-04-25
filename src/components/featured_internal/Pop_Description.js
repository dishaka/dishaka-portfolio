import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import pop_des1 from '../../images/pop_des1.png';
import pop_des2 from '../../images/pop_des2.png';
import pop_des3 from '../../images/pop_des3.png'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .text1 {
    width: 570px;
    height: 368px;
    margin: 110px 0 0 39px;
    @media (max-width: 480px) {
        width: 326px;
        height: 493px;
        margin: 0 0 0 22px;
      }
  }

  .mainimg {
    max-width: 288px;
    max-height: 577.35px;
    margin: -483px 0 0 648.78px;
    @media (max-width: 480px) {
        max-width: 216px;
        max-height: 433.23px;
        margin: 30px 0 0 80px;
    }
  }

  .heading {
    width: 397px;
    height: 49px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;

    @media (max-width: 480px) {
        width: 226px;
        height: 28px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */

        color: #FFFFFF;
    }
  }

  .descrip {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    
    /* or 129% */
    margin-top: 28px;
    color: #FFFFFF;

    @media (max-width: 480px) {
        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */

        color: #FFFFFF;
    }
  }

  ul {
      margin: 16px 0 0 -13px;
      @media (max-width: 480px) {
          margin: 6px 0 0 -13px;
      }
  }

  li {
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    
    /* or 129% */
    margin: 12px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        margin: 6px 0 0 0px;
    }
  }

  .mainimg2 {
    max-width: 288px;
    max-height: 602.98px;
    @media (max-width: 480px) {
        max-width: 216px;
        max-height: 452.24;
        margin: 30px 0 0 80px;
    }
  }
  
  .text2 {
      margin: 190px 0 0 64px;
    @media (max-width: 480px) {
        width: 328px;
        height: 375px;
        margin: 76px 0 0 22px;
    }
  }

  .text3 {
    width: 397px;
    height: 318px;
    margin: 226px 0 0 39px;
    @media (max-width: 480px) {
        width: 321px;
        height: 324.7px;
        margin: 76px 0 0 29px;
    }
  }

  .heading3 {
    width: 397px;
    height: 36px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 321px;
        height: 36px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 102.4%;

        /* or 25px */

        color: #FFFFFF;
    }
  }

  .mainimg3 {
    max-width: 461.29px;
    max-height: 452px;
    margin: -379px 0 0 500px;
    @media (max-width: 480px) {
        max-width: 321px;
        max-height: 313.7px;
        margin: 62px 0 0 27px;
    }
  }

  .emg{
      margin: 102px 0 0 39px;
      padding: 0;
      display: flex;
      @media (max-width: 480px) {
          margin: 0;
          flex-direction: column-reverse;
      }
    
    b {
        font-weight: 600;
    }
  }
`;

const Pop_Description = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='text1'>
                <div className='heading'>Home Screen</div>
                <div className='descrip'>
                Key to keeping the user engaged is good and relatable content. And here that means
                video/ livestream and instructor recommendations according to the taste of
                the user.<br></br>
                And how do we do that? Data driven approach is the key.
                <ul>
                    <li>Following an <b>empirical data driven approach</b>. Hereby assuring whatever
                        is being shown on the home screen is driven by the actual data collected
                        during onboarding choices of the user, search and history too.</li>
                    <li>Use of <b>AI to power recommendation engine</b>, creating unique homepages,
                        create greater impact and reduce efforts taken by user.</li>
                    <li><b>Comprehensive product recommendation system</b>. Seeing the number of
                        people attending a particular session builds trust, and makes them
                        feel a part of the community.</li>
                    <li>Drastically <b>reducing the number of options on the homepage</b>. I have
                        mentioned three categories- Join Now (Livestreaming now), Instructors,
                        and dance categories. Having fewer choices to make will put the user
                        at ease and increase efficiency to choose.</li>
                </ul>
                </div>
                </div>;

  const two = <img className="mainimg" src={pop_des1} alt="Main img"></img>;

  const three = <div className='emg'>
                    <img className="mainimg2" src={pop_des2} alt="Main img"></img>;
                    <div className='text2'>
                    <div className='heading'>Instructor Profile</div>
                    <div className='descrip'>
                    When asked, one of the main pain points of the user was that they don’t know 
                    if the instructors online is trustworthy and worth investing in, and what if
                    their approach to dance doesn’t suit them. Hence knowing the instructor better
                    is essential.
                <ul>
                    <li><b>Bio</b> gives a little knowledge to the user to get to know about the instructor on
                        a personal and professional level, helps instilling trust.</li>
                    <li><b>Main content areas</b> the instructor offers are <b>highlighted</b> in this page to reduce
                        confusion. Category called “Training Videos” offers VOD paid and unpaid as
                        well as category “Scheduled Live” gives knowledge to the user about their
                        livestreaming schedule.</li>
                    <li>Profile Picture button showed on the top right corner shows if the instructor
                        is currently live or not, and if they have posted a story, notifying their
                        activity.</li>
                </ul>
                </div>
                </div>;
  </div>
                

const five = <div className='text3'>
                <div className='heading3'>Scheduled Livestreams</div>
                <div className='descrip'>
                This option allows the users to view livestream schedule plans of the instructor,
                so that they can plan their routines accordingly.
                <ul>
                <li><b>Integrating this page with calendar</b> is integral to give a clear understanding of
                    schedules, know the sessions overview, paid or not</li>
                <li>Instant payment option for enrolling</li>
                <li>A quick <b>view of the number of people attending</b> the livestream builds
                    trust in the user as well as makes them feel a part of the community to
                    attend classes with, socialise and share workout schedules.</li>
                <li><b>Special Gestures:</b> Double tap to record a particular clip and save broadcast
                    clips</li>
                </ul>
                </div>
                </div>; 

    const six = <img className="mainimg3" src={pop_des3} alt="Main img"></img>;

  const items = [one, two, three, five, six];

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

export default Pop_Description;
