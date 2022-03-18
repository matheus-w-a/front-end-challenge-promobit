import { styled } from '../../styles/stitches.config';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

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
  width: 1236,
  height: 400,
  borderRadius: 4,
  marginTop: 80,
  overflow: 'hidden',
  backgroundColor: '$gray300',

  h1: {
    fontFamily: '$primary',
    fontSize: 28,
    marginTop: 40,
    marginBottom: 24
  }
});

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  backgroundColor: '$gray300',



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
  '&:hover': { background: '$gray300' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$gray400',
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
