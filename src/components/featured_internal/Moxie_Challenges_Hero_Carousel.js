import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import HeroOne from '../../../src/images/heroone.png';
import HeroTwo from '../../../src/images/herotwo.png';
import HeroThree from '../../../src/images/herothree.png';
import HeroFour from '../../../src/images/herofour.png';
import HeroFive from '../../../src/images/herofive.png';



const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  font-family: var(--font-sans);
  color: black;

  .title_Hero {
    font-size: var(--fz-heading);
    margin: 0 0 30px 0px;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .container_text_img_left {
      display: flex;
      margin: 0 0 -3% 0;
      @media (max-width: 480px) {
        flex-wrap: wrap;
        flex-direction: column;
      }
  }

  .container_text_img_right {
    display: flex;
    margin: 0 0 -3% 0;
    @media (max-width: 480px) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
}

  .container_text {
      max-width: 40%;
      font-size: var(--fz-xl);
      margin-bottom: 15%
      @media (max-width: 480px) {
        max-width: 100vw;
        padding: 0px 5% 0px 5%;
      }
  }

  .container_text_1 {
    max-width: 40%;
    font-size: var(--fz-xl);
    margin-bottom: 15%;
    padding: 0 40px 0 30px;
    max-height: 400px;
    @media (max-width: 480px) {
      max-width: 100vw;
      padding: 0px 5% 0px 5%;
      margin-top: -30px;
    }
}

  .container_text_3 {
    max-width: 40%;
    font-size: var(--fz-xl);
    margin-bottom: 15%;
    margin-top: -40px;
    padding: 55px 40px 20px 30px;
    @media (max-width: 480px) {
      max-width: 100vw;
      padding: 0px 5% 0px 5%;
      margin-top: 50px;
    }
}

  .container_text_4 {
    max-width: 40%;
    font-size: var(--fz-xl);
    margin-bottom: 15%;
    margin-top: -25px;
    padding: 75px 40px 0px 30px;
    @media (max-width: 480px) {
      max-width: 100vw;
      margin-top: 50px;
    }
}

.container_text_5 {
  max-width: 40%;
  font-size: var(--fz-xl);
  margin-bottom: 15%;
  margin-top: -25px;
  padding: 75px 40px 0px 30px;
  @media (max-width: 480px) {
    max-width: 100vw;
    margin-top: 50px;
  }
}

  .container_text_final {
    max-width: 40%;
    font-size: var(--fz-xl);
    margin-bottom: 15%;
    padding: 115px 40px 0 30px;
    @media (max-width: 480px) {
      max-width: 100vw;
    }
}

  .mainimg {
    // min-height: 345px;
    min-width: 549px;
    // max-height: 420px;
    max-width: 550px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg_1 {
    min-height: 369px;
    min-width: 561px;
    max-height: 370px;
    max-width: 562px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg_2 {
    min-height: 459px;
    min-width: 544px;
    max-height: 460px;
    max-width: 545px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg_3 {
    min-height: 430px;
    min-width: 550px;
    max-height: 431px;
    max-width: 551px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg_4 {
    min-height: 430px;
    min-width: 562px;
    max-height: 431px;
    max-width: 563px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg_5 {
    min-height: 563px;
    min-width: 547px;
    max-height: 564px;
    max-width: 548px;
    padding 25px 0 0 0;
    @media (max-width: 480px) {
      max-width: 95%;
      min-width: 49%;
      max-height: 50%;
      min-height: 49%;
      padding: 25px 0 0 5%;
    }
  }

  .mainimg:hover {
    // transform: scale(1.10);
    // transition: 0.6s;
  }

  ul {
      margin: 0 0 0 0;
      font-family: var(--font-sans);
  }

`;

const Moxie_Challenges_Hero_Carousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div></div>;
  const two = <div className="container_text_img_left">
                <div className="container_text_1">
                    <div className="title_Hero">Hero Carousel</div>
                    The central feature of this project was to allow attendees a single page where
                    they could view all the challenges available on the platform. 
                    The hero carousel is a place where we could push admin curated coach challenges
                    to the attendees - the best challenges which were in-house. This area would gain
                    the most traction as along with giving a platform to all the instructors was
                    key- first important factor was to promote the in-house instructors too.
                    <br></br>
                    <br></br>
                    <b>Solutions:</b>
                    <ul>
                        <li>Dynamic, top three challenges, admin curated, refreshed when needed</li>
                        <li>Two CTA’s - Join Challenge directed to the cart page and Learn More
                        to the challenge details page.</li>
                    </ul>
                </div>
                <img className="mainimg_1" style={{marginTop: '67px'}} src={HeroOne} alt="Main img"></img>
            </div>;
  const three = <div className="container_text_img_right" style={{marginTop: '15%'}}>
                    <img className="mainimg_2" src={HeroTwo} alt="Main img"></img>
                    <div className="container_text_3">
                        <div className="title_Hero">Jump Back In!</div>
                        The aim for this section is to help the attendees keep track of their on-going
                        challenges. A simple addition that resulted in streamlined viewing and discovery.
                        Previously, users had to go to their own profile to see their current workouts
                        and schedule.
                        <br></br>
                        <br></br>
                        <b>Solutions:</b>
                        <ul>
                        <li>Timeline counter - number of days left to track and motivate</li> 
                        <li>Visually represented progress made</li> 
                        <li>Completed challenges shown with a badge to push attendees and inspire</li> 
                        </ul>
                    </div> 
                </div>;
  const four = <div className="container_text_img_left">
                <div className="container_text_4">
                    <div className="title_Hero">You Might Like</div>
                    The logic for this section was pretty straight forward -  to show users custom
                    curated list of challenges depending on their workout history and search
                    algorithms. This new intelligent framework used AI to give users what they want.
                    <br></br>
                    <br></br>
                    <b>Solutions:</b>
                    <ul>
                    <li>Challenges by favourite coaches, workout types, and workout their friends
                        take.</li> 
                    </ul>
                </div> 
                <img className="mainimg_3" src={HeroThree} alt="Main img"></img>
                </div>;
  const five = <div className="container_text_img_right">
                    <img className="mainimg_4" src={HeroFour} alt="Main img"></img>
                    <div className="container_text_5">
                        <div className="title_Hero">Top 10 Challenges</div>
                        In order to quickly give users insight into what’s the most trending and most attended
                        challenges on the Moxie platform, we introduced this section. This made it easier for users
                        to see challenges which are most liked and preferred by majority people without searching.
                        <br></br>
                        <br></br>
                        <b>Solutions:</b>
                        <ul>
                        <li>Quick discoverability</li> 
                        <li>Increased credibility</li> 
                        </ul>
                    </div> 
                </div>;

const six = <div className="container_text_img_left">
                <div className="container_text_final">
                    <div className="title_Hero">Recently Added + Individual Types</div>
                        To help attendees be up to date with the recently added challenges on the
                        platform; as well as find challenges on the basis of their favourite
                        workout types. These carousels help our vision of discoverability on
                        the Challenges page.
                    <br></br>
                    <br></br>
                    <b>Solutions:</b>
                    <ul>
                    <li>Workout specific challenge carousels</li> 
                    <li>Directly discover the workout types preferred</li>
                    </ul>
                </div> 
                <img className="mainimg_5" src={HeroFive} alt="Main img"></img>
            </div>;

  const items = [one, two, three, four, five, six];

  const whiteBackGround = {
    background: 'white',
  }

  return (
      <>
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
    </>
  );
};

export default Moxie_Challenges_Hero_Carousel;
