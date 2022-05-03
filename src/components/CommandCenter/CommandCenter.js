import React from 'react';
import CommandContainer from './components/CommandContainer/CommandContainer';
import InputContainer from './components/InputContainer/InputContainer';
import CoordinatesDisplay from './components/CoordinatesDisplay/CoordinatesDisplay';

const CommandCenter = () => (
  <CommandContainer data-testid="controlZone">
    <h3>Controls</h3>
    <InputContainer />
    <CoordinatesDisplay />
  </CommandContainer>
);

export default CommandCenter;
