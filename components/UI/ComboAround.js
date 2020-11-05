import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const ComboAround = (props) => {
  return <View style={styles.screen}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    backgroundColor: Colors.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComboAround;
