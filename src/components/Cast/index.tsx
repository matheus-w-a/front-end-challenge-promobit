import { useParams } from "react-router-dom"
import { queryClient } from "../../services/queryClient"

export function Cast() {
  const { id } = useParams()
  const castMovie = queryClient.getQueryData(`movie-cast-${id}`)
  console.log(castMovie)

  return <h1>hello cast</h1>
}