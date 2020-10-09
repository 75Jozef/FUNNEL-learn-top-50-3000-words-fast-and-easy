import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';

export const TxtNormal = (props) => {
  return (
    <>
      <Text style={styles.textNormal}>{props.children}</Text>
    </>
  );
};

export const TxtBold = (props) => {
  return (
    <>
      <Text style={styles.textBold}>{props.children}</Text>
    </>
  );
};

export const TxtHeader = (props) => {
  return (
    <>
      <Text style={styles.textHeader}>{props.children}</Text>
    </>
  );
};

export const TxtItalic = (props) => {
  return (
    <>
      <Text style={styles.textItalic}>{props.children}</Text>
    </>
  );
};

export const TxtLabel = (props) => {
  return (
    <>
      <Text style={styles.textLabel}>{props.children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  textNormal: {
    color: Colors.textPrimary,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 45,
  },
  textItalic: {
    color: Colors.surround,
    fontFamily: Fonts.normal,
    fontStyle: 'italic',
    fontSize: Dimensions.get('window').height / 45,
  },
  textBold: {
    color: Colors.backSecond,
    fontFamily: Fonts.bold,
    fontSize: Dimensions.get('window').height / 40,
  },
  textHeader: {
    color: Colors.backPrimary,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 13,
  },
  textLabel: {
    color: Colors.backPrimary,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 22,
  },
});
