import React from 'react';
import { useSelector } from 'react-redux';
import { View, Button } from 'react-native';
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
import CustomHeaderButton from './../components/UI/CustomHeaderButton';

import * as Languages from '../data/languages';

const WelcomeScreen = () => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];

  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>{texts.Welcome.header}</TxtLabel>
        <TxtNormal>{texts.Welcome.intro}</TxtNormal>
      </CardFrame>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];
  return {
    headerTitle: `${texts.Welcome}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='About'
          iconName={'ios-help-circle-outline'}
          onPress={() => {
            navData.navigation.navigate('About');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default WelcomeScreen;
