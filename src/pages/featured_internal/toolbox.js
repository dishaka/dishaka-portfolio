import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Toolbox from '../../components/featured_internal/toolbox/Toolbox';
import ToolBox_Whats_Next from '../../components/featured_internal/toolbox/ToolboxNext';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const anchor = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <Toolbox />
      <ToolBox_Whats_Next />

  </Layout></div>
  );

export default anchor
