import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
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
import CustomHeaderButton from '../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector } from 'react-redux';

const InstructionsScreen = () => {
  const [thm, setThm] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setThm(actTheme));
  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>InstructionsScreen</TxtLabel>
      </CardFrame>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'kuk',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Master'
          iconName={'ios-funnel'}
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default InstructionsScreen;
