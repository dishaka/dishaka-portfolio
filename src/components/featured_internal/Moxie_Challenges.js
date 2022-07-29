import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../src/images/main_img.png';
import BackgroundOne from './background_one.png';
import styles from './Moxie_Challenges_Background.module.css';


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .Title_MoxieChallenges {
    display: flex;
    width: 1000px;
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;
    @media (max-width: 480px) {
      margin: 100px 0 0px 0;
      width: 100vw;
    }
  }

  .Title_MoxieChallenges_h1 {
    width: 158px;
    height: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 163.4%;

    /* identical to box height, or 25px */
    text-align: center;

    color: #C4C4C4;


    font-family: var(--font-mono);
    @media (max-width: 480px) {
      width: 146px;
      height: 21px;

      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 163.4%;

      /* or 21px */
      text-align: center;

      color: #C4C4C4;
      // margin: 100px 0 0px 128px;
    }
  }

  .Title_MoxieChallenges_h2 {
    width: 687px;
    height: 44px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 163.4%;

    /* or 65px */
    text-align: center;

    color: #FFFFFF;
    margin: 16px 0 0 0;

    @media (max-width: 480px) {
      width: 342px;
      height: 29px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 109.4%;

      /* or 35px */
      text-align: center;
      margin: 12px 0 0 0;
      color: #FFFFFF;
    }

  }

  .mainimg{
    min-width: 997px;
    min-height: 887px;                                        
    max-width: 998px;
    max-height: 888px;
    margin: 76px 0 0 1px;
    @media (max-width: 480px) {
      max-width: 341.76px;
      max-height: 304px;
      min-height: 303px;
      min-width: 340px;
      margin: 46px 0 0 16px;
    }
  }

  .text_holder{
    @media (max-width: 480px) {
    }
  }

  .left_text {
    width: 571px;
    height: 180px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;
    margin: 153px 0 0 24px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 330px;
      height: 235px;

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

  .right_text {
    width: 261px;
    height: 206px;
    margin: -213px 0 0 714px;
    @media (max-width: 480px) {
      margin: 64px 0 0 22px;
    }
  }

  .header {
    width: 163px;
    height: 25px;

    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;

    /* identical to box height, or 25px */
    margin: 22px 0 0 0;
    color: #C4C4C4;
    @media (max-width: 480px) {
      width: 163px;
      height: 25px;

      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 163.4%;

      /* identical to box height, or 25px */

      color: #C4C4C4;
    }
  }

  .content {
    width: 261px;
    height: 53px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;

    /* or 127% */
    font-feature-settings: 'cpsp' on;
    margin: 14px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 261px;
      height: 53px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;

      /* or 127% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;
    }
  }
`;


const Moxie_Challenges = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
              <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2022</div>
              <div className='Title_MoxieChallenges_h2'>MOXIE Challenges</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                    Providing an open and efficient marketplace is the key use case for visibility of
                    instructors and their fitness challenges, but this functionality was limited at Moxie.
                    <br></br>
                    How could we increase engagement and promote workout in form of challenges? I lead
                    this feature addition to extend our feature set and allow coaches to have more 
                    visibility.
                  </div>
                  <div className="right_text">
                    <div className='header'>MY ROLE</div>
                    <div className="content">Responsible for design discovery and ideatation, interaction design and prototype
                      for web and apps
                    </div>
                    <div className='header'>TEAM</div>
                    <div className="content">Prineel Bandelu, Director Product Design
                         <br></br>
                         Ishwarya Srinivas, Director of Product
                    </div>
                  </div>
                </div>


  const items = [one, two, three];

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 50%',
  }

  const blackBackGround = {
    background: 'black',
    backgroundPosition: '0% 50%'
  }

  return (
    <>
    <div style={blackBackGround}>
      <div className={styles.custom_background}>
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
    </>
  );
};

export default Moxie_Challenges;
