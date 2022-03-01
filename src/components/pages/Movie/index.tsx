import { queryClient } from "../../../services/queryClient";
import { MoviePageHeader } from "../../MoviePageHeader";
import { MoviesList } from "../../MoviesList";
import { useParams } from 'react-router-dom'
import { MovieDetails } from "../../../../types";

export function Movie() {
  const { id } = useParams()
  const movieDetails = queryClient.getQueryData([`movie-detais-${id}`])
  console.log(movieDetails)

  return (
    <>
    <MoviePageHeader movieDetails={movieDetails as MovieDetails[]}/>

    </>

  )
}