import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { navDelay, loaderDelay } from '@utils';

const Styled_Moxie_Challenges_Problems_Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .problems {
    width: 492px;
    height: 198px;
    margin: 40px 0 0 171px;
    @media (max-width: 480px) {
      margin: 0px 0 0px 22px;
      width: 332px;
      height: 191px;
    }
  }

  .problems_h1 {
    width: 70px;
    height: 25px;

    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;

    /* identical to box height, or 25px */
    letter-spacing: 0.01em;

    color: #979797;
    font-family: var(--font-mono);
    @media (max-width: 480px) {
      width: 65px;
      height: 23px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 163.4%;

      /* identical to box height, or 23px */
      letter-spacing: 0.01em;

      color: #979797;
    }
  }

  .problems_p {
    width: 492px;
    height: 153px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;
    margin: 20px 0 0 0;
    color: #000000;
    @media (max-width: 480px) {
      width: 332px;
      height: 154px;
      
      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      
      /* or 130% */
      font-feature-settings: 'cpsp' on;
      
      color: #000000;
      
      margin: 14px 0 0 0;      
    }
  }

  .normal_text {
    width: 485px;
    height: 62px;
    margin: 78px 0 0 392px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    @media (max-width: 480px) {
      width: 302px;
      height: 99px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;

      /* or 133% */
      font-feature-settings: 'cpsp' on;

      color: #000000;


      margin: 66px 0 0 52px;
      padding: 0;
    }
  }

  .normal_text_h1 {
    width: 485px;
    height: 256px;
    margin: 46px 0 40px 392px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    @media (max-width: 480px) {
      height: 305px;
      width: 302px;
      margin: 36px 0 0 52px;
    }

    b {
      font-weight: 600;
      margin: 30px 0 0 0;
      display: block;
      @media (max-width: 480px) {
        margin: 12px 0 0 0;
      }
    }
  }
`;

const Moxie_Challenges_Problems = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="problems">
                <div className="problems_h1">PROBLEM</div>
                <div className='problems_p'>Meaningful engagement at Moxie was very low despite of having group challenges -
                    users were just taking up stand alone workouts and leaving the platform.
                    How could we enhance the marketplace to make it more dynamic and visible?
                </div>
              </div>;
  const two = <div className="normal_text">
                We wanted to understand why the engagement was so low with Moxie and in particular,
                Challenges. Through conversions, data and research, it became clear that we had an
                untapped potential to scale up user behavior. </div>
  const three = <div className='normal_text_h1'>
                  <b>1. Individual classes only.</b>
                  Moxie struggled with attendees only taking stand alone classes.
                  Attendees would take one class and not feel much connect.
                  <b>2. Low visibility.</b>
                  Challenges were hidden away under the profile of an instructor. Unless an attendee went
                  ahead and tried to look, it could not be found. As well as instructors tried to create
                  classes by hacking the class name as a work around.
                  <b>3. Real time activity.</b>
                  Attendees wanted to know all the challenges they could possibly opt for at a single look,
                  and not go hunting for them.
              </div>;


  const items = [one, two, three];

  const whiteBackGround = {
    background: 'white',
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

export default Moxie_Challenges_Problems;
