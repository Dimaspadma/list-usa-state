import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = ({title}) => (
  <Appbar.Header>
    <Appbar.Content title={title} />
  </Appbar.Header>
);

export default TopBar;