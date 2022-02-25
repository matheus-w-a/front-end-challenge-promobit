import { useEffect, useState } from "react";
import { useMoviesContext } from "../../contexts/moviesContext";
import { useGenres } from "../../hooks/useGenres";
import { useMovies } from "../../hooks/useMovies";
import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Box, Content, Title } from "./styles";

type GenreProps = {
  id: number;
  name: string;
}

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