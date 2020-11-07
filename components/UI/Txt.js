import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';

export const TxtNormal = (props) => {
  return (
    <>
      <Text style={{ ...styles.textNormal, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtBold = (props) => {
  return (
    <>
      <Text style={{ ...styles.textBold, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtHeader = (props) => {
  return (
    <>
      <Text style={{ ...styles.textHeader, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtItalic = (props) => {
  return (
    <>
      <Text style={{ ...styles.textItalic, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtLabel = (props) => {
  return (
    <>
      <Text style={{ ...styles.textLabel, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtError = (props) => {
  return (
    <>
      <Text style={{ ...styles.textError, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtButton = (props) => {
  return (
    <>
      <Text style={{ ...styles.textButton, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textNormal: {
    color: Colors.textPrimary,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 35,
  },
  textItalic: {
    color: Colors.surround,
    fontFamily: Fonts.normal,
    fontStyle: 'italic',
    fontSize: Dimensions.get('window').height / 40,
  },
  textBold: {
    color: Colors.backSecond,
    fontFamily: Fonts.bold,
    fontSize: Dimensions.get('window').height / 38,
  },
  textHeader: {
    color: Colors.backSecond,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 15,
  },

  textLabel: {
    color: Colors.backPrimary,
    fontFamily: Fonts.normal,
    fontSize: Dimensions.get('window').height / 20,
  },
  textError: {
    fontFamily: Fonts.normal,
    color: Colors.accent,
    fontSize: Dimensions.get('window').height / 50,
  },
  textButton: {
    fontFamily: Fonts.normal,
    color: Colors.surround,
    fontSize: Dimensions.get('window').height / 50,
  },
});
