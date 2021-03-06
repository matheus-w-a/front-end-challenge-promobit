import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { HomePageHeader } from "./components/HomePageHeader";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Movie } from './components/pages/Movie';
import { MoviesProvider } from './contexts/moviesContext';

const queryClient = new QueryClient()
export function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MoviesProvider >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        </MoviesProvider>
      </QueryClientProvider>
    </div>
  );
}

