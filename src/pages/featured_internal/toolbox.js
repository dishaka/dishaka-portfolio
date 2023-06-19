import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import Anchor from '../../components/featured_internal/anchor/Anchor';
import NftOrNot from '../../components/featured_internal/nftornot/nftornot';
import PromptEval from '../../components/featured_internal/prompt_eval/PromptEval';
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
