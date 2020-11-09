import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyleSheet, Dimensions, Text } from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';

export const TxtNormal = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          color: Colors.textPrimary,
          fontFamily: Fonts.normal,
          fontSize: Dimensions.get('window').height / 35,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtBold = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          color: Colors.backSecond,
          fontFamily: Fonts.bold,
          fontSize: Dimensions.get('window').height / 38,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtHeader = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          color: Colors.backSecond,
          fontFamily: Fonts.normal,
          fontSize: Dimensions.get('window').height / 15,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtItalic = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          color: Colors.surround,
          fontFamily: Fonts.normal,
          fontStyle: 'italic',
          fontSize: Dimensions.get('window').height / 40,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtLabel = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          color: Colors.backPrimary,
          fontFamily: Fonts.normal,
          fontSize: Dimensions.get('window').height / 20,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtError = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.normal,
          color: Colors.accent,
          fontSize: Dimensions.get('window').height / 50,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export const TxtButton = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.normal,
          color: Colors.surround,
          fontSize: Dimensions.get('window').height / 50,
          ...props.style,
        }}>
        {props.children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textNormal: {},
  textItalic: {},
  textBold: {},
  textHeader: {},

  textLabel: {},
  textError: {},
  textButton: {},
});
