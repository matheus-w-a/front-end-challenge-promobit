import { Link, useParams } from "react-router-dom"
import { MovieRecomendations } from "../../../types"
import { handlePrefetchMovie } from "../../hooks/useMovieDetails"
import { queryClient } from "../../services/queryClient"
import { Poster, Recommendation, StyledScrollArea, StyledViewport, StyledScrollbar, StyledThumb, StyledCorner, Box } from "./styles"

const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

export function Recommendations() {
  const {id} = useParams()
  const recommendations = queryClient.getQueryData(`movie-recommendations-${id}`) as MovieRecomendations
  return (
    recommendations ?
    <ScrollArea>
        <h1>Recomendações</h1>

      <ScrollAreaViewport>
        <Box>
        {recommendations.results.map(recom => {
          return (
            <Link key={recom.id} to={`/movie/${recom.id}`} onMouseEnter={() => handlePrefetchMovie(Number(recom.id))} style={{textDecoration: 'none'}}>
              <Recommendation key={recom.id}>
                <Poster src={`https://image.tmdb.org/t/p/w200${recom.poster_path}`}/>
                <h3>{recom.title}</h3>
                <h4>{recom.release_date}</h4>
              </Recommendation>
            </Link>
          )
        })}
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea> :
    <h1>'loading'</h1>
  )
}