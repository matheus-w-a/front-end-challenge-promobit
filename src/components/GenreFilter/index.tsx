import { useEffect, useState } from "react"
import { useMoviesContext } from "../../contexts/moviesContext"
import { Container, Content, Label, Genre, GenresContent} from "./styles"

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

type Toggle = {
  id: Number,
  isActive: boolean;
}

export function GenreFilter() {
  const { genresList, selectedGenres, setSelectedGenres, isGenresLoading } = useMoviesContext()
  const [isActive, setIsActive] = useState<Toggle[]>([])

  useEffect(() => {
    if(genresList && genresList.length > 1) {
      const active = genresList.map(genre => {
        return {id: genre.id, isActive: false}
      })

      setIsActive(active)
    }
    console.log(isActive)
  },[genresList])

  function handleGenreSelect(id : number, isActiveGenre : Toggle) {
    const genres = [...selectedGenres]
    isActiveGenre.isActive = isActiveGenre.isActive == false ? true : false

    if(!selectedGenres.includes(id)) {
      genres.push(id)
      setSelectedGenres(genres)

    } else {
      const index = genres.indexOf(id)
      genres.splice(index, 1)
      setSelectedGenres(genres)

    }
    console.log(genres)

  }

  return (
    <Container>
      <Content>
        <Label>Filtrar por:</Label>
        <GenresContent>
          {isGenresLoading ? "Carregando" : genresList.map(genre => {
            const isActiveGenre = isActive.find(g => g.id === genre.id)
            return (
              <Genre key={genre.id} onClick={()=>handleGenreSelect(genre.id, isActiveGenre as any)} isActive={isActiveGenre?.isActive}>
                {genre.name}
              </Genre>
            )
          })}
        </GenresContent>
      </Content>
    </Container>
  )
}