import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import MainImg from '../../../../src/images/anchor/anchor_title.png';
import WhoWhatWhyImg from '../../../../src/images/anchor/anchor_who_what_why.png';
import UserGroupImg1 from '../../../../src/images/anchor/anchor_usergrp1.png';
import UserGroupImg2 from '../../../../src/images/anchor/anchor_usergrp2.png';
import UserGroupImg3 from '../../../../src/images/anchor/anchor_usergrp3.png';
import EmpoweringMemoriesImg from '../../../../src/images/anchor/anchor_empowering_memories.png';
import TypographyImg from '../../../../src/images/anchor/anchor_typography.png';
import ColorPaletteImg from '../../../../src/images/anchor/anchor_color.png';
import InteractionsImg1 from '../../../../src/images/anchor/anchor_interactions1.png';
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
    min-height: 725px;                                        
    max-width: 1000px;
    max-height: 726px;
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
    height: 237px;

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
    height: 175px;
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
    width: 238px;
    height: 45px;

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
    height: 130px;
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
    height: 218px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 307px;
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

  .anc-quote-text {
    width: 480px;
    height: 155px;
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
    height: 59px;
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
    height: 186px;
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
    height: 107px;
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
    height: 288px;
    @media (max-width: 480px) {
      height: 390px;
    }
  }

  .soln-ideation-quote-text {
    width: 480px;
    height: 231px;
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

  .img-empowering-memories {
    grid-column: 1 / 4;
    grid-row: 8 / 8;
    max-width: 1000px;
    min-width: 999px;
    max-height: 705px;
    min-height: 704px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 11 / 11;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .typography {
    grid-column: 2 / 3;
    grid-row: 9 / 9;
    width: 500px;
    height: 164px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 12 / 12;
      width: auto;
      height: auto;
    }
  }

  .typography-title {
    width: 238px;
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

  .typography-text {
    width: 500px;
    height: 89px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* or 138% */

    font-feature-settings: 'cpsp' on;

    color: #636363;
    @media (max-width: 480px) {
      margin: 30px 0 0 0;
      width: auto;
      height: auto;
    }
    
  }

  .img-typography {
    grid-column: span 4;
    grid-row: 10 / 10;
    max-width: 1000px;
    min-width: 999px;
    max-height: 311px;
    min-height: 310px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 13 / 13;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .color-palatte {
    grid-column: 2 / 3;
    grid-row: 11 / 11;
    width: 238px;
    height: 45px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    /* or 59px */


    color: #000000;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 14 / 14;
      width: auto;
      height: auto;
    }
  }

  .img-color-palette {
    grid-column: span 4;
    grid-row: 12 / 12;
    max-width: 1000px;
    min-width: 999px;
    max-height: 311px;
    min-height: 310px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 15 / 15;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }    
  }

  .acc-neuro {
    grid-column: 2 / 3;
    grid-row: 13 / 13;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 16 / 16;
      width: auto;
      height: auto;
    }
  }

  .acc-neuro-title {
    width: 500px;
    height: 68px;

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

  .acc-neuro-text {
    width: 500px;
    height: 240px;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .acc-neuro-text ul {
    margin: 0 0 0 25px;
    padding: 0;
  }

  .interactions-text-1 {
    grid-column: 1 / 2;
    grid-row: 14 / 14;
    width: 500px;
    margin: 162px 0 0 0;
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
    width: 500px;

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

  .interactions-text-1-quote {
    width: 500px;
    height: 84px;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 84px;
    }
  }

  .interactions-text-1-quote-height {
    height: 84px; 
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-1-quote-text {
    width: 480px;
    height: 50px;
    margin: 17px 0 0 0;
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
    grid-column: 3 / 4;
    grid-row: 14 / 14;
    // margin: 0 0 0 107px;
    max-width: 279px;
    min-width: 278px;
    max-height: 603px;
    min-height: 602px;
    border-radius: 13px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-1-container {
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 14 / 14;
    width: 293.65px;
    height: 620.13px;
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

  .interactions-image-2 {
    grid-column: 1 / 2;
    grid-row: 15 / 15;
    max-width: 281px;
    min-width: 280px;
    max-height: 608px;
    min-height: 607px;
    border-radius: 13px;
    // margin: 0 0 0 107px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-2-container {
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 1;
    grid-row: 15 / 15;
    width: 295px;
    height: 622px;
    border: 1.93188px solid #000000;
    border-radius: 17.3869px;
    @media (max-width: 480px) {
      translate: -50% 0;
      grid-column: 1 / 1;
      grid-row: 20 / 20;
      margin: -40px 0 0 0;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-text-2 {
    grid-column: 3 / 4;
    grid-row: 15 / 15;
    width: 500px;
    margin: 200.5px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 19 / 19;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-2-quote {
    width: 500px;
    height: 84px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 100px;
    }
  }

  .interactions-text-2-quote-height {
    height: 84px;
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-2-quote-text {
    width: 480px;
    height: 50px;
    margin: 17px 0 0 0;
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
      margin: 13px 0 0 0;
    }
  }

  .interactions-text-2-text {
    width: 500px;
    height: 132px;
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
      width: 325px;
      height: auto;
    }

  }

  .interactions-text-3 {
    grid-column: 1 / 2;
    grid-row: 16 / 16;
    width: 500px;
    margin: 220.5px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 21 / 21;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-3-text {
    width: 500px;
    height: 64px;
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

  .interactions-text-3-quote {
    width: 500px;
    height: 84px;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 100px;
    }
  }

  .interactions-text-3-quote-height {
    height: 84px;
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-3-quote-text {
    width: 480px;
    height: 50px;
    margin: 17px 0 0 0;
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
      margin: 13px 0 0 0;
    }

  }

  .interactions-image-3 {
    grid-column: 3 / 4;
    grid-row: 16 / 16;
    max-width: 280px;
    min-width: 279px;
    max-height: 604px;
    min-height: 603px;
    border-radius: 13px;
    // margin: 0 0 0 107px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-3-container {
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 16 / 16;
    width: 293px;
    height: 619px;
    border: 1.93188px solid #000000;
    border-radius: 17.3869px;
    @media (max-width: 480px) {
      translate: -50% 0;
      grid-column: 1 / 1;
      grid-row: 22 / 22;
      margin: -40px 0 0 0;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-4 {
    grid-column: 1 / 2;
    grid-row: 17 / 17;
    max-width: 280px;
    min-width: 279px;
    max-height: 606px;
    min-height: 605px;
    border-radius: 13px;
    // margin: 0 0 0 107px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-4-container {
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 1;
    grid-row: 17 / 17;
    width: 294px;
    height: 623px;
    border: 1.93188px solid #000000;
    border-radius: 17.3869px;
    @media (max-width: 480px) {
      translate: -50% 0;
      grid-column: 1 / 1;
      grid-row: 24 / 24;
      margin: -40px 0 0 0;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-text-4 {
    grid-column: 3 / 4;
    grid-row: 17 / 17;
    width: 500px;
    margin: 164.5px 0 0 0;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 23 / 23;
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .interactions-text-4-quote {
    width: 500px;
    height: 156px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: auto;
      height: 180px;
    }
  }

  .interactions-text-4-quote-height {
    height: 156px;
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-4-quote-text {
    width: 480px;
    height: 104px;
    margin: 26px 0 0 0;
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

  .interactions-text-4-text {
    width: 500px;
    height: 108px;
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

  .interactions-text-5-quote {
    grid-column: 1 / 2;
    grid-row: 18 / 18;
    margin: 244.5px 0 0 0;
    width: 500px;
    height: 190px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 25 / 25;
      margin: 0;
      width: auto;
      height: 232px;
    }
  }

  .interactions-text-5-quote-height {
    height: 190px;
    @media (max-width: 480px) {
      height: auto;
    }
  }

  .interactions-text-5-quote-text {
    margin: 29px 0 0 0;
    width: 480px;
    height: 132px;

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

  .interactions-image-5 {
    grid-column: 3 / 4;
    grid-row: 18 / 18;
    max-width: 279px;
    min-width: 278px;
    max-height: 604px;
    min-height: 603px;
    border-radius: 13px;
    // margin: 0 0 0 107px;
    @media (max-width: 480px) {
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .interactions-image-5-container {
    position: relative;
    display: flex;
    left: 50%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 18 / 18;
    width: 294px;
    height: 621px;
    border: 1.93188px solid #000000;
    border-radius: 17.3869px;
    @media (max-width: 480px) {
      translate: -50% 0;
      grid-column: 1 / 1;
      grid-row: 26 / 26;
      margin: -40px 0 0 0;
      max-width: auto;
      min-width: auto;
      max-height: auto;
      min-height: auto;
    }
  }

  .reflections {
    grid-column: 2 / 3;
    grid-row: 19 / 19;
    width: 500px;
    height: 366px;
    @media (max-width: 480px) {
      grid-column: 1 / 1;
      grid-row: 27 / 27;
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
    height: 304px;
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


const Anchor = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="Title_MoxieChallenges">
              <div className='Title_MoxieChallenges_h1'>CASE STUDY - 2022</div>
              <div className='Title_MoxieChallenges_h2'>Anchor : Making memory loss easier</div>
              </div>;
  const two = <img className="mainimg" src={MainImg} alt="Main img"></img>;
  const three = <div className="text_holder">
                  <div className="left_text">
                  A digital diary that captures the moment elaborately for the person suffering and their family members and triggers back them in future when similar conditions exist - such as time of day, place, and weather conditions.
                  </div>
                  <div className="role">
                    <div className='header'>MY ROLE</div>
                    <div className="content">UX Research, Design discovery and ideation, interaction design and prototype</div>
                  </div>
                  <div className='team'>
                    <div className='header'>TEAM</div>
                    <div className="content">Personal Project, Dishaka Tarafdar</div>
                    <div className='header-tag'>TAGS</div>
                    <div className="content">#UserResearch  #UXCaseStudy #10daysprint</div>
                  </div>
                  <div className='chal-out'>
                  <div className='chal'>
                    <div className='chal-out-title'>CHALLENGE</div>
                    <div className='chal-out-text chal-margin'>People who lose their memory because of some disease like dementia have to transition into their new life by relying on their other senses more to cope with memory loss. </div>
                  </div>
                  <div className='out'>
                    <div className='chal-out-title'>OUTCOME</div>
                    <div className='chal-out-text out-margin'>A digital diary that captures the moment elaborately for the person suffering and their family members and triggers back them in future when similar conditions exist - such as time of day, place, and weather conditions.</div>
                  </div>
                  </div>
                  <div className='what-is-anchor'>
                    <div className='anc-title'>What is Anchor?</div>
                    <div className='anc-text'>Anchor is a digital diary that creates a record of memories that supports people experiencing a gradual loss of memory and allows them to capture impressions of daily life. It is a diary of perceptions that can be stored and recalled in the future when similar conditions exist - such as time of day, place, and weather. It is designed to trigger memories and reminiscences in people with dementia. Also, share these memories with their close and trusted family and friends.</div>
                    <div className='anc-quote'>
                      <div className='side-highlight'></div>
                      <div className='anc-quote-text'>
                      The user starts to capture impressions of his daily life on his phone using the app. Anchor then probes the user with provocative questions regarding that memory so that they can describe that moment in detail. As time passes, the app generates a library of such moments; users can scan and document existing memories too.</div>
                    </div>
                  </div>
                  <img className='img-who-what-why' src={WhoWhatWhyImg} alt="Who What Why"></img>
                  <div className='user-group'>
                    <div className='user-group-title'>User Group</div>
                    <div className='user-group-text'>
                      <div className='user-group-text-title'>WHO IS IT FOR?</div>
                      <div className='user-group-text-text'>This app is designed for people gradually losing their memory because of diseases leading to gradual memory loss, like Alzheimer's. These diseases can span from a few months to a few years to a few decades for memory loss.</div>
                    </div>
                    <div className='user-group-quote'>
                      <div className='side-highlight highlight-user-group-height'></div>
                      <div className='user-group-quote-text'>Alzheimer's disease is most common in people over the age of 60. The risk of Alzheimer's disease and other types of dementia increases with age, affecting 1 in 14 people over the age of 65 and 1 in every 6 people over the age of 80. ~ Alzheimer's disease (NHS)</div>
                    </div>
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
                  </div>
                  <div className='user-group-imgs'>
                    <div className='user-group-img-1'>
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
                    </div>
                  </div>
                  <div className='chal-out narrow-statement-block'>
                    <div className='narrow-statement'>Narrowing down the problem statement</div>
                    <div className='key-findings'>
                      <div className='key-findings-title'>KEY FINDINGS</div>
                      <div className='key-findings-text'>
                        <ul>
                          <li>A routine for their loved ones helps, life having a semblance of <b>ordinariness and uniformity</b></li>
                          <li>It's painful for family members to watch their <b>loved ones drift</b> away</li>
                          <li><b>Close bonds</b> and relationships are the most <b>effective medicine</b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='soln-ideation'>
                    <div className='soln-ideation-title'>SOLUTION IDEATION</div>
                    <div className='soln-ideation-text'>As a designer, I cannot do much to give them their memory back. Hence, I decided to focus on helping people caring for someone with the disease, and the people affected themselves. How can I do that? Capturing precious moments for them to cherish and reminisce leads to better relationships with themselves and their loved ones.</div>
                    <div className='soln-ideation-quote'>
                      <div className='side-highlight soln-ideation-highlight-height'></div>
                      <div className='soln-ideation-quote-text'>The idea is this - Person with dementia makes a memory, and either the caretakers or the person themselves can capture it on the app. Later if the location and weather conditions are the same, it would prompt them, or if you want to view the memory on the app, leading to reminiscing memories and inspiring gratitude for their loved ones. <br />
                      This would lead them to remember themselves and the family members as they were and keep learning new things about their loved one.</div>
                    </div>
                  </div>
                  <img className='img-empowering-memories' src={EmpoweringMemoriesImg} alt="Empowering Memories"></img>
                  <div className='typography'>
                    <div className='typography-title'>Typography</div>
                    <div className='typography-text'>I wanted to use a clear and readable sans-serif font for this project. So, I selected Inter as the font for the app. <br />
                    App uses three font weights, Bold, Medium and Regular, to create a visual hierarchy.</div>
                  </div>
                  <img className='img-typography' src={TypographyImg} alt="Typography"></img>
                  <div className='color-palatte'>Color Palette</div>
                  <img className='img-color-palette' src={ColorPaletteImg} alt="Color Palette"></img>
                  <div className='acc-neuro'>
                    <div className='acc-neuro-title'>Accessibility for neurological disorders</div>
                    <div className='acc-neuro-text'>
                    While designing this project, I had to make several decisions, as the target audience would lose their memory (and declining vision due to age) over some time.
                    <ul>
                      <li>Using sans serif fonts, as letterforms tend to be <b>easier to read.</b></li>
                      <li><b>Larger text</b> sizes (and higher contrasts) provide clear information to the eye. Especially important for older people whose eyesight declines with age.</li>
                      <li><b>Avoid using multiple fonts</b> unnecessarily. It can make the user interface and content confusing.</li>
                      <li><b>Reducing visual clutter</b> makes it easier for users to focus on content as less information competes for their attention.</li>
                    </ul>
                    </div>
                  </div>
                  <div className='interactions-text-1'>
                    <div className='interactions-text-1-title'>Interactions</div>
                    <div className='interactions-text-1-text'>The UI needed to be simple, with just one main action at a time, so it is easy to follow. <br />
                    Also, the app needs to ensure that it does not become too intrusive while saving a moment. The ability to quit the flow should be possible whenever the user wants.</div>
                    <div className='interactions-text-1-quote'>
                      <div className='side-highlight interactions-text-1-quote-height'></div>
                      <div className='interactions-text-1-quote-text'>
                        Reducing visual clutter,<br />
                        One action at a time.
                      </div>
                    </div>
                  </div>
                  <div className='interactions-image-1-container'>
                    <img className='interactions-image-1' src={InteractionsImg1} alt="Interaction 1"></img>
                  </div>
                  <div className='interactions-image-2-container'>
                    <img className='interactions-image-2' src={InteractionsImg2} alt="Interaction 2"></img>
                  </div>
                  <div className='interactions-text-2'>
                    <div className='interactions-text-2-quote'>
                    <div className='side-highlight interactions-text-2-quote-height'></div>
                      <div className='interactions-text-2-quote-text'>The user can start to capture his memory through images, text, audio location or music.</div>
                    </div>
                    <div className='interactions-text-2-text'>
                    The user starts to capture impressions of his daily life on his phone using Anchor. 
                    <br /> <br />
                    The user captures the moment in the app by either taking image, recording audio, writing a note or storing a location. The user triggers these moments when the conditions in which the moment was anchored match that day.
                    </div>
                  </div>
                  <div className='interactions-text-3'>
                    <div className='interactions-text-3-text'>This example shows how a memory can be anchored easily. Also, it shows how the phone captures location and weather data and asks provocative questions to document the moment in detail.</div>
                    <div className='interactions-text-3-quote'>
                      <div className='side-highlight interactions-text-3-quote-height'></div>
                      <div className='interactions-text-3-quote-text'>
                        "I spent this last sunset with my son on the Pondicherry beaches before he leaves for Canada for his graduation..."
                      </div>
                    </div>
                  </div>
                  <div className='interactions-image-3-container'>
                    <img className='interactions-image-3' src={InteractionsImg3} alt="Interaction 3"></img>
                  </div>
                  <div className='interactions-image-4-container'>
                    <img className='interactions-image-4' src={InteractionsImg4} alt="Interaction 4"></img>
                  </div>
                  <div className='interactions-text-4'>
                    <div className='interactions-text-4-quote'>
                    <div className='side-highlight interactions-text-4-quote-height'></div>
                      <div className='interactions-text-4-quote-text'>People usually skip minute details when they are describing something such as a moment. So the app suggests provocative questions to assist the user for describing that moment elaborately.</div>
                    </div>
                    <div className='interactions-text-4-text'>
                      The user starts to capture impressions of his daily life on his phone using Anchor.
                      <br /><br />
                      Using VUI for recording the description of memories makes it even easier than typing, as typing can feel like a task (also taking accessibility into consideration)
                    </div>
                  </div>
                  <div className='interactions-text-5-quote'>
                    <div className='side-highlight interactions-text-5-quote-height'></div>
                    <div className='interactions-text-5-quote-text'>
                    In the future, when similar conditions exist, in this case, the weather and the location, the user will be notified that he has a memory anchored for this condition. He will be able to reminisce about that moment and feel closer to himself and his loved ones.
                    </div>
                  </div>
                  <div className='interactions-image-5-container'>
                    <img className='interactions-image-5' src={InteractionsImg5} alt="Interaction 5"></img>
                  </div>
                  <div className='reflections'>
                    <div className='reflections-title'>Reflections</div>
                    <div className='reflections-text'>
                      Being a personal sprint challenge, I had a few days to do this. I would still like to user-test it as much as possible to get feedback, check the prototype's workability, and re-iterate to fine-tune the interactions and the user journey further.
                      <br /> <br />
                      Some more directions that can be explored with the same idea are:
                      <ul>
                        <li>For patients who have gradual <b>vision loss</b>, a means to store their neighbourhood and points of interest in the form of memory anchors.</li>
                        <li>Digital <b>diary of memories from parents to their children</b>. They can store all memories in the app, and the child can relive the moments through the app.</li>
                      </ul>
                      <br />
                      Also some things I explored and learnt:
                      <ul>
                        <li>Identifying opportunity spaces and implement VUI intelligence</li>
                        <li>Balancing accessibility in implementation</li>
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

export default Anchor;
