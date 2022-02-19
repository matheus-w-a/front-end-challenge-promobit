import { Box, Content, Toggle} from "./styles"

const genres = 
["Ação", "Aventura", 'Animação', 'Comédia', 'Crime', 'Documentário', 'Drama', 'Família']



export function GenreFilter() {
  return (
    <Box>
      <Content>
        <h3>Filtrar por:</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {genres.map(genre => {return (
            <Toggle>{genre}</Toggle>
          )})}
        </div>
      </Content>
    </Box>
  )
}