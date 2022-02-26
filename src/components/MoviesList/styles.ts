import { styled } from '../../styles/stitches.config';

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '$5',
  maxWidth: 1400,
  margin: 'auto',
  marginTop: 30
})

export const Movie = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
})

export const Title = styled('h4', {
  color: '$gray500',
  fontFamily: '$primary',
  fontWeight: 'bold',
  fontSize: 16,
  my: 8,
})

export const ReleaseDate = styled('h5', {
  color: '$gray400',
  fontFamily: '$primary',
  fontSize: 14,
  my: 0
})

export const Poster = styled('img', {
  width: '100%',
})
