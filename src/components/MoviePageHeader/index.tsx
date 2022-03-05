import { useEffect, useState } from "react";
import { useMoviesContext } from "../../contexts/moviesContext";
import { useGenres } from "../../hooks/useGenres";
import { Banner } from "../Banner";
import { GenreFilter } from "../GenreFilter";
import { Container, Content, Poster, Box, Title, UserRating, Synopsis } from "./styles";
import { Link, useParams } from "react-router-dom";
import { MovieDetails } from '../../../types'

type MoviePageHeaderProps = {
  movieDetails: MovieDetails
}

export function MoviePageHeader({movieDetails} : MoviePageHeaderProps) {
  const { id } = useParams()

  const movieRuntime = movieDetails.runtime ? 
    `${Math.floor(movieDetails.runtime / 60)}h:${movieDetails.runtime % 60}min` 
    : '';

  return (
    <Container>
      <Banner />
      <Content>
        <Poster src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title}/> 
        <Box>
          <Title>{movieDetails.title} ({movieDetails.release_date})</Title>
          <div>
            {movieDetails.release_date} - 
            {movieDetails.genres.map(genre => (`${genre.name}, `))} - 
            {movieRuntime}
          </div>
          <UserRating>
            <p>{movieDetails.vote_average}</p>
            <p>Avaliação dos usuários</p>
          </UserRating>
          <Synopsis>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
          </Synopsis>
        </Box>
      </Content>
    </Container>
  )
}