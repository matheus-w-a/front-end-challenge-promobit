import { useQuery } from 'react-query'
import { api } from '../services/api'
async function fetchMovieGenres() {
  const genreList = await api.get('https://api.themoviedb.org/3/genre/movie/list', {
    params: {
      api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
      language: 'pt-BR'
    }
  })

  return genreList
}

export function useGenreList() {
  return useQuery('list-of-movie-genres', () => fetchMovieGenres())
}