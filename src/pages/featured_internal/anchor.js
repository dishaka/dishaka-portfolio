import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Moxie_challenges from '../../components/featured_internal/Moxie_Challenges';
import Anchor from '../../components/featured_internal/anchor/Anchor';
import Anchor_Whats_Next from '../../components/featured_internal/anchor/AnchorNext';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const anchor = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <Anchor />
      <Anchor_Whats_Next />

  </Layout></div>
  );

export default anchor
