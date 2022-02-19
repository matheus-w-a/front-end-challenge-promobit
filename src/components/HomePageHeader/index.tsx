import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Box, Content } from "./styles";

export function HomePageHeader() {
  return (
    <Box>
      <Banner />
      <Content>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <GenreFilter />
      </Content>
    </Box>
  )
}