import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Box, Container, Title } from "./styles";

export function HomePageHeader() {
  return (
    <Container>
      <Banner />
      <Box>
        <Title>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Title>
        <GenreFilter/>
      </Box>
    </Container>
  )
}