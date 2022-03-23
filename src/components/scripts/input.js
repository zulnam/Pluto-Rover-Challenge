/**
 *
 * @param {object} currentCoordinates
 * @param {string} commandKey
 * @param {array} obstacleCoordinates
 * @returns {boolean} - returns true if collision is detected
 *
 * Checks for possible collisions based on movement command, current currentCoordinates
 * and known obstacles
 *
 */
export const collisionCheck = (
  currentCoordinates,
  commandKey,
  obstacleCoordinates
) => {
  const orientation = currentCoordinates.orientation;

  /* North collision check */
  if (orientation === 'N') {
    if (commandKey === 'W') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y + 1 &&
            elem.X === currentCoordinates.X
        )
      ) {
        return true;
      }
      return false;
    }
    if (commandKey === 'S') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y - 1 &&
            elem.X === currentCoordinates.X
        )
      ) {
        return true;
      }
      return false;
    }
  }

  /* East collision check */
  if (orientation === 'E') {
    if (commandKey === 'W') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y &&
            elem.X === currentCoordinates.X + 1
        )
      ) {
        return true;
      }
      return false;
    }
    if (commandKey === 'S') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y &&
            elem.X === currentCoordinates.X - 1
        )
      ) {
        return true;
      }
      return false;
    }
  }

  /* South collision check */
  if (orientation === 'S') {
    if (commandKey === 'W') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y - 1 &&
            elem.X === currentCoordinates.X
        )
      ) {
        return true;
      }
      return false;
    }
    if (commandKey === 'S') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y + 1 &&
            elem.X === currentCoordinates.X
        )
      ) {
        return true;
      }
      return false;
    }
  }

  /* West collision check */
  if (orientation === 'W') {
    if (commandKey === 'W') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y &&
            elem.X === currentCoordinates.X - 1
        )
      ) {
        return true;
      }
      return false;
    }
    if (commandKey === 'S') {
      if (
        obstacleCoordinates.find(
          (elem) =>
            elem.Y === currentCoordinates.Y &&
            elem.X === currentCoordinates.X + 1
        )
      ) {
        return true;
      }
      return false;
    }
  }

  return false;
};

export const decipherLog = (commandCode, type) => {
  let newItem = {};

  switch (type) {
    case 'info':
      newItem = {
        command: `${commandsObject[commandCode]}`,
        id: Date.now(),
      };
      break;
    case 'collision':
      newItem = {
        command: `WARNING! COLLISION DETECTED. MAINTAINING POSITION.`,
        id: Date.now(),
      };
      break;
    default:
      newItem = {
        command: `UNEXPECTED COMMAND. NOT SENT.`,
        id: Date.now(),
      };
  }
  return newItem;
};

const commandsObject = {
  W: 'Rover moved forward.',
  S: 'Rover moved back.',
  A: 'Rover turned left.',
  D: 'Rover turned right.',
};
