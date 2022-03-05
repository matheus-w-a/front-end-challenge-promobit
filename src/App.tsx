import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Movie } from './components/pages/Movie';
import { MoviesProvider } from './contexts/moviesContext';
import { globalStyles } from './styles/stitches.config';

const queryClient = new QueryClient()
export function App() {
  globalStyles()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MoviesProvider >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        </MoviesProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

