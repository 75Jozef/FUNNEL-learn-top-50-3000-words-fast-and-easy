import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const ComboAround = (props) => {
  return <View style={styles.combo}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    height: 70,
    flexDirection: 'column',
    backgroundColor: Colors.base,
    justifyContent: 'center',
  },
});

export default ComboAround;
