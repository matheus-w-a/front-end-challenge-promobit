import { styled } from '../../styles/stitches.config';
import * as Collapsible from '@radix-ui/react-collapsible';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'start',
  width: '100%',
  maxWidth: 1300,
  marginTop: 74,
  mx: 100,
});

export const Productors = styled(Collapsible.Root, {
  width: 200,
  marginRight: 32,
  marginTop: 16
}); 
export const Directors = styled(Collapsible.Root, {
  width: 200,
  marginTop: 16
}); 

export const Box = styled('div', {
  backgroundColor: '$purple500',
  borderRadius: 4,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  boxShadow: '0 3px 3px #000000',
}); 


export const Flex = styled('div', { display: 'flex' });export const Text = styled('span', {
  color: 'white',
  fontSize: 15,
  lineHeight: '25px',
});
export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$purple400',
  boxShadow: '0 2px 10px #000000',
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: '$purple500'},
  '&:hover': { backgroundColor: '$purple500', cursor: 'pointer' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});
export const Repository = styled('div', {
  backgroundColor: '$purple500',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
});