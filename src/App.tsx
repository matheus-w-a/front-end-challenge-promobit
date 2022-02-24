import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { HomePageHeader } from "./components/HomePageHeader";
import { Home } from './components/pages/Home';
import { MoviesProvider } from './contexts/moviesContext';

const queryClient = new QueryClient()
export function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MoviesProvider >
          <Home />
        </MoviesProvider>
      </QueryClientProvider>
    </div>
  );
}

