import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useGenres } from '../hooks/useGenres';
import { useMovies } from '../hooks/usePopularMovies';

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
  isGenresLoading: boolean;
  isMoviesLoading: boolean;
  selectedGenres: number[];
  setSelectedGenres: (array : number[]) => void;
}

const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export function MoviesProvider({children}: MoviesProviderProps) {
  const { data : genresList, isLoading : isGenresLoading } = useGenres()
  const { data : moviesData, isLoading : isMoviesLoading } = useMovies()
  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [selectedGenres, setSelectedGenres] = useState<Number[]>([])

  if(!isMoviesLoading && moviesList.length === 0) {
    setMoviesList(moviesData)
  }

  useEffect(() => {
    if(moviesData) {
      const selectedMoviesByGenres = moviesData.reduce((acc : Movie[], movie : Movie) => {
        function checkIfGenresIncludes() {        
          return movie.genre_ids.some((id) => {
            return selectedGenres.includes(id)
          })
        }      
        if(checkIfGenresIncludes()) {
          acc.push(movie)
        }
        return acc    
      }, [])
      setMoviesList(selectedMoviesByGenres)

    }

  }, [selectedGenres])

  return (
    <MoviesContext.Provider 
      value={{ 
        moviesList, 
        genresList, 
        isGenresLoading, 
        isMoviesLoading, 
        selectedGenres, 
        setSelectedGenres 
      } as any} > 
      {children}
    </MoviesContext.Provider>
  )
}

export function useMoviesContext() {
  const context = useContext(MoviesContext)

  return context
}