import { useParams } from "react-router-dom"
import { CastProps } from "../../../types"
import { queryClient } from "../../services/queryClient"
import { HoverCastCard } from "./HoverCastCard"
import { Container, CastContent, Cast, Poster, StyledScrollArea, StyledViewport, StyledScrollbar, StyledThumb, StyledCorner, Box, Text, Tag } from "./styles"

const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

export function CastSection() {
  const { id } = useParams()
  const castMovie = queryClient.getQueryData(`movie-cast-${id}`) as CastProps
  return (
    castMovie ?
    <ScrollArea>
      <ScrollAreaViewport css={{ backgroundColor: 'white' }}>
        <h1>Elenco original</h1>
        <Box style={{ padding: '15px 20px' }}>
          <HoverCastCard castMovie={castMovie}/>
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea> :
    <h1>'loading'</h1>
  )
};

