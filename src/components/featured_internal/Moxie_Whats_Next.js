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
  }

  .line {
    width: 1px;
    height: 165px;
    border-left: 1px solid var(--pink);
    margin: 48px 0 -230px 0;
  }

`;

const Moxie_Whats_Next = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  

  const one = <a className='content' href='pop_dancing'>
                <div className='next'>NEXT PROJECT >></div>
                <div className='next_project'>POP Dancing</div>
                </a>
  const two = <div className='line'></div>

  const items = [one, two];

  const whiteBackGround = {
    background: '#FAF4F4',
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

export default Moxie_Whats_Next;
