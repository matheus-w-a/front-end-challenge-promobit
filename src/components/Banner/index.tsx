import { Box, Content, Img } from "./styles";
import logo from '../../assets/logo.svg';

export function Banner() {
  return (
    <Box>
      <Content>
        <Img src={logo} alt="TMBD" />
      </Content>
    </Box>
  )
}