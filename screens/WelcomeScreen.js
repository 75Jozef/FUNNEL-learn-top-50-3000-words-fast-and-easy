import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Colors from '../constants/Colors';

const WelcomeScreen = () => {
  return (
    <ScreenFrame>
      <Text style={styles.text}>KUK ;)</Text>
    </ScreenFrame>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.textPrimary,
  },
});

export default WelcomeScreen;
