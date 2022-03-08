import { Link, useParams } from "react-router-dom"
import { MovieRecomendations } from "../../../types"
import { handlePrefetchMovie } from "../../hooks/useMovieDetails"
import { queryClient } from "../../services/queryClient"
import { Container, Poster, Recommendation, RecommendationContent } from "./styles"

export function Recommendations() {
  const {id} = useParams()
  const recommendations = queryClient.getQueryData(`movie-recommendations-${id}`) as MovieRecomendations
  console.log(recommendations)
  return (
    recommendations ?
    <Container>
      <h1>Recomendações</h1>
      <RecommendationContent>
        {recommendations.results.map(recom => {
          return (
            <Link to={`/movie/${recom.id}`} onMouseEnter={() => handlePrefetchMovie(Number(recom.id))} style={{textDecoration: 'none'}}>
              <Recommendation key={recom.id}>
                <Poster src={`https://image.tmdb.org/t/p/w200${recom.poster_path}`}/>
                <h3>{recom.title}</h3>
                <h4>{recom.release_date}</h4>
              </Recommendation>
            </Link>
          )
        })}
      </RecommendationContent>

      
    </Container> :
    <h1>'loading'</h1>
  )
}