import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/onboarding/onboarding_main.png';
import BackgroundOne from '../background_one.png';
import styles from '../Moxie_Challenges_Background.module.css';


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .Title_MoxieChallenges {
    display: flex;
    width: 1000px;
    flex-direction: column;
    align-items: center;
    margin: 96px 0 0 0;
    @media (max-width: 480px) {
      margin: 60px 0 0 0;
      width: 100%;
    }
  }

  .Title_MoxieChallenges_h1 {
    width: 137px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */

    text-align: center;

    color: #636363;

    @media (max-width: 480px) {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 163.4%;
      /* or 21px */

      text-align: center;

      color: #636363;
    }
  }

  .Title_MoxieChallenges_h2 {
    width: 687px;
    height: 65px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 163.4%;
    /* or 65px */

    text-align: center;

    color: #000000;
    margin: 16px 0 0 0;

    @media (max-width: 480px) {
      width: 100%;
      height: 65px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 109.4%;
      /* or 35px */

      text-align: center;

      color: #000000;
    }

  }

  .mainimg{
    min-width: 999px;
    min-height: 674px;                                        
    max-width: 1000px;
    max-height: 675px;
    margin: 44px 0 0 0px;
    @media (max-width: 480px) {
      width: 100%;
      min-width: auto;
      min-height: auto;                                        
      max-width: auto;
      max-height: auto;
      margin: 44px 0 0 0;
    }
  }

  .text_holder {
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    row-gap: 102px;
    margin: 102px 0 0 0;
    @media (max-width: 480px) {
      grid-template-columns: calc(100vw - 30px);
      row-gap: 80px;
      margin: 40px 15px 0 15px;
      
    }
  }
  
  .left_text {
    grid-column: span 2;
    width: 476px;
    height: auto;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    /* or 130% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      width: 345px;
      height: auto;
    }

  }

  .role {
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      height: auto;
      margin: -56px 0 0 0;
    }
  }

  .header {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
  }

  .content {
    margin: 12px 0 0 0;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* or 138% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .team {
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 3 / 3;
      height: auto;
      margin: -56px 0 0 0;
    }
  }

  .header-margin-2 {
    margin: 12px 0 0 0;
  }

  .header-tag {
    margin: 22px 0 0 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
  }

  .chal-out {
    width: 1000px;
    height: 199px;
    grid-column: span 4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 26px 28px;
    gap: 10px;
    background: rgba(0, 0, 0, 0.05);
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 5 / 5;
      display: flex;
      width: auto;
      flex-direction: column;
      margin: 0 -15px 0 -15px;
      height: auto;
    }
  }

  .chal-out-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
  }

  .chal-out-text {
    margin: 12px 0 0 0;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* or 138% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      height: auto;
      width: auto;
    }

  }

  .chal-margin {
    width: 442px;
    height: 110px;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .out {
    @media (max-width: 480px) {
      margin: 4px 0 0 0;
      width: auto;
      height: auto;
    }
  }

  .out-margin {
    width: 445px;
    height: 86px;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .what-is-nft {
    grid-column: 2 / 3;
    grid-row: 3 / 3;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 6 / 6;
      width: calc(100vw - 30px);
    }
  }

  .nft-title {
    width: 500px;
    height: 45px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    /* or 59px */


    color: #000000;

  }

  .nft-text {
    width: 500px;
    height: 178px;
    margin: 30px 0 0 0;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* or 138% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .img-nft-trending {
    grid-column: 1 / 4;
    grid-row: 4 / 4;
    max-width: 1000px;
    min-width: 999px;
    max-height: 699px;
    min-height: 698px;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 7 / 7;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .nft-quote {
    grid-column: 2 / 3;
    grid-row: 5 / 5;
    width: 500px;
    height: 218px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 8 / 8;
      width: auto;
      height: 256px;
    }
  }

  .side-highlight {
    width: 5px;
    height: 218px;
    z-index: 1;
    position: relative;
    background: rgba(0, 0, 0, 0.05);
    @media (max-width: 480px) {
      height: 100%;
    }
  }

  .nft-quote-text {
    width: 480px;
    height: 129px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    /* or 130% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      width: 325px;
      height: auto;
    }
  }

  .interaction-1 {
    grid-column: 1 / 4;
    grid-row: 6 / 6;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 9 / 9;
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
    }
  }

  .interaction-row-2 {
    grid-row: 7 / 7;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 10 / 10;
    }
  }

  .interaction-row-3 {
    grid-row: 8 / 8;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 11 / 11;
    }
  }

  .interaction-row-4 {
    grid-row: 9 / 9;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 12 / 12;
    }
  }

  .interactions-image-1 {
    max-width: 580px;
    min-width: 579px;
    max-height: 396px;
    min-height: 395px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      max-width: 345px;
      height: auto;
      margin: 24px 0 0 0;
      min-width: 344.5px;
      max-height: auto;
      min-height: auto;
    }
  }

    .interaction-img-2 {
      max-width: 580px;
      min-width: 579px;
      max-height: 512px;
      min-height: 511.5px;
      @media (max-width: 480px) {
        max-width: 345px;
        height: auto;
        min-width: 344.5px;
        max-height: auto;
        min-height: auto;
      }
    }

    .interaction-img-3 {
      max-width: 580px;
      min-width: 579px;
      max-height: 413.5;
      min-height: 412px;
      @media (max-width: 480px) {
        max-width: 345px;
        height: auto;
        min-width: 344.5px;
        max-height: auto;
        min-height: auto;
      }
    }

    .interaction-img-4 {
      max-width: 580px;
      min-width: 579px;
      max-height: 551.5px;
      min-height: 551px;
      @media (max-width: 480px) {
        max-width: 345px;
        height: auto;
        min-width: 344.5px;
        max-height: auto;
        min-height: auto;
      }
    }

    .interactions-text-1 {
      width: 334px;
      @media (max-width: 480px) {
        grid-column: 1 / 1;
        grid-row: 16 / 16;
        width: auto;
        height: auto;
        margin: 0;
      }
    }
  
    .interactions-text-1-title {
      width: 100%;
      height: 45px;
  
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 163.4%;
      /* or 59px */
  
  
      color: #000000;
      @media (max-width: 480px) {
        width: auto;
      }
    }
  
    .interactions-text-1-text {
      width: 100%;
  
      margin: 30px 0 0 0;
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      /* or 138% */
  
      font-feature-settings: 'cpsp' on;
  
      color: #636363;
      @media (max-width: 480px) {
        width: auto;
        height: auto;
      }
    }

    .reverse-dir {
      flex-direction: row-reverse;
      @media (max-width: 480px) {
        flex-direction: column-reverse;
      }
    }

    .reflections {
      grid-column: 2 / 3;
      grid-row: 10 / 10;
      width: 500px;
      height: 605px;
      @media (max-width: 480px) {
        grid-column: 1 / 1;
        grid-row: 13 / 13;
        width: auto;
        height: auto;
      }
    }
  
    .reflections-title {
      width: 500px;
      height: 32px;
  
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 100%;
      /* or 36px */
  
  
      color: #000000;
      @media (max-width: 480px) {
        width: auto;
        height: auto;
      }
    }
  
    .reflections-text {
      width: 500px;
      height: 543px;
      margin: 30px 0 0 0;
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      /* or 138% */
  
      font-feature-settings: 'cpsp' on;
  
      color: #636363;
      @media (max-width: 480px) {
        width: auto;
        height: auto;
      }
    }
  
    .reflections-text ul {
      margin: 0 0 0 25px;
      padding: 0;
    }

    a {
      text-decoration: underline;
    }

    .under-construction {
        grid-column: 1 / 4;
        grid-row: 2 / 2;
        width: 1000px;
        height: 72px;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
  
        background: rgba(0, 0, 0, 0.05);
        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        /* or 110% */
  
        text-align: center;
        font-feature-settings: 'cpsp' on;
  
        color: #636363;
        @media (max-width: 480px) {
          width: auto;
          font-size: 16px;
          grid-column: 1 / 1;
          grid-row: 4 / 4;
        }
      }

}
`;


const OnBoarding = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
                <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2024</div>
                <div className='Title_MoxieChallenges_h2'>Redefining Merchant Onboarding</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  After innumerable number of funnel improvements to decrease merchant drop-offs and time taken for merchants to onboard onto PayU, we decided on a 3 month long sprint & a complete makeover of the onboarding experience to deal with core issues that came out of our research. Starting from how can we prepare our merchants for the complicated and necessary steps, to sharing timelines for verification along with lack of understanding of merchants of certain rigid document requirements to reduce back and forth leading to frustration, we revamped end-to-end journeys to facilitate better experience and significantly reduce onboarding timelines.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">UX Research (Primary, secondary and desk research), Design ideation, interaction design and prototype</div>
                    <div className='header header-margin-2'>LINKS</div>
                    <div className="content">
                        <a href='https://payu.in/' target='_blank'>PayU.in</a>
                      </div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                      <div className="content">
                      Priyam Parul, UX Lead <br />
                      Mayank Arora, Product Manager <br />
                      Vishal Yadav, Sr Product Manager <br />
                      Bommu Naga Sai, Lead Engineer <br />
                      </div>
                      <div className='header header-margin-2'>TAGS</div>
                      <div className="content">#UXResearch #ExperienceRedesign #MerchantOnboarding</div>
                  </div>
                  <div className='under-construction'>
                    This case study is currently under construction, coming soon 🛠️
                  </div>
                </div>//asadsd

  const items = [one, two, three];

  return (
    <>
    {/* <div style={blackBackGround}> */}
      {/* <div className={styles.custom_background}> */}
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms`, width:'100%' }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
    {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default OnBoarding;
