import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

const ScreenFrame = (props) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <StatusBar
        barStyle={Colors.base === '#000000' ? 'light-content' : 'dark-content'}
        hidden={false}
        backgroundColor={Colors.base === '#000000' ? '#000000' : '#FFFFFF'}
        translucent={true}
      />

      <>{props.children}</>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.base,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ScreenFrame;
