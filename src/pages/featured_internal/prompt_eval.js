import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import PromptEval from '../../components/featured_internal/prompt_eval/PromptEval';
import PromptEval_Whats_Next from '../../components/featured_internal/prompt_eval/PromptEvalNext';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const anchor = ({ location }) => (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Layout location={location}>

      <PromptEval />
      <PromptEval_Whats_Next />

  </Layout></div>
  );

export default anchor
