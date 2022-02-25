import { useQuery } from 'react-query'
import { api } from '../services/api'

type Movie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<Number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  total_results: number;
  total_pages: number;
}

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