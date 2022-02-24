import { useQuery } from 'react-query'
import { api } from '../services/api'

type Genre = {
  id: number;
  name: string;
}

async function fetchMovieGenres() {
  const response = await api.get('https://api.themoviedb.org/3/genre/movie/list', {
    params: {
      api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
      language: 'pt-BR'
    }
  })
  console.log(response)
  const genreList = await response.data.genres
  console.log(genreList)

  return genreList
}

export function useGenres() {
  return useQuery<Genre[], Error>('list-of-genres', () => fetchMovieGenres())
}