import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const Styled_Moxie_Challenges_Problems_Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-centre;
  min-height: 100vh;
  font-family: var(--font-sans);

  .problems {
    margin: 0 0 30px 15%;
    color: black;
    font-family: var(--font-sans);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    max-width: 50%;

    @media (max-width: 480px) {
      margin: 0 0 75px 5%;
    }
  }

  .problems h1 {
    font-size: var(--fz-md);
    margin: 0 0 16px 0px;
    padding-right: 60px;
    color: var(--light-slate);
    font-family: var(--font-sans);
  }

  .problems p {
    font-size: var(--fz-xxl);
    font-family: var(--font-sans);
    @media (max-width: 480px) {
      min-width: 100vw;
      padding: 0 40px 0 0;
    }
  }

  .normal_text {
    margin: 0 0 0px 40%;
    padding: 15vh 0 0 10%;
    color: black;
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    font-weight: 400;
    max-width: 50%;

    @media (max-width: 480px) {
      margin: 0 0 0 0;
      padding: 0vh 5% 0 5%;
      min-width: 100vw;
    }
  }

  .normal_text h1 {
    margin-top: 2rem;
    font-size: var(--fz-md);
    margin-bottom: 0.5rem;
    color: black;
    font-weight: 900;
    font-family: var(--font-sans);
    @media (max-width: 480px) {

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
                <h1>PROBLEM</h1>
                <p>Meaningful engagement at Moxie was very low despite of having group challenges -
                    users were just taking up stand alone workouts and leaving the platform.
                    How could we enhance the marketplace to make it more dynamic and visible?
                </p>
              </div>;
  const two = <div className="normal_text">
                We wanted to understand why the engagement was so low with Moxie and in particular,
                Challenges. Through conversions, data and research, it became clear that we had an
                untapped potential to scale up user behavior.
                <h1>1. Individual classes only.</h1>
                Moxie struggled with attendees only taking stand alone classes.
                Attendees would take one class and not feel much connect.
                <h1>2. Low visibility.</h1>
                Challenges were hidden away under the profile of an instructor. Unless an attendee went
                ahead and tried to look, it could not be found. As well as instructors tried to create
                classes by hacking the class name as a work around.
                <h1>3. Real time activity.</h1>
                Attendees wanted to know all the challenges they could possibly opt for at a single look,
                and not go hunting for them.
              </div>;


  const items = [one, two];

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
