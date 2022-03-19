import { Footer } from "../../components/Footer";
import { HomePageHeader } from "../../components/HomePageHeader";
import { MoviesList } from "../../components/MoviesList";

export function Home() {
  return (
    <>
      <HomePageHeader />
      <MoviesList />
      <Footer />
    </>

  )
}