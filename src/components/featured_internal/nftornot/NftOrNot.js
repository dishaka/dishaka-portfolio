import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/nft/nft_main.png';
import TrendingImg from '../../../../src/images/nft/nft_trending_main.gif';
import InteractionsImg1 from '../../../../src/images/nft/nft_interact1.gif';
import InteractionsImg2 from '../../../../src/images/nft/nft_interact2.gif';
import InteractionsImg3 from '../../../../src/images/nft/nft_interact3.png';
import InteractionsImg4 from '../../../../src/images/nft/nft_interact4.gif';
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
    height: 234px;

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
      height: 163px;
    }

  }

  .role {
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      height: 90px;
      margin: -55px 0 0 0;
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
      grid-row: 4 / 4;
      height: auto;
      margin: -55px 0 0 0;
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
    border-radius: 8px;
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

}
`;


const NftOrNot = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
                <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2023</div>
                <div className='Title_MoxieChallenges_h2'>NFT or Not</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  A digital diary that captures the moment elaborately for the person suffering and their family members and triggers back them in future when similar conditions exist - such as time of day, place, and weather conditions.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">Responsible for Product ideation, UX and Visual Design, Interaction design and prototype</div>
                    <div className='header header-margin-2'>LINKS</div>
                    <div className="content">
                        <a href='https://nftornot.com/' target='_blank'>NFTorNot.com</a> <br />
                        <a href='https://github.com/NFTorNOT' target='_blank'>GitHub</a>
                      </div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                      <div className="content">
                        Harshit Beniwal, Senior UX Designer<br />
                        Kartik Kapgate, Software Engineer<br />
                        Daksh B, Senior Software Engineer<br />
                        Gopal Jasani, Software Engineer<br />
                        Hardik Shah, Software Engineer<br />
                        Vindeep C, Senior Software Engineer<br />
                      </div>
                      <div className='header header-margin-2'>TAGS</div>
                      <div className="content">#Web3 #AI #OpenSource #UXCaseStudy #VisualIdentity</div>
                  </div>
                  <div className='chal-out'>
                    <div className='chal'>
                      <div className='chal-out-title'>SITUATION</div>
                      <div className='chal-out-text chal-margin'>ETHIndia is a hackathon — a movement with the goal of inspiring and fostering a community of builders promoting technological advancements for Ethereum. It's a place where the leading minds in the Ethereum ecosystem are uniting with 1500+ builders from around the globe to build decentralized applications for the future.</div>
                    </div>
                    <div className='out'>
                      <div className='chal-out-title'>OUTCOME</div>
                      <div className='chal-out-text out-margin'>A thrilling showdown of images generated by AI from prompts input by individuals. The community gets to decide the best images on the given theme and Collect those NFTs for a fee to support the creators. The highest-voted submission makes it to the Hall of Flame.</div>
                    </div>
                  </div>
                  <div className='what-is-nft'>
                    <div className='nft-title'>What is NFT or Not?</div>
                    <div className='nft-text'>NFTorNot is a platform where users can sign in with their Lens profile and engage in a showdown of AI-generated images. These images are created based on user prompts and trending themes. Participants have the opportunity to vote on the images they find the most appealing or captivating. <br />
                    The platform allows users to generate their own AI images using the provided filters, which enhance the images with different styles, tones, and keywords. Users can preview and modify the generated images before submitting them for voting.</div>
                  </div>
                  <img className='img-nft-trending' src={TrendingImg} alt="Trending Themes"></img>
                  <div className='nft-quote'>
                      <div className='side-highlight'></div>
                      <div className='nft-quote-text'>
                      By combining the elements of AI-generated images, community voting, NFT collection, and the Hall of Flame, NFTorNot provides an exciting platform for users to explore, participate, and appreciate the creativity of AI and its applications in the digital art world.</div>
                  </div>
                  <div className='interaction-1'>
                    <img className='interactions-image-1' src={InteractionsImg1} alt="Interaction 1"></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title'>Vote 🔥 or ❌</div>
                      <div className='interactions-text-1-text'>After 🌿 signing in with Lens profile, users can start voting on AI-generated images submitted by others.</div>
                    </div>
                  </div>
                  
                  <div className='interaction-1 interaction-row-2 reverse-dir'>
                    <img className='interactions-image-1 interaction-img-2' src={InteractionsImg2} alt="Interaction 1"></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title'>Generate AI Images</div>
                      <div className='interactions-text-1-text'>The user has to follow a couple simple steps - <br />Select a theme for the image they plan to generate, describe the image they want to generate in as many words as they want, add in 🔥 filters and hit Generate.</div>
                    </div>
                  </div>

                  <div className='interaction-1 interaction-row-3'>
                    <img className='interactions-image-1 interaction-img-3' src={InteractionsImg3} alt="Interaction 1"></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title'>Collect NFTs</div>
                      <div className='interactions-text-1-text'>Lens users can show support by 💰 Collecting NFTs; the collect proceeds go to the user who generated it. They can collect as many times as they like, from Nft or Not platform, or Lenster.</div>
                    </div>
                  </div>

                  <div className='interaction-1 interaction-row-4 reverse-dir'>
                    <img className='interactions-image-1 interaction-img-4' src={InteractionsImg4} alt="Interaction 1"></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title'>Hall of Flame 🔥</div>
                      <div className='interactions-text-1-text'>The top 🔥 voted images on NFT or Not are showcased on the Hall of Flame ⭐️ </div>
                    </div>
                  </div>

                  <div className='reflections'>
                    <div className='reflections-title'>Reflections</div>
                    <div className='reflections-text'>
                    What started off as a fun hackathon project, my team had 48 hours to ideate and implement, looking at how interesting it turned out, we worked on it further and made it a full fledged project. It can be a challenge to grasp a technology super quick, read up on API documentation and figure things out with your team as you progress during the project. 
                      <br /> <br />
                      Teams had different priorities, timelines, and levels of investment in the project, so coordination within the group was a constant hurdle. However, as the project progressed, I learned to accept (and even embrace) the ambiguity and celebrate the little wins. We couldn't implement everything we wanted, but we did smaller incremental additions, which would still be a win for people using the product. It's safe to say that the project before its launch is a success as we received a grant from the Lens Protocol team. Hence, this product has been challenging and equally rewarding at the same time.
                      <br /> <br />
                      Some milestones I hit:
                      <ul>
                        <li><b>Zero to one on Web 3.0</b> project in less than two months</li>
                        <li><b>Complete ownership of product</b></li>
                      </ul>
                      <br />
                      Also some things I explored and loved experimenting:
                      <ul>
                        <li><b>Visual design</b> and UI</li>
                        <li>Adding <b>delight micro-animations</b> to engage and satisfy the users (and me!)</li>
                      </ul>
                    </div>
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

export default NftOrNot;
