import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { useGenres } from '../hooks/useGenres';
import { useMovies } from '../hooks/useMovies';

type Genre = {
  id: number;
  name?: string;
}

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

interface MoviesProviderProps {
  children: ReactNode;
 }

interface MoviesContextData {
  moviesList:  Movie[]; 
  genresList: Genre[];
  isError: boolean;
  selectedGenres: number[];
  setSelectedGenres: (array : number[]) => void;
}

const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export function MoviesProvider({children}: MoviesProviderProps) {
  const { data : genresData, isError } = useGenres()
  const { data : moviesData, isLoading } = useMovies()
  const [moviesList, setMoviesList] = useState([])
  const [genresList, setGenresList] = useState([]) as any
  const [selectedGenres, setSelectedGenres] = useState([])

  if(!isLoading && genresList.length == 0) {
    setMoviesList(moviesData?.data.results)
    const moviesGenres = moviesList.reduce((acc : any, value : Movie) => { 
      value.genre_ids.forEach(genre => {
        if (!acc.includes(genre)) {
          acc.push(genre)
        }
      })
      return acc
    }, [])

    if(!isError) {
      const genres = genresData.reduce((acc : any, genre : Genre) => {
        if(moviesGenres.includes(genre.id)) {
          acc.push(genre)
        }
        return acc
      }, [])
      setGenresList(genres)
    }
  }

  return (
    <MoviesContext.Provider value={{ moviesList, genresList, isError, selectedGenres, setSelectedGenres } as any} > 
      {children}
    </MoviesContext.Provider>
  )
}

export function useMoviesContext() {
  const context = useContext(MoviesContext)

  return context
}