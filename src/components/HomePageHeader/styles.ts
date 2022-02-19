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

export const Title = styled('h1', {
  fontFamily: '$primary',
  fontWeight: 700,
  fontSize: 48,
  color: 'white',
  textAlign: 'center'
})