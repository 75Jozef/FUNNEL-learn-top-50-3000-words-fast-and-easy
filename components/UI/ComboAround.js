import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const ComboAround = (props) => {
  return <View style={styles.combo}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: Colors.base,
    borderColor: Colors.surround,
    borderWidth: 0.5,
  },
});

export default ComboAround;
