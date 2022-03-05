import { styled } from '../../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  
  backgroundColor: '$gray300',
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: 800,
  backgroundColor: '$purple500',
})