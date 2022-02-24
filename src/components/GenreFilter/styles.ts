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
  fontFamily: '$primary !important' ,
  all: 'unset',
  backgroundColor: 'white',
  color: '$gray500',
  height: 40,
  borderRadius: 4,
  display: 'flex',
  fontSize: 14,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  mx: 10,
  px: 16,
  boxShadow: `0 2px 10px`,
  cursor: 'pointer',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  variants:{
    isActive: {
      0: { backgroundColor: '#ffffff' },
      1: { backgroundColor: 'gainsboro' },
    }
  }
});

export const Label = styled('h3', {
  fontFamily: '$primary',
  fontSize: 14
})