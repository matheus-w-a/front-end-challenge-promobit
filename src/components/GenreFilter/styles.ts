import { styled } from '../../styles/stitches.config';

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purple400',
  height: 56
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1200
})

export const Toggle = styled('button', {
  all: 'unset',
  backgroundColor: 'white',
  color: '$gray500',
  height: 40,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  mx: 10,
  px: 16,
  boxShadow: `0 2px 10px`,
  cursor: 'pointer',
  '&[data-state=on]': { backgroundColor: '#fff999', color: '#000'},
  '&:focus': { boxShadow: `0 0 0 2px black` },
});