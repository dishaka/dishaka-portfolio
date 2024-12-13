import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/verifiedbadge/verified_main.png';
// import CongratulationsImg from '../../../../src/images/verifiedbadge/congratulations.png';
import CongratulationsImg from '../../../../src/images/verifiedbadge/congratulations.gif';
import SalesSkyrocketImg from '../../../../src/images/verifiedbadge/sales_skyrocket.png';
import InclusionValueImg from '../../../../src/images/verifiedbadge/inclusion_value.png';
import EarnedItImg from '../../../../src/images/verifiedbadge/earnedit.png';
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
    height: 256px;
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

  .chal-out-text ul {
      margin: 0 0 0 25px;
      padding: 0;
    }

  .chal-margin {
    width: 442px;
    height: 176px;
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
    border-radius: 8px;
    grid-column: 1 / 4;
    grid-row: 4 / 4;
    max-width: 1000px;
    min-width: 999px;
    max-height: 533px;
    min-height: 533px;
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
    height: 325px;
    z-index: 1;
    position: relative;
    background: rgba(0, 0, 0, 0.05);
    @media (max-width: 480px) {
      height: 100%;
    }
  }

  .nft-quote-text {
    width: 480px;
    height: 182px;
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
    
    .interactions-text-multiline {
        height: 72px;
        line-height: 36px;
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
      height: 854px;
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
      height: 792px;
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

    .reflections-text ol {
      margin: 0 0 0 25px;
      padding: 0;
    }

    .ul {
      margin: 0 0 0 25px;
      padding: 0;
    }

    a {
      text-decoration: underline;
    }

}
`;


const VerifiedBadge = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
                <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2024</div>
                <div className='Title_MoxieChallenges_h2'>Verified Badge</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  The PayU Verified Badge is a trust-enhancing feature displayed on checkout pages of select merchants, signaling to customers that the business is verified as secure and reliable by PayU. The badge provides customers with reassurance about the authenticity of the merchant, reducing concerns over payment security and service reliability. This visual cue helps build trust, encourages online payments, and decreases checkout drop-offs, ultimately improving conversion rates and merchant sales.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">Responsible for Product ideation, UX and Visual Design, Interaction design and prototype</div>
                    <div className='header header-margin-2'>LINKS</div>
                    <div className="content">
                        <a href='https://payu.in/' target='_blank'>PayU.in</a> <br />
                      </div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                      <div className="content">
                        Priyam Parul, UX Lead<br />
                        Vishal Yadav, Senior Product Manager<br />
                        Bommu N Sai, Senior Software Engineer<br />
                      </div>
                      <div className='header header-margin-2'>TAGS</div>
                      <div className="content">#UserTrust #BrandCredibility #UXCaseStudy #VisualIdentity</div>
                  </div>
                  <div className='chal-out'>
                    <div className='chal'>
                      <div className='chal-out-title'>SITUATION</div>
                      <div className='chal-out-text chal-margin'>Small and medium-sized businesses (SMBs) on PayU's platform were losing potential sales due to a lack of customer trust stemming from:
                        <ul>
                            <li>Limited brand recognition compared to enterprises.</li>
                            <li>Concerns about payment security and service reliability.</li>
                            <li>Higher bounce rates on checkout pages, resulting in lower success rates (65% vs. enterprise merchants' 70%).</li>
                            <li>How to drive adoption of Badge so that merchants enable it on their checkout.</li>
                        </ul>
                     </div>
                    </div>
                    <div className='out'>
                      <div className='chal-out-title'>OUTCOME</div>
                      <div className='chal-out-text out-margin'>The PayU Verified Badge enhanced trust through clear visual cues and a gamified onboarding experience, driving high merchant adoption. The intuitive design reassured customers of secure transactions, increasing online payments and reducing CoD orders. This seamless UX process resulted in higher engagement, sales growth, and improved merchant satisfaction.</div>
                    </div>
                  </div>
                  <div className='what-is-nft'>
                    <div className='nft-title'>What is PayU Verified Badge?</div>
                    <div className='nft-text'>The PayU Verified Badge is a trust symbol displayed on merchants' checkout pages, designed to reassure customers of the merchant's authenticity and secure payment processes. Using a combination of data science models and risk team validations, PayU identifies trustworthy merchants and automatically activates the badge for eligible accounts. This seamless, ongoing verification process ensures only reliable merchants display the badge, building customer confidence, increasing online payments, and reducing drop-offs and CoD orders, ultimately driving higher merchant success.</div>
                  </div>
                  <img className='img-nft-trending' src={CongratulationsImg} alt="Congratulations, You are a trusted member of the year!"></img>
                  <div className='nft-quote'>
                      <div className='side-highlight'></div>
                      <div className='nft-quote-text'>
                      But, what’s the guarantee that the conversation may extend beyond the Verified Badge itself and to PayU as a payment gateway? By creating beautiful visual imagery with the Verified Badge presentation and enabling merchants to share more about their business and ethics, PayU is making more room for conversations. (And, definitely hoping for more customers to get on-board and the ones on it to stay longer!)</div>
                  </div>
                  <div className='interaction-1'>
                    <img className='interactions-image-1' src={SalesSkyrocketImg} alt="This year, your sales were skyrocketing."></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title'>Delighting merchants</div>
                      <div className='interactions-text-1-text'>By providing merchants with additional insights about their own performance and trust metrics, the design creates a sense of discovery and appreciation. Merchants gain valuable information about their achievements, fostering pride and satisfaction in their growth journey.</div>
                    </div>
                  </div>
                  
                  <div className='interaction-1 interaction-row-2 reverse-dir'>
                    <img className='interactions-image-1 interaction-img-2' src={InclusionValueImg} alt="Building Inclusion & Value"></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title interactions-text-multiline'>Building Inclusion & Value</div>
                      <div className='interactions-text-1-text'>The Verified Badge and its presentation are designed to make merchants feel seen, valued, and rewarded within the PayU ecosystem. Instead of just tracking analytics passively, the personalized, visually engaging data celebrates their efforts and consistency, reinforcing a sense of belonging and accomplishment.</div>
                    </div>
                  </div>

                  <div className='interaction-1 interaction-row-3'>
                    <img className='interactions-image-1 interaction-img-3' src={EarnedItImg} alt="You've earned it! Share with the world."></img>
                    <div className='interactions-text-1'>
                      <div className='interactions-text-1-title interactions-text-multiline'>Extending PayU’s Brand Reach</div>
                      <div className='interactions-text-1-text'>The design goes beyond just awarding the badge—it encourages merchants to share their achievements with their audience. Visual elements tied to the badge and business milestones invite conversations about the merchant’s credibility and PayU’s role in enabling secure transactions. When shared on social platforms, these stories have the potential to reach new audiences, including customers unfamiliar with PayU, thereby amplifying PayU’s brand recognition and trustworthiness.</div>
                    </div>
                  </div>

                  <div className='reflections'>
                    <div className='reflections-title'>Reflections</div>
                    <div className='reflections-text'>
                    This project started as a strategic initiative to address trust issues for SMB merchants, but it quickly evolved into a design and problem-solving challenge that went beyond the initial scope. One of the biggest takeaways was navigating cross-functional collaboration with teams like data science, risk, and business, & legal each with different priorities and approaches. It taught me the importance of balancing ambiguity with structure and celebrating incremental wins along the way. 
                      <br /> <br />
                      A key milestone was transforming a conceptual trust marker into a visually compelling, user-friendly solution that merchants embraced enthusiastically. I particularly enjoyed experimenting with interactive visuals and gamified onboarding flows, which added delight for users while driving engagement. This project reinforced the value of storytelling in design—leveraging data to create personalised, shareable experiences that merchants were proud to display, extending the impact of the badge beyond just functionality.
                      <br /> <br />
                      Ultimately, this project was a rewarding experience, blending problem-solving, design, and strategy to deliver a solution that positively impacted SMBs and PayU's ecosystem alike.
                      <br /> <br />
                      Some milestones I hit:
                      <ul>
                        <li>One of the <b>first gamified + animation driven projects on dashboard </b></li>
                        <li><b>Complete ownership</b> of product</li>
                      </ul>
                      <br />
                      Also some things I explored and loved experimenting:
                      <ul>
                        <li><b>Visual design</b> and UI</li>
                        <li>Adding <b>delight micro-animations</b> to engage and satisfy the users (and me!)</li>
                      </ul>
                      <br />
                      Some key metrics I plan to track after the full release are:
                      <ol>
                        <li><b>Adoption Rate</b>: Percentage of eligible merchants activating the Verified Badge.</li>
                        <li>Engagement Metrics:
                            <ul>
                                <li><b>Interaction rate with the onboarding</b> dashboard or gamified process.</li>
                                <li><b>Completion rates for onboarding</b> steps.</li>
                            </ul>
                        </li>
                        <li>On checkout end: Conversion rate, Bounce rate, CoD vs. Online Payments Ratio & lastly Gross Merchandise Value (GMV) growth.</li>
                      </ol>
                    </div>
                  </div>
                </div>

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

export default VerifiedBadge;
