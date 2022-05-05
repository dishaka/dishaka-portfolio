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
    width: 261px;
    height: 49px;
    left: 365px;
    top: 5280px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 163.4%;

    /* or 59px */

    color: #000000;
    margin: 80px 0 28px 1px;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .title_Hero1 {
    width: 218.15px;
    height: 49px;
    left: 365px;
    top: 5280px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 163.4%;

    /* or 59px */

    color: #000000;
    margin: 0px 0 28px 0px;

    @media (max-width: 480px) {
      margin: 0 0 0px 0px;
    }
  }

  .title_Hero_final {
    width: 417px;
    height: 91px;
    left: 365px;
    top: 5280px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 46.94px;

    /* or 59px */

    color: #000000;
    margin: 0px 0 28px 1px;

    @media (max-width: 480px) {
      margin: -76px 0 0px 0px;
      width: 340px;
      height: 39px;
      left: 22px;
      top: 5378px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 163.4%;

      /* or 39px */

      color: #000000;
    }
  }

  .container_text_img_left {
      display: flex;
      @media (max-width: 480px) {
        height: 630px;
        width: 360px;
        margin: -66px 0 0 0px;
      }
  }

  .container_text_img_left1 {
    display: flex;
    @media (max-width: 480px) {
      height: 630px;
      width: 330px;
      margin: 188px 0 0 22px;
    }
  }

  .container_text_img_right {
    display: flex;
    margin: 180px 0 0 0;
    @media (max-width: 480px) {
      margin: 0;
      height: 489px;
      // margin: 66px 0 0 0;
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
    width: 402px;
    height: 377px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */

    color: #000000;
    margin: 28px 0 0 1px;
    @media (max-width: 480px) {
      width: 330px;
      padding: 0;
      margin: 0 0 0 22px;
      margin-top: -30px;
    }
}

  .container_text_3 {
    width: 410px;
    height: 308px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */
    margin: 81px 0 0 32px;
    color: #000000;
    @media (max-width: 480px) {
      margin: 66px 0 0 22px;
      height: 612px;
      width: 330px;
    }
}

  .container_text_4 {
    width: 406px;
    height: 243px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */
    margin: 180px 0 0 1px;
    color: #000000;
    @media (max-width: 480px) {
      max-width: 100vw;
      margin: 100px 0 0 0px;
    }
}

.container_text_5 {
  width: 406px;
  height: 255px;

  font-family: 'Calibre';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  /* or 133% */

  color: #000000;
  margin: -7px 0 0 32px;
  @media (max-width: 480px) {
    margin: 88px 0 0 22px;
    height: 569px;
    width: 330px;
  }
}

  .container_text_final {
    width: 417px;
    height: 298px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */

    color: #000000;
    margin: 300px 0 0 1px;
    @media (max-width: 480px) {
      width: 330px;

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
    max-width: 562.44px;
    max-height: 346px;
    margin: 87px 0 0 32px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_1_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      max-width: 330px;
      max-height: 203px;
      margin: 20px 0 40px 0;
    }
  }

  .mainimg_2 {
    max-width: 556px;
    max-height: 469.28px;
    margin: 0 0px 0 1px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_2_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      width: 330px;
      height: 278px;
      margin: 40px 0 40px 0px;
    }
  }

  .mainimg_3 {
    max-width: 560px;
    max-height: 438.04px;
    margin: 180px 0 0 32px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_3_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      width: 330px;
      height: 258.34px; 
      margin: 20px 0 40px 0;
    }
  }

  .mainimg_4 {
    max-width: 560px;
    max-height: 428.7px;
    width: 180px 0 0 1px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_4_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      width: 330px;
      height: 253px;
      margin: 0 0 66px 0;
    }
  }

  .mainimg_5 {
    max-width: 550px;
    max-height: 566.06px;
    margin: 180px 0 80px 30px; 
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_5_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      width: 330px;
      height: 339.63px;
      margin: 40px 0 40px 0;
    }
  }

  .mainimg:hover {
    // transform: scale(1.10);
    // transition: 0.6s;
  }

  ul {
      margin: 0 0 0 20px;
      padding: 0
  }

  li {
    margin: 5px 0 0 0;
    padding: 0;
  }

  .container_text_img_left2 {
    display: flex;
    @media (max-width: 480px) {
      margin: 0 0 0 22px;
      height: 646px;
      display: block;
    }
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
                    <img className="mainimg_1_mob" src={HeroOne} alt="Main img"></img>
                    The central feature of this project was to allow attendees a single page where
                    they could view all the challenges available on the platform. 
                    The Hero Carousel is a place where we could push admin curated coach challenges
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
                {/* style={{marginTop: '67px'}} */}
                <img className="mainimg_1" src={HeroOne} alt="Main img"></img>
            </div>;
  const three = <div className="container_text_img_right">
                    <img className="mainimg_2" src={HeroTwo} alt="Main img"></img>
                    <div className="container_text_3">
                        <div className="title_Hero1">Jump Back In!</div>
                        <img className="mainimg_2_mob" src={HeroTwo} alt="Main img"></img>
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
  const four = <div className="container_text_img_left1">
                <div className="container_text_4">
                    <div className="title_Hero">You Might Like</div>
                    <img className="mainimg_3_mob" src={HeroThree} alt="Main img"></img>
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
                        <img className="mainimg_4_mob" src={HeroFour} alt="Main img"></img>
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

const six = <div className="container_text_img_left2">
                <div className="container_text_final">
                    <div className="title_Hero_final">Recently Added + Individual Types</div>
                    <img className="mainimg_5_mob" src={HeroFive} alt="Main img"></img>
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

  const items = [two, three, four, five, six];

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
