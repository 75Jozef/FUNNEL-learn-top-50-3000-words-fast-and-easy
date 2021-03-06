import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';

const ScreenFrame = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 7,
        backgroundColor: Colors.base,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.base}
        translucent={false}
      />

      <>{props.children}</>
    </SafeAreaView>
  );
};

export default ScreenFrame;
