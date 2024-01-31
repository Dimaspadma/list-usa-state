import { useQuery } from "react-query";
import CustomCard from "./CustomCard";
import { Text } from "react-native-paper";
import { fetchStates } from "../lib/my-api";

const ListCard = () => {
  // Queries
  const {data, isLoading, isError} = useQuery('todos', fetchStates);

  if (isLoading) return (
    <Text>Loading...</Text>
  )

  if (isError) return (
    <Text>Error Fetch Data</Text>
  );

  // TODO: Change CustomCard be able to click and navigate to DetailScreen
  return (
    <>
     {data.map((item, i) => (
        <CustomCard
          key={i}
          title={item.State}
          population={item.Population}
          uri={item.image}
        />
     ))}
    </>
  )
}

export default ListCard;