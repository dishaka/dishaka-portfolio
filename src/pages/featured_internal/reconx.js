import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import ReconX from '../../components/featured_internal/reconx/ReconX';
import ReconXNext from '../../components/featured_internal/reconx/ReconXNext';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const reconx = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <ReconX />
      <ReconXNext />

  </Layout></div>
  );

export default reconx
