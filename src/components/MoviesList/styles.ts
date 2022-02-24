import { styled } from '../../styles/stitches.config';

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '$5',
  mx: 112
})

export const Movie = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
})

export const Title = styled('h4', {
  color: '$gray500',
  fontSize: 16,
})

export const ReleaseDate = styled('h5', {
  color: '$gray400',
  fontSize: 14
})

export const Poster = styled('img', {
  maxWidth: 180,
})
