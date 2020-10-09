import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import { TxtBold } from '../components/UI/Txt';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const WelcomeScreen = () => {
  return (
    <ScreenFrame>
      <TxtBold>KUK ;)</TxtBold>
    </ScreenFrame>
  );
};

export default WelcomeScreen;
