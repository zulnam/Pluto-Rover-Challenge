import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styling/theme';

const TitleContainer = styled.h1`
  grid-column: 1 / span 2;
  font-size: 2.5em;
  margin: 0;
  padding-top: ${theme.baseSizes.md};
`;

const Title = () => <TitleContainer>Rover Command</TitleContainer>;

export default Title;
