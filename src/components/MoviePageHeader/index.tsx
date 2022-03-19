import { Banner } from "../Banner";
import { Container, Content, Poster, Box, Title, UserRating, Synopsis } from "./styles";
import { useParams } from "react-router-dom";
import { MovieDetails } from '../../../types'
import { Crew } from "../Crew";
import { queryClient } from "../../services/queryClient";


export function MoviePageHeader() {
  const { id } = useParams()
  const movieDetails = queryClient.getQueryData([`movie-details-${id}`]) as MovieDetails
  const movieReleaseDate = queryClient.getQueryData([`movie-release-date-${id}`]) as any
  const releaseDate = movieReleaseDate[0].release_dates[0].release_date
  const ageGroup = movieReleaseDate[0].release_dates[0].certification


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
            {movieDetails.release_date.split('-').reverse().join('/')} - 
            {movieDetails.genres.map(genre => (` ${genre.name}`))} - 
            {` ${movieRuntime}`}
          </div>
          <UserRating>
            <p>{movieDetails.vote_average}</p>
            <p>Avaliação dos usuários</p>
          </UserRating>
          <Synopsis>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
          </Synopsis>
          <Crew />
        </Box>
      </Content>
    </Container>
  )
}