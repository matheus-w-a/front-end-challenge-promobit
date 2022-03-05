import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  maxWidth: 1300,
  marginTop: 74,
  mx: 100,

  h1: {
    fontFamily: '$primary',
    fontSize: 28,
    marginBottom: 24
  }
})

export const RecommendationContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1200,
})

export const Recommendation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: 191,
  height: 336,
  marginRight: 16,
  borderRadius: 4,
  fontFamily: '$primary',

  h3: {
    fontSize: 18,
    marginTop: 16,
  },
  h4: {
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 4
  }

})

export const Poster = styled('img', {
  backgroundSize: 'cover',
  width: 175,
  maxHeight: 264,
  marginRight: 32,
  borderRadius: 8,
  boxShadow: '0px 4px 4px 0px #00000040',
})


