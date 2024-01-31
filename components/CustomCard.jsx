import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const CustomCard = ({title, population, uri}) => (
  <Card
  mode='elevated'>
    <Card.Title
    style={styles.card}
    title={title}
    subtitle={`Population: ${population}`}
    left={() => <Image style={styles.image} source={{uri}} />}
  />
  </Card>
);

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default CustomCard;