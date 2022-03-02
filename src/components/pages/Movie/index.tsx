import { queryClient } from "../../../services/queryClient";
import { MoviePageHeader } from "../../MoviePageHeader";
import { useParams } from 'react-router-dom'
import { MovieDetails } from "../../../../types";
import { Container } from "./styles";
import { Cast } from "../../Cast";
import { Recommendations } from "../../Recommendations";

export function Movie() {
  const { id } = useParams()
  const movieDetails = queryClient.getQueryData([`movie-details-${id}`])

  return (
    <Container>
      <MoviePageHeader movieDetails={movieDetails as MovieDetails}/>
      <Cast />
       {/* <Trailer /> */}
      <Recommendations /> 
    </Container>

  )
}