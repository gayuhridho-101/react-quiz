import { css, keyframes } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

export const cssOrbit = css ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '100%',
});

export const cssPlanet = css({
  position: 'absolute',
  height: '15px',
  width: '15px',
  borderRadius: '100%',
  backgroundColor: '#9F98E6',
});


