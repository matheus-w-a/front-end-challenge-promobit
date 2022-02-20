import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { HomePageHeader } from "./components/HomePageHeader";

const queryClient = new QueryClient()
export function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HomePageHeader />
      </QueryClientProvider>
    </div>
  );
}

