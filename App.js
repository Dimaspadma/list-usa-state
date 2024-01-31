import { PaperProvider } from "react-native-paper";
import TopBar from "./components/TopBar";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ListCard from "./components/ListCard";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <TopBar
          title={"List USA States"}
        />
        <ListCard />
      </PaperProvider>
    </QueryClientProvider>
  )
}