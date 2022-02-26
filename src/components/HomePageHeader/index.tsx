import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Box, Content, Title } from "./styles";

export function HomePageHeader() {
  return (
    <Box>
      <Banner />
      <Content>
        <Title>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Title>
        <GenreFilter/>
      </Content>
    </Box>
  )
}