const movement = (state, command) => {
  const directionCode = state.orientation + command.type;

  switch (command.type) {
    case 'W':
      if (directionCode === 'NW')
        return { ...state, Y: handleY(state.Y, 'add') };
      if (directionCode === 'SW')
        return { ...state, Y: handleY(state.Y, 'subtract') };
      if (directionCode === 'EW')
        return { ...state, X: handleX(state.X, 'add') };
      if (directionCode === 'WW')
        return { ...state, X: handleX(state.X, 'subtract') };
      break;
    case 'S':
      if (directionCode === 'SS')
        return { ...state, Y: handleY(state.Y, 'add') };
      if (directionCode === 'NS')
        return { ...state, Y: handleY(state.Y, 'subtract') };
      if (directionCode === 'WS')
        return { ...state, X: handleX(state.X, 'add') };
      if (directionCode === 'ES')
        return { ...state, X: handleX(state.X, 'subtract') };
      break;
    case 'A':
    case 'D':
      const newOrientation = turnDirection(state.orientation, command.type);
      return { ...state, orientation: newOrientation };
    case 'C':
      return { ...state };
    default:
      return state;
  }
};

const handleY = (y, operation) => {
  if (operation === 'add') {
    if (y === 100) {
      return 0;
    }
    return y + 1;
  } else if (operation === 'subtract') {
    if (y === 0) {
      return 100;
    }
    return y - 1;
  }
};

const handleX = (x, operation) => {
  if (operation === 'add') {
    if (x === 100) {
      return 0;
    }
    return x + 1;
  } else if (operation === 'subtract') {
    if (x === 0) {
      return 100;
    }
    return x - 1;
  }
};

const turnDirection = (orientation, command) => {
  const directions = ['N', 'E', 'S', 'W'];
  const currentDirection = directions.findIndex(
    (element) => element === orientation
  );

  switch (command) {
    case 'A':
      if (currentDirection === 0) {
        return directions[3];
      }
      return directions[currentDirection - 1];
    case 'D':
      if (currentDirection === 3) {
        return directions[0];
      }
      return directions[currentDirection + 1];
    default:
      return directions[currentDirection];
  }
};

export default movement;
