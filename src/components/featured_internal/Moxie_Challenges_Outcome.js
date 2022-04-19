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

const Moxie_Challenges_Outcome = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="problems">
                <h1>OUTCOME</h1>
                <p>This was a very fun and exciting project for me to work on as it provided real value,
                  involved a ton of research and not to mention one of my first hands on projects. However
                  shifting priorities and changing roadmaps have delayed the launch of this feature.
                  Still I learned some important key takeaways from this project related to product and
                  business processes.
                </p>
              </div>;
  const two = <div className="normal_text">
                This was a very fun and exciting project for me to work on as it provided real value,
                involved a ton of research and not to mention one of my first hands on projects.
                However shifting priorities and changing roadmaps have delayed the launch of this feature.
                Still I learned some important key takeaways from this project related to product and
                business processes.
                <h1>1. How to adapt to changing requirements</h1>
                New timelines, resourcing issues, reprioritization meant the scope of
                the project was constantly changing.
                I had to adapt to these changes & still deliver the best designs within tight deadlines.
                <h1>2. Don’t overpromise and underdeliver</h1>
                I learned how to define a true MVP vs something that is just super packed up with
                excess features which makes it cluttered and therefore not shippable.
                <h1>3. Choosing what we skip</h1>
                There were so many more features that we could tackle. However every single one of
                them would increase the scope of the project and make it heavy. For example- we
                initially did think of using filters on the Challenges page for navigating through
                search but that would become a distraction and add additional clutter to the
                page as well.
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

export default Moxie_Challenges_Outcome;
