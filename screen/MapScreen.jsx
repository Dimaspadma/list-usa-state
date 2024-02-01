import { PaperProvider, Text } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from "react-native";
import { getLatLong } from "../lib/map";

export default function MapScreen({route, navigation}) {

  const item = route.params;
  const latLong = getLatLong(item.State)[0];

  const INITIAL_REGION = {
    latitude: latLong.latitude,
    longitude: latLong.longitude,
    latitudeDelta: 8,
    longitudeDelta: 8,
  };

  return (
    <PaperProvider style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
