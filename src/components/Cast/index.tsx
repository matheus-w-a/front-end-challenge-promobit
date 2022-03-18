import { useParams } from "react-router-dom"
import { CastProps } from "../../../types"
import { queryClient } from "../../services/queryClient"
import { HoverCastCard } from "./HoverCastCard"
import { StyledScrollArea, StyledViewport, StyledScrollbar, StyledThumb, StyledCorner, Box } from "./styles"

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
        <h1>Elenco original</h1>

      <ScrollAreaViewport>
        <Box>
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

