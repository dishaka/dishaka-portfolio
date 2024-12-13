import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const Styled_Moxie_Challenges_Problems_Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;

  .content {
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
    width: 367px;
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

`;

const ReconXNext = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  

  const one = <a className='content' href='\featured_internal\nftornot'>
                <div className='next'>NEXT PROJECT >></div>
                <div className='next_project'>Nft or Not</div>
                </a>
  const two = <div className='line'></div>

  const items = [one, two];

  const whiteBackGround = {
    background: '#0000000d',
  }

  return (
      <>
      <div style={whiteBackGround}>
    <Styled_Moxie_Challenges_Problems_Section>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Styled_Moxie_Challenges_Problems_Section>
    </div>
    </>
  );
};

export default ReconXNext;
