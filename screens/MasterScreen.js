import React from 'react';
import { View, SectionList } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from '../components/UI/Input';
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

const MasterScreen = () => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];

  const allWords = useSelector((state) => state.words.allWords);

  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>MASTER SCREEN</TxtLabel>
      </CardFrame>

      <SectionList
        sections={allWords}
        keyExtractor={(word) => word.iden}
        renderItem={({ word }) => <TxtNormal>{word.English}</TxtNormal>}
        renderSectionHeader={({ section: { word } }) => (
          <TxtBold>{word}</TxtBold>
        )}
      />
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];
  return {
    headerTitle: 'Master Screen Header',
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

export default MasterScreen;
