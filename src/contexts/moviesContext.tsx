import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { useGenres } from '../hooks/useGenres';
import { useMovies } from '../hooks/useMovies';

type Genre = {
  id: number;
  name: string;
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
  isLoading: boolean;
}

const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export function MoviesProvider({children}: MoviesProviderProps) {
  const { data : genresList, isLoading, isError } = useGenres()
  const { data } = useMovies()
  const moviesList = data?.data.results as any
  return (
    <MoviesContext.Provider value={{ moviesList, genresList, isLoading } as any} > 
      {children}
    </MoviesContext.Provider>
  )
}

export function useMoviesContext() {
  const context = useContext(MoviesContext)

  return context
}