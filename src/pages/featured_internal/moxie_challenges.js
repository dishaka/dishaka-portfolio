import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Moxie_challenges from '../../components/featured_internal/Moxie_Challenges';
import Moxie_Challenges_Problems from '../../components/featured_internal/Moxie_Challenges_Problems';
import Moxie_Challenges_Find_Challenges from '../../components/featured_internal/Moxie_Challenges_Find_Challenges';
import Moxie_Challenges_Hero_Carousel from '../../components/featured_internal/Moxie_Challenges_Hero_Carousel';
import Moxie_Challenges_Exp_Ite from '../../components/featured_internal/Moxie_Challenges_Exp_Ite';
import Moxie_Challenges_Cards_Design from '../../components/featured_internal/Moxie_Challenges_Cards_Design';
import Moxie_Challenges_Outcome from '../../components/featured_internal/Moxie_Challenges_Outcome';
import Whats_Next_Featured from '../../components/featured_internal/Whats_Next_Featured';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const moxie_challenges = ({ location }) => (
    <div style={{maxWidth: '100vw'}}>
      <Layout location={location}>

      <Moxie_challenges />
      <Moxie_Challenges_Problems />
      <Moxie_Challenges_Find_Challenges />
      <Moxie_Challenges_Hero_Carousel />
      <Moxie_Challenges_Exp_Ite />
      <Moxie_Challenges_Cards_Design />
      <Moxie_Challenges_Outcome />
      <Whats_Next_Featured />

  </Layout></div>
  );

  moxie_challenges.propTypes = {
    location: PropTypes.object.isRequired,
  };
  

export default moxie_challenges