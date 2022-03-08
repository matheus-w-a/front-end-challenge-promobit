import { Box, Content, Img } from "./styles";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <Box>
      <Content>
      <Link to={'/'}>
        <Img src={logo} alt="TMBD" />
      </Link>
      </Content>
    </Box>
  )
}