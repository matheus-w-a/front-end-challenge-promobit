import { useMoviesContext } from "../../contexts/moviesContext"
import { Content, Movie, ReleaseDate, Title, Poster } from "./styles"
import { Link } from "react-router-dom";
import { handlePrefetchMovie } from "../../hooks/useMovieDetails";

export function MoviesList() {
  const { moviesList } = useMoviesContext()

  return (
    <Content>
      {
      moviesList ?
      moviesList.map(movie =>{
        const banner = movie.poster_path ? movie.poster_path : ""
        return (
          <Link key={movie.id} to={`/movie/${movie.id}`} onMouseEnter={() => handlePrefetchMovie(movie.id)} style={{textDecoration: 'none'}}>
            <Movie key={movie.id}>
              <Poster src={`https://image.tmdb.org/t/p/w500${banner}`} alt={movie.original_title}/>
              <Title>
                {movie.title}
              </Title>
              <ReleaseDate>
                {movie.release_date.split('-').reverse().join('/')}
              </ReleaseDate>
            </Movie>
          </Link>

        )})
      : <h1>'ola'</h1>
      }
    </Content>

  )
}