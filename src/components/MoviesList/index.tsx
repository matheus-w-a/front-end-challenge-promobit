import { useMoviesContext } from "../../contexts/moviesContext"
import { Content, Movie, ReleaseDate, Title, Poster } from "./styles"
import { Link } from "react-router-dom";
import { queryClient } from "../../services/queryClient";
import { MovieDetails } from '../../../types'
import { api } from "../../services/api";

export function MoviesList() {
  const { moviesList } = useMoviesContext()

  async function handlePrefetchMovie(movieId: number) {
    await queryClient.prefetchQuery<MovieDetails[], Error>(`movie-details-${movieId}`, async () => {
      const response = await api.get(`https://api.themoviedb.org/3/movie/${movieId}`,{ 
        params: {
          api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
          language: 'pt-BR'
        }
      })
      console.log(response.data)
      return response.data
    }, {
      staleTime: 1000 * 60 * 60 * 24 // 24h
    })
  }

  return (
    <Content>
      {
      moviesList ?
      moviesList.map(movie =>{
        const banner = movie.poster_path ? movie.poster_path : ""
        return (
          <Link to={`/movie/${movie.id}`} onMouseEnter={() => handlePrefetchMovie(movie.id)}>
            <Movie key={movie.id}>
              <Poster src={`https://image.tmdb.org/t/p/w500${banner}`} alt={movie.original_title}/>
              <Title>
                {movie.title}
              </Title>
              <ReleaseDate>
                {movie.release_date}
              </ReleaseDate>
            </Movie>
          </Link>

        )})
      : 'ola'
      }
    </Content>

  )
}