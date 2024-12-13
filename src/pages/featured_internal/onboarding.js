import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import OnBoarding from '../../components/featured_internal/onboarding/OnBoarding';
import OnBoardingNext from '../../components/featured_internal/onboarding/OnBoardingNext';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const onboarding = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <OnBoarding />
      <OnBoardingNext />

  </Layout></div>
  );

export default onboarding
