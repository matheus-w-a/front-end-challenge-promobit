import { keyframes } from '@stitches/react';
import { styled } from '../../../styles/stitches.config';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const StyledContent = styled(HoverCardPrimitive.Content, {
  fontFamily: '$primary !important',
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: 'white',
});

export const HoverCardTrigger = styled(HoverCardPrimitive.Trigger, {
  mr: 16,
  mb: 8,
  padding: 8,
  borderRadius: 4,
  boxShadow: '0px 4px 4px 0px #00000040',
  backgroundColor: 'white',
});

export const Flex = styled('div', { display: 'flex' });

export const ImageTrigger = styled('div', {
  fontFamily: '$primary',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
  h3: {
    mt: 8,
  },
  h4: {
    mt: 4,
    fontWeight: 'normal'
  }
});

export const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const Text = styled('div', {
  fontFamily: '$primary',
  margin: 0,
  color: '$gray500',
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: '$gray400' },
    },
    bold: {
      true: { fontWeight: 700 },
    },
  },
});


export const Poster = styled('img', {
  backgroundSize: 'contain !important',
  width: 175,
  maxHeight: 222,
  borderRadius: 8,
  boxShadow: '0px 4px 4px 0px #00000040',
})