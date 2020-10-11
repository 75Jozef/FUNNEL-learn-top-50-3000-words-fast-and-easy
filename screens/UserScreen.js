import React from 'react';
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
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector } from 'react-redux';

const UserScreen = () => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];
  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>USER SCREEN</TxtLabel>
      </CardFrame>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'User Screen Header',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Main'
          iconName={'ios-arrow-round-back'}
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserScreen;
