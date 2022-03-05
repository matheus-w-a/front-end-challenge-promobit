import { useParams } from "react-router-dom"
import { CastProps } from "../../../types"
import { queryClient } from "../../services/queryClient"
import { Container, CastContent, Cast, Poster } from "./styles"

export function CastSection() {
  const { id } = useParams()
  const castMovie = queryClient.getQueryData(`movie-cast-${id}`) as CastProps

  return (
    castMovie ?
    <Container>
      <h1>Elenco original</h1>
      <CastContent>
        {castMovie.cast.map(cast => {
          return (
            <Cast key={cast.id}>
              <Poster src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}/>
              <h3>{cast.name}</h3>
              <h4>{cast.character}</h4>
            </Cast>
          )
        })}
      </CastContent>      
    </Container> :
    <h1>'loading'</h1>
  )
}