import { useEffect, useState } from "react"
import { useMoviesContext } from "../../contexts/moviesContext"
import { useGenres } from "../../hooks/useGenres"
import { Box, Content, Label, Toggle} from "./styles"

type Genre = {
  id: number;
  name: string;
}

type GenreFilterProps = {
  genres : Genre[];
  isError: boolean;
  selectedGenres: number[];
  setSelectedGenres: (array : number[]) => void;
}

export function GenreFilter() {
  const { genresList, selectedGenres, setSelectedGenres, isGenresLoading } = useMoviesContext()

  function handleGenreSelect(id : number) {
    const genres = [...selectedGenres]

    if(!selectedGenres.includes(id)) {
      genres.push(id)
      setSelectedGenres(genres)

    } else {
      const index = genres.indexOf(id)
      genres.splice(index, 1)
      setSelectedGenres(genres)

    }
  }

  return (
    <Box>
      <Content>
        <Label>Filtrar por:</Label>
        <div style={{display: 'flex', flexDirection: 'row', maxWidth: 600}}>
          {isGenresLoading ? "Carregando" : genresList.map(genre => {
            return (
              <Toggle key={genre.id} onClick={()=>handleGenreSelect(genre.id)} isActive={0}>
                {genre.name}
              </Toggle>
            )
          })}
        </div>
      </Content>
    </Box>
  )
}