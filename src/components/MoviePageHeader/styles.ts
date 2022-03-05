import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 640,
  backgroundColor: '$purple500',
  color: '#ffffff',
  fontFamily: '$primary'
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  maxWidth: 1300,
  marginTop: 72
})

export const Title = styled('h1', {
  fontFamily: '$primary',
  fontWeight: 700,
  fontSize: 32,
  color: '#ffffff',
  textAlign: 'center'
})

export const Poster = styled('img', {
  width: '100%',
  maxWidth: 360,
  marginRight: 32,
  borderRadius: 8,
  boxShadow: '0px 4px 4px 0px #00000040',
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: 800,
  backgroundColor: '$purple500',
})

export const UserRating = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
});

export const Synopsis = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  maxWidth: 600,
  marginTop: 40,

  h3: {
    marginBottom: 8
  },
  p: { 
    lineHeight: '24px'
  }

})