import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import SoundCloud from '../../components/featured_internal/SoundCloud';
import SoundCloud_Problem from '../../components/featured_internal/SoundCloud_Problem';
import SoundCloud_Empathy from '../../components/featured_internal/SoundCloud_Empathy';
import SoundCloud_Navigation from '../../components/featured_internal/SoundCloud_Navigation';
import SoundCloud_Whats_Next from '../../components/featured_internal/SoundCloud_Whats_Next';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const soundcloud = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>
        <SoundCloud />
        <SoundCloud_Problem />
        <SoundCloud_Empathy />
        <SoundCloud_Navigation />
        <SoundCloud_Whats_Next />
  </Layout>
  </div>
  );

  soundcloud.propTypes = {
    location: PropTypes.object.isRequired,
  };
  

export default soundcloud
