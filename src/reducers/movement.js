
const movement = (state, command) => {
    const directionCode = state.orientation + command.type;

  switch(command.type) {
    case 'F':
        if (directionCode === 'NF') return {...state, Y: handleY(state.Y, 'add')};
        if (directionCode === 'SF') return {...state, Y: handleY(state.Y, 'subtract')};
        if (directionCode === 'EF') return {...state, X: handleX(state.X, 'add')};
        if (directionCode === 'WF') return {...state, X: handleX(state.X, 'subtract')};
        break;
    case 'B':
        if (directionCode === 'SB') return {...state, Y: handleY(state.Y, 'add')};
        if (directionCode === 'NB') return {...state, Y: handleY(state.Y, 'subtract')};
        if (directionCode === 'WB') return {...state, X: handleX(state.X, 'add')};
        if (directionCode === 'EB') return {...state, X: handleX(state.X, 'subtract')};
        break;
    case 'L':
    case 'R':
        const newOrientation = turnDirection(state.orientation, command.type);
        return {...state, orientation: newOrientation};
    case 'C':
        return {...state};
    default:
        return state;
  };
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
    };
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
    };
};

const turnDirection = (orientation, command) => {
    const directions = ['N', 'E', 'S', 'W'];
    const currentDirection = directions.findIndex((element) => element === orientation );

    switch(command) {
        case 'L':
            if (currentDirection === 0) { return directions[3]; }
            return directions[currentDirection - 1];
        case 'R':
            if (currentDirection === 3) { return directions[0]; }
            return directions[currentDirection + 1];
        default:
            return directions[currentDirection];
    };
};

export default movement;