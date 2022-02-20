import { useState } from "react"
import { useGenreList } from "../../hooks/useGenres"
import { Box, Content, Label, Toggle} from "./styles"

export function GenreFilter() {
  const [ toggleGenre, setToggleGenre] = useState(false)
  
  const {data : genres} = useGenreList()
  console.log(genres)

  function handleGenreSelect() {
    return "hello world"
  }
  return (
    <Box>
      <Content>
        <Label>Filtrar por:</Label>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {/* {genres.map(genre => {return (
            <Toggle onClick={()=>handleGenreSelect()} isActive={1}>
              {genre}
            </Toggle>
          )})} */}
        </div>
      </Content>
    </Box>
  )
}