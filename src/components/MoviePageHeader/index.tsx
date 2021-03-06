import { useEffect, useState } from "react";
import { useMoviesContext } from "../../contexts/moviesContext";
import { useGenres } from "../../hooks/useGenres";
import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Box, Content, Poster } from "./styles";
import { Link, useParams } from "react-router-dom";
type GenreProps = {
  id: number;
  name: string;
}

export function MoviePageHeader() {
  const { id } = useParams()
  console.log(id);
  return (
    <Box>
      <Banner />
      <Content>
        {/* <Poster src={`https://image.tmdb.org/t/p/w500${banner}`} alt={movie.original_title}/> */}
      </Content>
    </Box>
  )
}