import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const ComboAround = (props) => {
  return <View style={styles.combo}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    height: 60,
    backgroundColor: Colors.base,
    justifyContent: 'center',
  },
});

export default ComboAround;
