import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import soundcloud_img2 from '../../images/soundcloud_img2.png';
import soundcloud_img3 from '../../images/soundcloud_img3.png';
import soundcloud_img_mob1 from '../../images/soundcloud_img_mob1.png';
import soundcloud_img_mob2 from '../../images/soundcloud_img_mob2.png';
import soundcloud_img_mob3 from '../../images/soundcloud_img_mob3.png';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .empathy {
    width: 263px;
    height: 59px;


    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;

    /* identical to box height, or 59px */
    margin: 12px 0 0 75px;
    color: #FFFFFF;

    @media (max-width: 480px) {
      width: 175px;
      height: 39px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 39.22px;

      /* or 39px */

      color: #FFFFFF; 
      margin: 0 0 0 22px;
    }
  }

  .empathy2 {
    width: 147px;
    height: 44px;


    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;

    /* identical to box height, or 59px */
    margin: 116px 0 0 75px;
    color: #FFFFFF;

    @media (max-width: 480px) {
        display: none;
      }
  }

  .content1 {
    width: 442px;
    height: 220px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin: -59px 0 0 482px;
    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 327px;
      height: 201px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      /* or 129% */
      font-feature-settings: 'cpsp' on;

      color: #FFFFFF;
      margin: 40px 0 0 22px;
    }
  }

  .content2 {
    width: 442px;
    height: 220px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin: -44px 0 9px 482px;
    /* or 129% */
    font-feature-settings: 'cpsp' on;

    color: #FFFFFF;
    @media (max-width: 480px) {
        display: none;
      }
    }

  ul {
      margin: 0 0 0 0;
      padding: 0;
  }

  li {
      margin: 0 0 0 20px;
      padding: 0;
  }

  b {
    font-weight: 600;
  }

  .mainimg {
    max-width: 852.66px;
    max-height: 501.14px;
    margin: 46px 0 40px 74px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg1 {
    max-width: 970px;
    max-height: 467px;
    margin: 115.86px 0 0 15px;
    @media (max-width: 480px) {
        display: none;
      }
    }
  }

  .mainimg_mob {
    display: none;
    @media (max-width: 480px) {
      display: block;
      max-width: 327px;
      max-height: 757.25px;
      margin: 36px 0 0 25px;
    }
  }

  .mainimg_mob2 {
    display: none;
    @media (max-width: 480px) {
      display: block;
      min-width: 306px;
      max-width: 306.5px;
      max-height: 747px;
      margin: 80px 0 0px 35px;
    }
  }

  .mainimg_mob3 {
    display: none;
    @media (max-width: 480px) {
      display: block;
      max-width: 310px;
      max-height: 380px;
      margin: 53.75px 0 0px 33px;
    }
  }
`;

const SoundCloud_Empathy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='empathy'>
                Empathy Mapping
                </div>;
  const two = <div className='content1'>
                Who — Who has this problem?  <br></br>
                What — What is the nature of the problem?  <br></br>
                Why — Why is the problem worth solving?  <br></br>
                Where — Where does this problem happen?  <br></br>
                <br></br>
                To understand users better and solve their problems effectively, I made an empathy
                map of a few users who have used / currently use SoundCloud and a lot more
                streaming apps. This helped me understand their though process and how to design
                and make the user experience better and comprehendible.
                </div>;
  const three = <img className="mainimg" src={soundcloud_img2} alt="Main img"></img>;

  const seven = <img className="mainimg_mob" src={soundcloud_img_mob1} alt="Main img"></img>;

  const eight = <img className="mainimg_mob2" src={soundcloud_img_mob2} alt="Main img"></img>;

  const nine = <img className="mainimg_mob3" src={soundcloud_img_mob3} alt="Main img"></img>;
  
  const four = <img className="mainimg1" src={soundcloud_img3} alt="Main img"></img>;

  const five = <div className='empathy2'>
                Summary
                </div>;
  const six = <div className='content2'>
                To sum it up, the main goals of this mobile app is to:
                <br></br><br></br>
                <ul>
                    <li>Improving the discovery flow of the users for better and custom song
                        recommendations, making users confident to find content</li>
                    <li>Ability to make /share custom music and podcast playlist.</li>
                    <li>Reduce the number of categories on tabs so that users can keep up, categories managed to user’s tastes</li>
                    <li>Including a downloading option for offline mode usage</li>
                </ul>
                </div>;

  const items = [one, two, three, seven, eight, nine, four, five, six];

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

export default SoundCloud_Empathy;
