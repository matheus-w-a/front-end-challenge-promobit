import { useQuery } from 'react-query'
import { api } from '../services/api'

async function fetchPopularMovies() {
  const response = await api.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
      language: 'pt-BR'
    }
  })
  const movieList = await response.data.results
  return movieList
}

export function useMovies() {
  return useQuery('list-of-popular-movies', () => fetchPopularMovies())
}