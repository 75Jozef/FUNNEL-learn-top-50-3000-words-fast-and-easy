import React, { useCallback } from 'react';
import { View } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from './../components/UI/Input';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const StatisticsScreen = () => {
  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>Statistics SCREEN</TxtLabel>
      </CardFrame>
    </ScreenFrame>
  );
};

export default StatisticsScreen;
