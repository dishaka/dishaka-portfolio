import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/toolbox/toolbox_main.png';
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


const Toolbox = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
                <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2022</div>
                <div className='Title_MoxieChallenges_h2'>ToolBox : Manage your chat sales process</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  ToolBox helps companies build a chat-centric sales model, by providing the necessary tools required to communicate with customers. The ToolBox chat platform focuses on improving visibility of chat conversations as well as increasing the productivity of a sales team. 
                  <br /><br />
                  Visibility of chat conversations help sales leaders standardise sales pitch delivery, while tracking key performance metrics like response time, response rate, etc and hence reducing leakage. On the other hand, automated conversation with cold/warm leads free up the sales team's time, allowing them to focus on more serious prospects, improving productivity. Clients see an immediate CAC reduction of over 10% with this platform.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">End-to-end UX Design and UI, interaction design and prototype</div>
                    <div className='header header-margin-2'>LINKS</div>
                    <div className="content">
                        <a href='https://share.vidyard.com/watch/Htk55aPwtUF1zSTweKRT3z' target='_blank'>Know More</a>
                      </div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                      <div className="content">
                        Freelance project, solo designer - Dishaka Tarafdar
                      </div>
                      <div className='header header-margin-2'>TAGS</div>
                      <div className="content">#UXDesign  #B2B #SalesAutomation #SAAS</div>
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

export default Toolbox;
