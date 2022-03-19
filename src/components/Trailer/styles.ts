import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  maxWidth: 1236,

  h1: {
    fontFamily: '$primary',
    fontSize: 28,
    marginTop: 60,
    marginBottom: 24
  }
})