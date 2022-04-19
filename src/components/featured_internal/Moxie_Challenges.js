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
  align-items: flex-centre;
  min-height: 100vh;
  font-family: var(--font-sans);

  .Title_MoxieChallenges {
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    font-size: clamp(var(--fz-md), 5vw, var(--fz-md));
    margin: 20px;
    margin-top: 70px;
    margin-bottom: 40px;
    @media (max-width: 480px) {
      margin: 90px 0 45px 0;
    }
  }

  .Title_MoxieChallenges h1 {
    color: white;
    text-align: center;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .Title_MoxieChallenges h2 {
    color: white;
    text-align: center;
    font-family: var(--font-sans);
    font-size: var(--fz-heading);
    margin: 7px 0 0 0;
  }

  .mainimg{
    padding: 0 5%;
  }

  .text_holder{
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    color: white;
    @media (max-width: 480px) {
      flex-wrap: wrap;
      margin: -20px -110px 0 -60px;
    }
  }

  .left_text {
    font-size: var(--fz-xl);
    margin-top: 125px;
    margin-left: 2rem;
    padding-right: 80px;
  }

  .left_text h3{
    color: white;
    font-weight: lighter;
    font-family: var(--font-sans);
  }

  .right_text {
    font-family: var(--font-sans);
    font-size: var(--fz-xs);
    font-weight: lighter;
    margin-top: 150px;
    margin-left: 2rem;
    padding-right: 80px;
    min-width: 37%;
    @media (max-width: 480px) {
      margin-top: 100px;
    }
  }

  .content {
    font-size: var(--fz-xs);
    font-family: var(--font-sans);
    margin-top: 10px;
  }
`;


const Moxie_Challenges = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
                <h1>CASE STUDY - 2022</h1>
                <h2>MOXIE Challenges</h2>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                    <h3>
                    Providing and open and efficient marketplace is the key use case for visibility of
                    instructors and their fitness challenges, but this functionality was limited at Moxie.
                    <br></br>
                    How could we increase engagement and promote workout in form of challenges? I lead
                    this feature addition to extend our feature set and allow coaches to have more 
                    visibility.
                    </h3>
                  </div>
                  <div className="right_text">
                    <div>MY ROLE</div>
                    <div className="content">Responsible for design discovery and ideatation, interaction design and prototype
                      for web and apps
                    </div>
                    <br></br>
                    <div>TEAM</div>
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
