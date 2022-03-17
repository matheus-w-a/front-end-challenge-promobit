import { styled } from '../../styles/stitches.config';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

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

export const CastContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1200,
})

export const Cast = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: 191,
  height: 336,
  marginRight: 16,
  padding: 8,
  borderRadius: 4,
  boxShadow: '0px 4px 4px 0px #00000040',
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
  maxHeight: 222,
  marginRight: 32,
  borderRadius: 8,
  boxShadow: '0px 4px 4px 0px #00000040',
})

export const Box = styled('div', {
  display: 'flex',
  height: 400,
});
export const Text = styled('div', {
  color: '$purple400',
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
});
export const Tag = styled('div', {
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  paddingTop: 10,
});

export const SCROLLBAR_SIZE = 12;

export const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 800,
  height: 400,
  borderRadius: 4,
  marginTop: 80,
  overflow: 'hidden',
  backgroundColor: '$gray500'
});

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

export const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: '$gray300',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$gray400' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: 'white',
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: '$gray400',
});
