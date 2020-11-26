import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';

import * as Languages from '../data/languages';

const WelcomeScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Welcome;
  const txtscnd = Languages[lngscnd].Welcome;

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <ScreenFrame>
      <View
        style={{
          alignItems: 'center',
          margin: 10,
          backgroundColor: Colors.base,
        }}>
        <TxtHeader>F|U|N|N|E|L</TxtHeader>
        <TxtHeader>{actTheme.toString()}</TxtHeader>
      </View>
      <View style={{ margin: 15 }}>
        <TxtLabel>frst{txtfrst.title}</TxtLabel>
        <TxtNormal>scnd{txtscnd.title}</TxtNormal>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Welcome;
  return {
    headerTitle: `${txtfrst.header}`,
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
  };
};

export default WelcomeScreen;
