
export interface GenreProps {
  id: number;
  name?: string;
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

export interface MovieRecomendations {
  page: number;
  results: {  
    poster_path: string | null;
    adult: boolean;
    overview: string;  
    release_date: string;  
    genre_ids: GenreProps[];  
    id: number;  
    original_title: string;  
    original_language: string;  
    title: string;  
    backdrop_path: string | null;  
    popularity: number;  
    vote_count: number;  
    video: boolean;  
    vote_average: number;
  }[]
  total_pages: number;
  total_results: number;
}

export interface CastProps {
  id: number;
  cast: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[]
  crew: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
  }[]
} []

export interface TrailerProps {
  id: number;
  results: {
    iso_639_1: string;  
    iso_3166_1: string;  
    name: string;  
    key: string;  
    site: string;  
    size: number;  
    type: string;  
    official: boolean;  
    published_at: string;  
    id: string;
  }[]
}

export interface PersonProps {
  birthday: string | null;
  known_for_department?: string;
  deathday?: null | string;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: null | string;
}