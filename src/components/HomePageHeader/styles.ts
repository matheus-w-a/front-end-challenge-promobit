import { styled } from '../../styles/stitches.config';

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  backgroundColor: '$purple500',
  height: 450
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1200
})