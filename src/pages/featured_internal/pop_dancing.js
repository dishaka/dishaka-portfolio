import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Pop_Dancing from '../../components/featured_internal/Pop_Dancing';
import Pop_Color from '../../components/featured_internal/Pop_Color';
import Pop_Problem from '../../components/featured_internal/Pop_Problem';
import Pop_Empathy from '../../components/featured_internal/Pop_Empathy';
import Pop_Journey from '../../components/featured_internal/Pop_Journey';
import Pop_Description from '../../components/featured_internal/Pop_Description';
import Pop_Outcome from '../../components/featured_internal/Pop_Outcome';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const pop_dancing = ({ location }) => (
    <div style={{maxWidth: '100vw'}}>
      <Layout location={location}>
        <Pop_Dancing />
        <Pop_Color />
        <Pop_Problem />
        <Pop_Empathy />
        <Pop_Journey />
        <Pop_Description />
        <Pop_Outcome />
  </Layout></div>
  );

  pop_dancing.propTypes = {
    location: PropTypes.object.isRequired,
  };
  

export default pop_dancing
