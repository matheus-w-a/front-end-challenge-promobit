import { createStitches } from '@stitches/react';


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray300: '#F3F3F3',
      gray400: '#646464',
      gray500: '#323232',
      purple400: '#5C16C5',
      purple500: '#2D0C5E',
      orange400: '#D18000'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '56px',
    },
    fonts: { primary:  'Roboto, sans-serif' }
  },

  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    m: (value: number) => ({ marginLeft: value, marginRight: value, marginTop: value, marginBottom: value}),
    mb: (value: number) => ({ marginBottom: value }),
    mt: (value: number) => ({ marginTop: value }),
    ml: (value: number) => ({ marginLeft: value}),
    mr: (value: number) => ({  marginRight: value }),
    mx: (value: number) => ({ marginLeft: value, marginRight: value }),
    my: (value: number) => ({ marginTop: value, marginBottom: value }),

    pb: (value: number) => ({ paddingBottom: value }),
    pt: (value: number) => ({ paddingTop: value }),
    pl: (value: number) => ({ paddingLeft: value}),
    pr: (value: number) => ({  paddingRight: value }),
    px: (value: number) => ({ paddingRight: value, paddingLeft: value }),
    py: (value: number) => ({ paddingTop: value, paddingBottom: value }),
  },
});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  'h1,h2,h3,h4,h5,h6': {
    textDecoration: 'none !important'
    }
});