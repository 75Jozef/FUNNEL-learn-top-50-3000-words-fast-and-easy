import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const InfoLine = (props) => {
  return <View style={{ ...styles.info, ...props.infoStyle }}></View>;
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    marginTop: 5,
    height: 2,
    backgroundColor: Colors.base,
  },
});
