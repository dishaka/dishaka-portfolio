import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/recon/recon.png';
import WhoWhatWhyImg from '../../../../src/images/recon/recon_who_what_why.png';
import UserGroupImg from '../../../../src/images/recon/usergroup.png';
import UserGroupImg2 from '../../../../src/images/anchor/anchor_usergrp2.png';
import UserGroupImg3 from '../../../../src/images/anchor/anchor_usergrp3.png';
import EmpoweringMemoriesImg from '../../../../src/images/anchor/anchor_empowering_memories.png';
import TypographyImg from '../../../../src/images/anchor/anchor_typography.png';
import ColorPaletteImg from '../../../../src/images/anchor/anchor_color.png';
// import DataIngestionImg from '../../../../src/images/recon/data_ingestion.png';
import DataIngestionImg from '../../../../src/images/recon/data_ingestion.gif';
import DataTransformationImg from '../../../../src/images/recon/data_transformation.png';
import ContraRuleSetupImg from '../../../../src/images/recon/contra_rule_setup.png';
// import RuleSetupImg from '../../../../src/images/recon/rule_setup.png';
import RuleSetupImg from '../../../../src/images/recon/rule_setup.gif';
import ColumnMappingImg from '../../../../src/images/recon/column_mapping.png';
// import InteractionsImg2 from '../../../../src/images/anchor/anchor_interactions2.png';
// import InteractionsImg3 from '../../../../src/images/anchor/anchor_interactions3.png';
// import InteractionsImg4 from '../../../../src/images/anchor/anchor_interactions4.png';
// import InteractionsImg5 from '../../../../src/images/anchor/anchor_interactions5.png';
import InteractionsImg2 from '../../../../src/images/anchor/anchor_interaction2.gif';
import InteractionsImg3 from '../../../../src/images/anchor/anchor_interaction3.gif';
import InteractionsImg4 from '../../../../src/images/anchor/anchor_interaction4.gif';
import InteractionsImg5 from '../../../../src/images/anchor/anchor_interaction5.gif';
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
    max-height: 674px;
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
    margin: 65.44px 0 0 0;
    @media (max-width: 480px) {
      grid-template-columns: calc(100vw - 30px);
      row-gap: 80px;
      margin: 40px 15px 0 15px;
      
    }
  }
  
  .left_text {
    grid-column: span 2;
    width: 476px;
    height: 206px;

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
    width: 240px;
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
    height: 206px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      height: 136px;
      margin: -55px 0 0 0;
    }
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
    height: 243px;
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
      grid-row: 4 / 4;
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
    height: 57px;
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

  .what-is-anchor {
    grid-column: 2 / 3;
    grid-row: 3 / 3;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 5 / 5;
      width: calc(100vw - 30px);
    }
  }

  .anc-title {
    width: 336px;
    height: 42px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    /* or 59px */


    color: #000000;

  }

  .anc-text {
    width: 500px;
    height: 66px;
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

  .anc-quote {
    margin: 30px 0 0 0;
    width: 500px;
    height: 191px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 307px;
    }
  }

  .side-highlight {
    width: 5px;
    height: 191px;
    z-index: 1;
    position: relative;
    background: rgba(0, 0, 0, 0.05);
    @media (max-width: 480px) {
      height: 100%;
    }
  }

  .anc-quote-text {
    width: 480px;
    height: 130px;
    margin: 31.5px 0 0 0;
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
      height: 231px;
      margin: 38px 0 0 0;
    }
  }

  .img-who-what-why {
    grid-column: 2 / 3;
    grid-row: 4 / 4;
    max-width: 500px;
    min-width: 449px;
    max-height: 213px;
    min-height: 212px;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 6 / 6;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .user-group {
    grid-column: 1 / 2;
    grid-row: 5 / 5;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 7 / 7;
      width: 100%
    }
  }

  .user-group-imgs {
    margin: 18px 0px;
    grid-column: 4 / 4;
    justify-self: end;
    grid-row: 5 / 5;
    width: 463px;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 8 / 8;
      width: 100%
    }
  }

  .user-group-img-1 {
    display: block;
  }

  .user-group-text-1 {
    width: 223px;
    height: 15px;

    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 9.89323px;
    line-height: 150%;
    /* identical to box height, or 15px */

    letter-spacing: -0.011em;

    color: #000000;
  }

  .img-user-group-1 {
    max-width: 462px;
    min-width: 461px;
    max-height: 629px
    min-height: 628px
    margin: 5px 0 0 0;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-width: auto;
    }
  }

  .img-user-group-2 {
    max-width: 462px;
    min-width: 461px;
    margin: 5px 0 0 0;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-width: auto;
    }
  }

  .user-group-title {
    width: 500px;
    height: 45px;
    margin: 8.72px 0 0 0;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    /* or 59px */


    color: #000000;
    @media (max-width: 480px) {
      marginL 0;
    }
  }

  .user-group-text {
    margin: 30px 0 0 0;
  }

  .user-group-text-title {
    width: 500px;
    height: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;

  }

  .user-group-text-text {
    width: 500px;
    height: 44px;
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

  .user-group-quote {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 0 0 0;
    @media (max-width: 480px) {
      width: auto;
    }
  }

  .highlight-user-group-height {
    height: 261px;
    @media (max-width: 480px) {
      height: 220px
    }
  }

  .user-group-quote-text {
    width: 480px;
    height: 126px;
    margin: 30px 0 0 0;
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
      height: 175px;
      margin: 22.5px 0 0 0;
    }
  }

  .user-group-quote-text ul {
    margin: 0 0 0 25px;
    padding: 0;
  }

  .user-group-strategy {
    width: 500px;
    margin: 30px 0 0 0;
    @media (max-width: 480px) {
      width: auto;
    }
  }

  .user-group-strategy-title {
    width: 500px;
    height: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .user-group-strategy-text {
    width: 500px;
    height: 134px;
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

  .narrow-statement-block {
    height: 309px;
    grid-row: 6 / 6;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 9 / 9;
      width: auto;
      height: auto;
    }
  }

  .narrow-statement {
    width: 442px;
    height: 72px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
    /* or 36px */


    color: #636363;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }

  }

  .key-findings {
    @media (max-width: 480px) {
      width: auto;
      height: auto;
      margin: 4px 0 0 0;
    }
  }

  .key-findings-title {
    width: 442px;
    height: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
  }

  .key-findings-text {
    width: 442px;
    height: 87px;
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
      width: 330px;
      height: auto;
    }
  }

  .key-findings-text ul {
    margin: 0 0 0 25px;
    padding: 0;
  }

  .soln-ideation {
    grid-column: 2 / 3;
    grid-row: 7 / 7;
    width: 500px;
    height: 462px;
    @media (max-width: 480px) {
      grid-column: 1 / 1; 
      grid-row: 10 / 10;
      width: auto;
      height: auto;
    }
  }

  .soln-ideation-title {
    width: 500px;
    height: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */


    color: #000000;
    @media (max-width: 480px) {
      width: auto;
      height: auto;
    }
  }

  .soln-ideation-text {
    width: 500px;
    height: 110px;
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

  .soln-ideation-quote {
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 390px;
    }
  }

  .soln-ideation-highlight-height {
    height: 271px;
    @media (max-width: 480px) {
      height: 390px;
    }
  }

  .soln-ideation-quote-text {
    width: 480px;
    height: 208px;
    margin: 28.5px 0 0 0;
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

//   .vision-div {
//     grid-column: 1 / 4;
//     grid-row: 8 / 8;
//     width: 1000px;
//     height: 506px;
//     @media (max-width: 480px) {
//       grid-column: 1 / 1; 
//       grid-row: 10 / 10;
//       width: auto;
//       height: auto;
//     }
//   }

  .vision-title {
    grid-column: 1 / 2;
    grid-row: 8 / 8;
    width: 485px;
    height: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Calibre;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .vision-text {
    width: 485px;
    height: 506px;
    margin: 0 0 0 15px;
    grid-column: 3 / 5;
    grid-row: 8 / 8;
    font-family: Calibre;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .vision-text ul {
    margin: 0 0 0 25px;
    padding: 0;
  }

  .interactions-1 {
    grid-column: 1 / 4;
    grid-row: 9 / 9;
    width: 1000px;
    height: 394px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .interactions-2 {
    grid-column: 1 / 4;
    grid-row: 10 / 10;
    width: 1000px;
    height: 477px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .interactions-3 {
    grid-column: 1 / 4;
    grid-row: 11 / 11;
    width: 1000px;
    height: 394px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .interactions-4 {
    grid-column: 1 / 4;
    grid-row: 12 / 12;
    width: 1000px;
    height: 477px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .interactions-5 {
    grid-column: 1 / 4;
    grid-row: 13 / 13;
    width: 1000px;
    height: 394px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .interactions-reversed {
    flex-direction: row-reverse;
  }

  .interactions-text-1 {
    width: 334px;
    height: 334px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin: 30px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-2 {
    width: 366px;
    height: 379px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin: 30px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-3 {
    width: 334px;
    height: 313px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    // margin: 30px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-4 {
    width: 366px;
    height: 333px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin: 30px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-5 {
    width: 334px;
    height: 364px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    // margin: 30px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 17 / 17;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-1-title {
    width: 500px;
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
      height: auto;
    }
  }

  .interactions-text-1-text {
    // width: 500px;

    // margin: 30px 0 0 0;
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

  .interactions-text-1-text ul {
    margin: 0 0 0 25px;
    padding: 0;
  }

  .interactions-text-1-quote {
    width: 334px;
    height: 119px;
    // margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
      width: auto;
      height: 84px;
    }
  }

  .interactions-text-1-quote-height {
    height: 119px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-height-2 {
    height: 150px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-height-3 {
    height: 84px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-height-4 {
    height: 126px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-height-5 {
    height: 157px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-text {
    width: 314px;
    // height: 71px;
    // margin: 17px 0 0 0;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
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

  .interactions-image-1 {
    // margin: 0 0 0 107px;
    border-radius: 4px;
    max-width: 612px;
    min-width: 612px;
    max-height: 394px;
    min-height: 394px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-2 {
    // margin: 0 0 0 107px;
    border-radius: 4px;
    max-width: 580px;
    min-width: 580px;
    max-height: 477px;
    min-height: 477px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-3 {
    // margin: 0 0 0 107px;
    border-radius: 4px;
    max-width: 612px;
    min-width: 612px;
    max-height: 394px;
    min-height: 394px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-4 {
    // margin: 0 0 0 107px;
    border-radius: 4px;
    max-width: 612px;
    min-width: 612px;
    max-height: 394px;
    min-height: 394px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-5 {
    // margin: 0 0 0 107px;
    border-radius: 4px;
    max-width: 612px;
    min-width: 612px;
    max-height: 394px;
    min-height: 394px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-1-container {
    grid-column: 3 / 4;
    grid-row: 9 / 9;
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 9 / 9;
    width: 612px;
    height: 394px;
    border: 1.93188px solid #000000;
    border-radius: 17.3869px;
    @media (max-width: 480px) {
      translate: -50% 0;
      grid-column: 1 / 1;
      grid-row: 18 / 18;
      margin: -40px 0 0 0;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }


  .reflections {
    grid-column: 2 / 3;
    grid-row: 14 / 14;
    width: 500px;
    height: 468px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
    //   grid-row: 27 / 27;
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
    height: 396px;
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

  .next-content {
    display: flex;
    width: 475px;
    height: 109px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }

  .next{
    width: 226px;
    height: 25px;

    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 163.4%;
    /* identical to box height, or 25px */
    text-align: center;

    color: #979797;
    @media (max-width: 480px) {
      width: 195px;
      height: 20px;
      left: 141px;
      top: 8965px;

      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 163.4%;

      /* identical to box height, or 20px */
      text-align: center;

      color: #979797;
    }
  }
  
  .next_project {
    width: 267px;
    height: 60px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 163.4%;
    /* or 78px */
    margin: 12px 0 0 0;
    text-align: center;
    
    color: #515769;
    @media (max-width: 480px) {
      width: 342px;
      height: 26px;
      left: 17px;
      top: 85px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 109.4%;

      /* or 26px */
      text-align: center;

      color: #515769;
      margin: 16px 0 0 0;
    }
  }

  .line {
    width: 1px;
    height: 165px;
    border-left: 1px solid var(--pink);
    margin: 48px 0 -230px 0;
    @media (max-width: 480px) {
      display: none;
    }
  }

}
`;


const ReconX = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
              <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2024</div>
              <div className='Title_MoxieChallenges_h2'>ReconX</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  ReconX is a SaaS product designed to simplify and automate the reconciliation process, addressing critical pain points for users and businesses in sectors with high transaction volumes. By enhancing operational efficiency and offering innovative features, ReconX aligns with the business's strategic goals to expand its merchant reach and revenue.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">Phase 3 UX Research, Design discovery and ideation, interaction design and prototype</div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                    <div className="content">
                        Pankhuri Yadav, Sr. UX Designer<br />
                        Devesh Gupta, Sr. Product Manager<br />
                        Shravan Sreeram, Associate PM<br />
                    </div>
                    <div className='header-tag'>TAGS</div>
                    <div className="content">#DataVisualization #SaaS #TransactionReconciliation #Fintech</div>
                  </div>
                  <div className='chal-out'>
                  <div className='chal'>
                    <div className='chal-out-title'>CHALLENGE</div>
                    <div className='chal-out-text chal-margin'>Reconciliation of larger set of data is time consuming and can lead to revenue leakage if erroneous.
                        <ul>
                            <li>Currently customers are scrolling thought large sums of data and reconciling on platforms like excel which requires a lot of manual effort and can lead to human errors.</li>
                            <li>To solve the operational headache of trying to reconcile data between multiple systems.</li>
                        </ul>
                    </div>
                  </div>
                  <div className='out'>
                    <div className='chal-out-title'>OUTCOME</div>
                    <div className='chal-out-text out-margin'>A cutting-edge automated reconciliation tool designed to streamline financial operations for merchants, ReconX allows merchants to configure multi-source data ingestion via SFTP, email, API, or database, while enjoying support for multiple file formats and vendors, leading to greater financial accuracy and efficiency.</div>
                  </div>
                  </div>
                  <div className='what-is-anchor'>
                    <div className='anc-title'>What is Reconciliation?</div>
                    <div className='anc-text'>In accounting, reconciliation refers to the process of comparing two sets of records or financial information, such as bank statements, general ledger accounts, or other relevant records, to ensure their accuracy and consistency.</div>
                    <div className='anc-quote'>
                      <div className='side-highlight'></div>
                      <div className='anc-quote-text'>
                      <b>Problem:</b> <br />
                      Reconciliation often involves comparing two financial records (e.g., invoices, orders, and bank statements) to ensure consistency. This process is labor-intensive, error-prone, and time-consuming, particularly for high-volume businesses.</div>
                    </div>
                  </div>
                  <img className='img-who-what-why' src={WhoWhatWhyImg} alt="Who What Why"></img>
                  <div className='user-group'>
                    <div className='user-group-title'>User Group</div>
                    <div className='user-group-strategy'>
                      <div className='user-group-strategy-title'>STRATEGY - DEFINING THE WHO, WHAT, AND WHY</div>
                      <div className='user-group-strategy-text'>
                        Prompt was pretty broad, so first, I set out to answer a handful of essential questions:
                        <ul>
                          <li>Who will this product be for?</li>
                          <li>What problem will we aim to solve?</li>
                          <li>What are the dynamics of this problem?</li>
                        </ul>                      
                      </div>
                    </div>
                    <div className='user-group-text'>
                      <div className='user-group-text-title'>WHO IS IT FOR?</div>
                      <div className='user-group-text-text'>ReconX focuses on industries with significant reconciliation needs, such as e-commerce, finance, gaming, and logistics.</div>
                    </div>
                    <div className='user-group-quote'>
                      <div className='side-highlight highlight-user-group-height'></div>
                      <div className='user-group-quote-text'>Key user personas include:
                        <ul>
                            <li><b>CFOs:</b> Needs an overview of all or multiple projects to get an understanding of the overall A/R health</li>
                            <li><b>Account Managers:</b> Needs to manage multiple Projects and ensure timely recon amongst Finance analysts</li>
                            <li><b>Finance Analysts:</b> Need a seamless way to consistently match invoices, orders etc. to avoid any pile up or revenue leakage</li>
                        </ul>
                    </div>
                    </div>
                  </div>
                  <div className='user-group-imgs'>
                    <img className='img-user-group-1' src={UserGroupImg} alt="User Group"></img>
                    {/* <div className='user-group-img-1'>
                      <div className='user-group-text-1'>
                        What do you find tough as you care for them?
                      </div>
                      <img className='img-user-group-1' src={UserGroupImg1} alt="User Group 1"></img>
                      <div className='user-group-text-1'>
                        What do you find tough as you care for them?
                      </div>
                      <img className='img-user-group-2' src={UserGroupImg2} alt="User Group 2"></img>
                      <div className='user-group-text-1'>
                        What do you find tough as you care for them?
                      </div>
                      <img className='img-user-group-2' src={UserGroupImg3} alt="User Group 3"></img>
                    </div> */}
                  </div>
                  <div className='chal-out narrow-statement-block'>
                    <div className='narrow-statement'>Narrowing down the problem statement</div>
                    <div className='key-findings'>
                      <div className='key-findings-title'>KEY FINDINGS</div>
                      <div className='key-findings-text'>
                        <ul>
                          <li><b>Automate Data Ingestion:</b> Build a system to auto-import data from multiple sources, reducing manual effort</li>
                          <li><b>Enable Rule-Based Reconciliation:</b> Implement configurable rules to streamline transaction matching and reduce errors.</li>
                          <li><b>Streamline Workflows:</b> Introduce maker-checker processes for efficient approvals and task delegation.</li>
                          <li><b>Integrate Familiar Systems:</b> Ensure compatibility with Excel and ERP systems to make adoption seamless</li>
                          <li><b>Simplify Onboarding:</b> Develop a self-service setup for users to configure projects and workflows independently.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='soln-ideation'>
                    <div className='soln-ideation-title'>SOLUTION IDEATION</div>
                    <div className='soln-ideation-text'>Addressing core user pain points by automating data ingestion, introducing configurable rules for reconciliation, and streamlining workflows with maker-checker approvals. Key features like role-specific dashboards, real-time notifications, and importing data from Excel to enhance visibility, and reduce manual effort, ensuring a faster and more reliable reconciliation experience.</div>
                    <div className='soln-ideation-quote'>
                      <div className='side-highlight soln-ideation-highlight-height'></div>
                      <div className='soln-ideation-quote-text'>The idea is this - the CFO easily oversees projects through a simple dashboard, while the Account Manager tracks progress and assigns tasks efficiently. Finance Analysts automate data ingestion and apply rules for seamless transaction matching. With role-based access and integration with familiar tools, all stakeholders experience a streamlined, error-free reconciliation process, driving efficiency and growth.</div>
                    </div>
                  </div>
                
                  {/* <div className='vision-div'> */}
                    <div className='vision-title'>Introducing a product that aligns with our vision</div>
                    <div className='vision-text'>While designing this project, we had to make several decisions, as the target users will have multiple different tasks to perform
                        <br />
                        <br />
                        <b>Business Objectives</b>
                        <ul> 
                            <li>Increasing merchant reach and revenue by offering a new SaaS product</li>
                            <li>Introducing an innovative product that solves existing pain-points for the user</li>
                            <li>Build a more efficient system for internal procedures</li>
                        </ul>
                        <br />
                        <b>User Objectives</b>
                        <ul>
                            <li>Reduce the time consumption for large volume entries and ability to download reports easily</li>
                            <li>Getting notified about urgent actions to stay up-to-date</li>
                            <li>Project Summary upfront to check the overall health of the project</li>
                            <li>Getting a role based access to streamline key actions for all users</li>
                        </ul>
                        <br />
                        <b>Design Objectives</b>
                        <ul> 
                            <li>Enabling users with a complete self- serve digital journey for project set-up</li>
                            <li>Building on existing behaviours based on the ERPs or Excel sheets that they us</li>
                            <li>Offering easy-to-understand interactions to reduce requirement of multiple POCs thereby reducing the total time required for tasks</li>
                        </ul>
                    </div>
                  {/* </div> */}

                  <div className='interactions-1'>
                    <div className='interactions-text-1'>
                        <div className='interactions-text-1-title'>Data Ingestion</div>
                        <div className='interactions-text-1-quote'>
                        <div className='side-highlight interactions-text-1-quote-height'></div>
                        <div className='interactions-text-1-quote-text'>
                        This module enables users to choose their desired data stream and customise the ingestion flows
                        </div>
                        </div>
                        <div className='interactions-text-1-text'>
                            <ul>
                                <li>Functionality to upload and preview edited configurations</li>
                                <li>Option to Save configs as draft and revisit later</li>
                                <li>Deactivating and deleting functionalities to terminate irrelevant configurations</li>
                            </ul>
                        </div>
                    </div>
                    <img className='interactions-image-1' src={DataIngestionImg} alt="Data Ingestion"></img>
                  </div>

                  <div className='interactions-2'>
                    <div className='interactions-text-2'>
                        <div className='interactions-text-1-title'>Data Transformation</div>
                        <div className='interactions-text-1-quote'>
                        <div className='side-highlight interactions-text-1-quote-height-2'></div>
                        <div className='interactions-text-1-quote-text'>
                        Enables users to format required columns for configurations to ensure seamless reconciliation
                        </div>
                        </div>
                        <div className='interactions-text-1-text'>
                            <ul>
                                <li>Functionality to choose formatting type based on your value type (eg. Arithmetic conversions for Numeric)</li>
                                <li>Option to reflect changes in new or existing columns</li>
                                <li>Preview configurations to see newly added columns</li>
                            </ul>
                        </div>
                    </div>
                    <img className='interactions-image-2' src={DataTransformationImg} alt="Data Transformation"></img>
                  </div>

                  <div className='interactions-3'>
                    <div className='interactions-text-3'>
                        <div className='interactions-text-1-title'>Rule set-up</div>
                        <div className='interactions-text-1-quote'>
                        <div className='side-highlight interactions-text-1-quote-height-3'></div>
                        <div className='interactions-text-1-quote-text'>
                        Enables users to define their configuration rules
                        </div>
                        </div>
                        <div className='interactions-text-1-text'>
                            <ul>
                                <li>Functionality to add new rules and preview edited rules</li>
                                <li>Option to save rules as draft and revisit later</li>
                                <li>Deactivating and deleting functionalities to terminate irrelevant configurations</li>
                            </ul>
                        </div>
                    </div>
                    <img className='interactions-image-3' src={RuleSetupImg} alt="Rule Setup"></img>
                  </div>

                  <div className='interactions-4'>
                    <div className='interactions-text-4'>
                        <div className='interactions-text-1-title'>Contra Rule set-up</div>
                        <div className='interactions-text-1-quote'>
                        <div className='side-highlight interactions-text-1-quote-height-4'></div>
                        <div className='interactions-text-1-quote-text'>
                        Enables users to knock-off multiple entries within Order Book based on the defined contra rules
                        </div>
                        </div>
                        <div className='interactions-text-1-text'>
                            <ul>
                                <li>Functionality to add new rules and preview edited rules</li>
                                <li>Optional step in the project set-up journey</li>
                                <li>Timeline for date off-set, giving a relevant timeline</li>
                                <li>Option to drag and set relevant priority to each rule</li>
                            </ul>
                        </div>
                    </div>
                    <img className='interactions-image-4' src={ContraRuleSetupImg} alt="Contra Rule Set-Up"></img>
                  </div>

                  <div className='interactions-5'>
                    <div className='interactions-text-5'>
                        <div className='interactions-text-1-title'>Column Mapping</div>
                        <div className='interactions-text-1-quote'>
                        <div className='side-highlight interactions-text-1-quote-height-5'></div>
                        <div className='interactions-text-1-quote-text'>
                        Enables users to map the columns for configs that haven’t been configured previously to global attributes defined on the base configs of each book
                        </div>
                        </div>
                        <div className='interactions-text-1-text'>
                            <ul>
                                <li>Functionality to columns to match the predefined global attributes</li>
                                <li>Option to define each mapped column to a value type for example string, numeric or date.</li>
                            </ul>
                        </div>
                    </div>
                    <img className='interactions-image-5' src={ColumnMappingImg} alt="Column Mapping"></img>
                  </div>

                  <div className='reflections'>
                    <div className='reflections-title'>Reflections</div>
                    <div className='reflections-text'>
                    Being a very fintech heavy and jargon filled project, the main challenge we faced was to simplify the already tedious task at hand to onboard first time users onto ReconX and set-up their projects in a streamlined manner.  
                      <br /> <br />
                      <b>Achievements:</b>
                      <ul>
                        <li>Enabling users to <b>set-up projects digitally,</b> thereby decreasing the dependency on multiple POCs and time consumption. We are aiming to <b>bring down the project set-up time from a few months to a few days at max!</b></li>
                        <li>Offering <b>role-based access to reduce cognitive load</b> and customise the journeys based on user requirements and responsibilities </li>
                        <li>Crafting Maker-checker flow for critical journeys, accounting for complex Reconciliation nuances</li>
                        <li>Introducing <b>interactions to simplify the lengthy and complex journeys</b></li>
                      </ul>
                      <br />
                      <b>Next Steps:</b>
                      <ul>
                        <li>Further simplification and automation of the process wherever possible</li>
                        <li>Adding keyboard shortcuts to build on to existing user behaviour of using excel</li>
                      </ul>
                    </div>
                  </div>

                </div>;


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

export default ReconX;
