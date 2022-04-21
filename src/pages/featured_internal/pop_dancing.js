import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Pop_Dancing from '../../components/featured_internal/Pop_Dancing';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const pop_dancing = ({ location }) => (
    <div style={{maxWidth: '100vw'}}>
      <Layout location={location}>
        <Pop_Dancing />
  </Layout></div>
  );

  pop_dancing.propTypes = {
    location: PropTypes.object.isRequired,
  };
  

export default pop_dancing