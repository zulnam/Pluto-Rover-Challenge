const theme = {};

theme.numberBreakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 960,
  xl: 1284,
};

theme.breakpoints = {
  xs: `${theme.numberBreakpoints.xs}px`,
  sm: `${theme.numberBreakpoints.sm}px`,
  md: `${theme.numberBreakpoints.md}px`,
  lg: `${theme.numberBreakpoints.lg}px`,
  xl: `${theme.numberBreakpoints.xl}px`,
};

theme.numberSpacers = {
  xs: 8,
  sm: 12,
  md: 16,
  st: 24,
  lg: 32,
  xl: 40,
  xxl: 64,
};

theme.baseSizes = {
  xs: `${theme.numberSpacers.xs}px`,
  sm: `${theme.numberSpacers.sm}px`,
  md: `${theme.numberSpacers.md}px`,
  st: `${theme.numberSpacers.st}px`,
  lg: `${theme.numberSpacers.lg}px`,
  xl: `${theme.numberSpacers.xl}px`,
  xxl: `${theme.numberSpacers.xxl}px`,
};

theme.colors = {
  charcoal: 'rgba(35, 35, 35, 1)',
  lightTurqoise: 'rgba(7, 128, 128, 0.6)',
  chillRed: 'rgba(244, 93, 72, 1)',
};

export default theme;
