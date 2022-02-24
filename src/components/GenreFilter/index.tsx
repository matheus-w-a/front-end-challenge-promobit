import { useEffect, useState } from "react"
import { useGenres } from "../../hooks/useGenres"
import { Box, Content, Label, Toggle} from "./styles"

type Genre = {
  id: number;
  name: string;
}

type GenreFilterProps = {
  genres : Genre[];
  isLoading: boolean;
}

export function GenreFilter({genres, isLoading}: GenreFilterProps) {
  const [ toggleGenre, setToggleGenre] = useState(false)
  console.log(isLoading)

  function handleGenreSelect() {
    return "hello world"
  }
  return (
    <Box>
      <Content>
        <Label>Filtrar por:</Label>
        <div style={{display: 'flex', flexDirection: 'row', maxWidth: 600}}>
          {isLoading ? "ola" : genres.map(genre => {
            return (
              <Toggle key={genre.id} onClick={()=>handleGenreSelect()} isActive={0}>
                {genre.name}
              </Toggle>
            )
          })}
        </div>
      </Content>
    </Box>
  )
}