
export interface GenreProps {
  id: number;
  name: string;
}
export interface ProductionCompaniesProps {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

interface ProductionCountriesProps {
  iso_3166_1: string;
  name: string;
}
interface SpokenLanguagesProps {
  iso_639_1: string;
  name: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: GenreProps[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompaniesProps[];
  production_countries: ProductionCountriesProps[];
  release_date: string;
  format: Date;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguagesProps[];
  status: "Rumored" | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}