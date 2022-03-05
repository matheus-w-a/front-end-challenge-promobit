import { queryClient } from "../../../services/queryClient";
import { MoviePageHeader } from "../../MoviePageHeader";
import { useParams } from 'react-router-dom'
import { MovieDetails } from "../../../../types";
import { Container, Box } from "./styles";
import { CastSection } from "../../Cast";
import { Recommendations } from "../../Recommendations";
import { Trailer } from "../../Trailer";

export function Movie() {
  const { id } = useParams()
  const movieDetails = queryClient.getQueryData([`movie-details-${id}`])

  return (
    <Container>
      <MoviePageHeader movieDetails={movieDetails as MovieDetails}/>
      <CastSection />
      <Trailer />
      <Recommendations /> 
    </Container>

  )
}