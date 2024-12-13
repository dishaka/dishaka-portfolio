import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import VerifiedBadge from '../../components/featured_internal/verified_badge/VerifiedBadge';
import VerifiedBadgeNext from '../../components/featured_internal/verified_badge/VerifiedBadgeNext';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const verifiedbadge = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <VerifiedBadge />
      <VerifiedBadgeNext />

  </Layout></div>
  );

export default verifiedbadge
