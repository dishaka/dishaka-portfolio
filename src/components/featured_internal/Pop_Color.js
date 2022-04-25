import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import pop_imgtitle from '../../images/Pop_title.png'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .mainimg {
    min-width: 961.32px;
    max-height: 431px;
    margin: 28px 0 0 19px;
    @media (max-width: 480px) {
      min-width: 0;
      max-height: 149px;
      max-width: 332px;
      margin: 7px 0 6px 22px;
    }
  }
`;

const Pop_Color = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <img className="mainimg" src={pop_imgtitle} alt="Main img"></img>;

  const items = [one];

  const colorBackGround = {
    background: '#03DAC5',
  }

  return (
    <div style={colorBackGround}>
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

export default Pop_Color;
