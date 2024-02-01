import { useQuery, useQueryClient } from "react-query";
import CustomCard from "./CustomCard";
import { ActivityIndicator, MD2Colors, Text } from "react-native-paper";
import { fetchStates } from "../lib/my-api";
import { FlatList, RefreshControl } from "react-native";
import React from "react";
// import { ThreeDots } from "react-loader-spinner";

const ListCard = ({navigation}) => {

  // Queries
  const {data, isLoading, isError, refetch, remove} = useQuery('states', fetchStates);

  const onRefresh = React.useCallback(() => {
    // Invalidate and refetch
    remove('states');
    refetch();
  }, []);

  if (isLoading) return (
    <ActivityIndicator size={"large"} animating={true} color={MD2Colors.red800} />
  )

  if (isError) return (
    <Text>Error Fetch Data</Text>
  );

  // TODO: Change CustomCard be able to click and navigate to DetailScreen
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
      data={data}
      renderItem={({item}) => (
        <CustomCard
          item={item}
          navigation={navigation}/>
      )}
      keyExtractor={item => item["ID State"]}
    >
    </FlatList>
  )
}

export default ListCard;