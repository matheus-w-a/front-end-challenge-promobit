import { styled } from '../../styles/stitches.config';

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purple400',
  width: '100%',
  height: 56
})

export const Img = styled('img', {
  marginLeft: 120
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1200,
  height: 56
})