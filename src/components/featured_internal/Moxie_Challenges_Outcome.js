import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const Styled_Moxie_Challenges_Problems_Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .outcome {
    width: 492px;
    height: 287px;
    margin: 80px 0 0 155px;
    @media (max-width: 480px) {
      margin: 0 0 0px 22px;
      width: 330px;
      height: 273px;
    }
  }

  .outcome_h1 {
    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 163.4%;

    /* identical to box height, or 25px */
    letter-spacing: 0.01em;

    color: #979797;
    @media (max-width: 480px) {
      width: 72px;
      height: 25px;

      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 163.4%;

      /* identical to box height, or 25px */
      letter-spacing: 0.01em;

      color: #979797;
    }
  }

  .outcome_p {
    width: 492px;
    height: 242px;
    left: 519px;
    top: 10816px;

    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    /* or 125% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    margin: 20px 0 0 0;

    @media (max-width: 480px) {
      width: 332px;
      height: 236px;
      left: 22px;
      top: 11252px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;

      /* or 130% */
      font-feature-settings: 'cpsp' on;

      color: #000000;
      margin: 12px 0 0 0;
    }
  }

  .normal_text {
    width: 485px;
    height: 316px;
    width: 485px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    /* or 133% */
    font-feature-settings: 'cpsp' on;

    color: #000000;
    margin: 80px 0 0 376px;
    @media (max-width: 480px) {
      margin: 30px 0 0 52px;
      // padding: 0vh 5% 0 5%;
      min-width: 301px;
      width: 302px;
      height: 400px;
      width: 302px;
      left: 52px;
      top: 11762px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;

      /* or 133% */
      font-feature-settings: 'cpsp' on;

      color: #000000;
    }
  }

  b {
    font-weight: 600;
    margin: 30px 0 0 0;
    display: block;
    @media (max-width: 480px) {
      margin: 12px 0 0 0;
    }
  }

`;

const Moxie_Challenges_Outcome = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="outcome">
                <div className='outcome_h1' >OUTCOME</div>
                <div className='outcome_p'>This was a very fun and exciting project for me to work on as it provided real value,
                  involved a ton of research and not to mention one of my first hands on projects. However
                  shifting priorities and changing roadmaps have delayed the launch of this feature.
                  Still I learned some important key takeaways from this project related to product and
                  business processes.
                </div>
              </div>;
  const two = <div className="normal_text">
                <b>1. How to adapt to changing requirements</b>
                New timelines, resourcing issues, reprioritization meant the scope of
                the project was constantly changing.
                I had to adapt to these changes & still deliver the best designs within tight deadlines.
                <b>2. Don’t overpromise and underdeliver</b>
                I learned how to define a true MVP vs something that is just super packed up with
                excess features which makes it cluttered and therefore not shippable.
                <b>3. Choosing what we skip</b>
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
