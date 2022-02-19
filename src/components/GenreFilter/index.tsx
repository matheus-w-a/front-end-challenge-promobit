import { useState } from "react"
import { Box, Content, Label, Toggle} from "./styles"

const genres = 
["Ação", "Aventura", 'Animação', 'Comédia', 'Crime', 'Documentário', 'Drama', 'Família']



export function GenreFilter() {
  const [ toggleGenre, setToggleGenre] = useState(false)
  return (
    <Box>
      <Content>
        <Label>Filtrar por:</Label>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {genres.map(genre => {return (
            <Toggle isActive={toggleGenre}>
              {genre}
            </Toggle>
          )})}
        </div>
      </Content>
    </Box>
  )
}