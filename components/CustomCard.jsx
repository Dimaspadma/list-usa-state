import * as React from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const CustomCard = ({item, navigation}) => (
  <TouchableHighlight
    onPress={() => navigation.navigate('Map', item)}>
    <Card
    mode='elevated'>
      <Card.Title
      style={styles.card}
      title={item.State}
      subtitle={`Population: ${item.Population}`}
      left={() => <Image style={styles.image} source={{uri: item.image}} />}
    />
    </Card>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default CustomCard;