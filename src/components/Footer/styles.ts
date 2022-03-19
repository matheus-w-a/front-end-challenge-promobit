import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purple400',
  width: '100%',
  height: 56,
  mt: 60
})

export const Img = styled('img', {
  marginLeft: 120
})

export const Link = styled('a', {
  display: 'flex',
  color: 'white',
  textDecoration: 'none',
  fontFamily: '$primary',

  svg: {
    fontSize: 20,
    ml: 16,
    mr: 8
  }
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
  maxWidth: 1200,
  height: 56,

  p: {
    fontFamily: '$primary',
    color: 'white',
   }
})