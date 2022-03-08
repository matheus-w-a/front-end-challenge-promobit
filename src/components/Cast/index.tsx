import { useParams } from "react-router-dom"
import { CastProps } from "../../../types"
import { queryClient } from "../../services/queryClient"
import { HoverCastCard } from "./HoverCastCard"
import { Container, CastContent, Cast, Poster } from "./styles"

export function CastSection() {
  const { id } = useParams()
  const castMovie = queryClient.getQueryData(`movie-cast-${id}`) as CastProps

  return (
    castMovie ?
    <Container>
      <h1>Elenco original</h1>
      <CastContent>
        <HoverCastCard castMovie={castMovie}/>
      </CastContent>      
    </Container> :
    <h1>'loading'</h1>
  )
}