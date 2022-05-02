import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import BackgroundOne from './background_one.png';
import Moxie_Challenges_Photo2 from '../../../src/images/Moxie_Challenges_photo2.png';
import styles from './Moxie_Challenges_Background.module.css';


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  color: white;

  .find_challenges_title{
    width: 475px;
    height: 44px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;

    /* or 59px */
    text-align: center;
    margin: 35px 0 0 263px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      margin: -20% 5% 0 5%;
      text-align: center;
    }
  }

  .find_challeneges_body {
    width: 687px;
    height: 104px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    text-align: center;
    font-feature-settings: 'cpsp' on;
    
    color: #FFFFFF;
    margin: 56px 0 0 157px;    
    text-align: center;
      @media (max-width: 480px) {
        margin: 5% 5% 0 5%;
        padding: 0 0 0 0;
      }
  }

  .mainimg{
    min-width: 995px;
    min-height: 644px;
    margin: 80px 0 50px 2.5px;
    @media (max-width: 480px) {
      margin: 10% 0% 0 5%;
      padding: 0 10% 0 0;
      max-width: 428px;
      max-height: 342px;
    }
}
  }

`;

const Moxie_Challenges_Find_Challenges = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="find_challenges_title">One Place to Find All Challenges!</div>;
  const two = <div className="find_challeneges_body">We had a singular message to drive home: Moxie a One Stop Shop for all kinds of
      workouts and is a community in itself where you can go do group challenges of your liking.
      <br></br>
      This added marketplace for Challenges exclusive feature helped us to scale Challenges and place
      the primary focus on discoverability and group features. We placed the top nav bar as the primary
      focus area and added several other carousels curated for the attendees according to their likings.
      </div>;
  const three = <img className="mainimg" src={Moxie_Challenges_Photo2} alt="Main img"></img>;;

  const items = [one, two, three];

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundOne})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 90%',
  }

  const whiteBackGround = {
    background: 'white',
    // backgroundPosition: '0% 50%'
  }

  return (
      <>
      <div style={whiteBackGround}>
      <div className={styles.custom_background_challenges}>
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

export default Moxie_Challenges_Find_Challenges;
