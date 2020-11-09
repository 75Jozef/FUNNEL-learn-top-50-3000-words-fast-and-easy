import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const InfoLine = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 1,
        height: 1,
        backgroundColor: Colors.base,
        ...props.infoStyle,
      }}></View>
  );
};

const styles = StyleSheet.create({
  info: {},
});
