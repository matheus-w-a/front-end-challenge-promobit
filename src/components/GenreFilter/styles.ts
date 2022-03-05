import { styled } from '../../styles/stitches.config';


export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purple500',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  backgroundColor: '$purple500'
})
export const GenresContent = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 1000,
  backgroundColor: '$purple500',
  marginBottom: 85
})

export const Genre = styled('button', {
  fontFamily: '$primary !important' ,
  all: 'unset',
  backgroundColor: 'white',
  height: 40,
  borderRadius: 4,
  display: 'flex',
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  mx: 6,
  px: 16,
  cursor: 'pointer',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  variants:{
    isActive: {
      false: { backgroundColor: '#ffffff', color: '$gray500' },
      true: { backgroundColor: '$orange400', color: 'white'},
    }
  }
});

export const Label = styled('h3', {
  fontFamily: '$primary',
  fontSize: 14,
  color: '#ffffff', 
  marginBottom: 16
})