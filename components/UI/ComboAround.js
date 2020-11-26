import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';

import Colors from '../../constants/Colors';

const ComboAround = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: Colors.base,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};

export default ComboAround;
