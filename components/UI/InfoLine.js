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
    margin: 1,
    height: 2,
    width: 1,
    backgroundColor: Colors.base,
    justifyContent: 'center',
    // alignContent: 'stretch',
    width: '0%',
  },
});
