import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  maxWidth: 1300,

  h1: {
    fontFamily: '$primary',
    fontSize: 28,
    marginTop: 40,
    marginBottom: 24
  }
})