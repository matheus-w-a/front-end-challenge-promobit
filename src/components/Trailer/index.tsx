import { useParams } from "react-router-dom";
import { TrailerProps } from "../../../types";
import { queryClient } from "../../services/queryClient";
import { Container } from "./styles";

export function Trailer() {
  const { id } = useParams()
  const trailers = queryClient.getQueryData(`movie-videos-${id}`) as TrailerProps
  console.log(trailers)

  return (
    trailers ? <Container>
      <h1>Trailer</h1>
      <iframe 
        width="900" 
        height="506"
        src={`https://www.youtube.com/embed/${trailers.results[0].key}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </Container> :
    <h1>'loading'</h1>
  )
}
