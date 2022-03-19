import { MoviePageHeader } from "../../components/MoviePageHeader";
import { useParams } from 'react-router-dom'
import { Container } from "./styles";
import { CastSection } from "../../components/Cast";
import { Recommendations } from "../../components/Recommendations";
import { Trailer } from "../../components/Trailer";
import { useEffect } from "react";
import { Footer } from "../../components/Footer";

export function Movie() {
  const {id} = useParams()
  useEffect(() => {window.scrollTo(0, 0)},[id])
  
  return (
    <Container>
      <MoviePageHeader/>
      <CastSection />
      <Trailer />
      <Recommendations /> 
      <Footer />
    </Container> 
  )
}