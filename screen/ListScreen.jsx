import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import ListCard from "../components/ListCard";

// Create a client
const queryClient = new QueryClient();

export default function ListScreen({navigation}) {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <ListCard navigation={navigation} />
      </PaperProvider>
    </QueryClientProvider>
  )
}