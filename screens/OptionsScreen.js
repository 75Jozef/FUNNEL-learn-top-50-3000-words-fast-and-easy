import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';

import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

import { useSelector } from 'react-redux';
import * as Languages from '../data/languages';

import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';
import { FlatList } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

const OptionsScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Options;
  const txtscnd = Languages[lngscnd].Options;

  const [iconSize] = useState(20);
  const [textSize] = useState(Dimensions.get('window').width / 35);
  const [buttonSize] = useState(Dimensions.get('window').width / 5);
  const [buttonBodyColor] = useState(Colors.surround);
  const [buttonTextColor] = useState(Colors.textPrimary);
  const [selectFirstLanguage, setSelectFirstLanguage] = useState(false);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

  const data = useSelector((state) => state.words.words);

  const wordScnd = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = wordScnd[0][lngscnd];
  const actLngFrst = wordScnd[0][lngfrst];

  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);

  let languages = [
    'en',
    'it',
    'pa',
    'jv',
    'th',
    'pl',
    'fa',
    'ur',
    'uk',
    'ro',
    'nl',
    'sr',
    'hr',
    'hu',
    'el',
    'cs',
    'sv',
    'be',
    'fi',
    'da',
    'cn',
    'es',
    'ar',
    'pt',
    'id',
    'ms',
    'fr',
    'ru',
    'de',
    'ja',
    'hi',
    'bn',
    'tr',
    'mr',
    'ko',
    'vi',
    'ta',
    'sk',
    'af',
    'lv',
    'eo',
    'et',
    'bg',
  ];

  useEffect(() => {}, []);

  const handleFirstLng = (props) => {
    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      setSelectFirstLanguage(true);
      return;
    } else if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      return;
    }
    setSelectFirstLanguage(true);
  };
  const handleSecondLng = (props) => {
    if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      setSelectSecondLanguage(true);
      return;
    } else if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      return;
    }
    setSelectSecondLanguage(true);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <View
        style={{
          flexWrap: 'wrap',
          borderWidth: 1,
          borderColor: 'white',
          alignSelf: 'center',
        }}>
        {languages.map((lng) => {
          return (
            <Buttons.ButtonBox
              bodyStyle={{
                width: Dimensions.get('window').width / 4,
                borderColor: Colors.inactive,
              }}
              action={() => {}}>
              <TxtButton>{wordFrst[0][lng]}</TxtButton>;
            </Buttons.ButtonBox>
          );
        })}
      </View>
    );
  };
  const SelectSecondLanguage = (props) => {
    return (
      <View>
        <TxtBold>second</TxtBold>
      </View>
    );
  };

  return (
    <ScreenFrame>
      <View style={{ height: '20%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 30,
            marginTop: 5,
          }}>
          <View style={{ width: 80 }}>
            <Buttons.ButtonCircle action={handleFirstLng}>
              <Ionicons
                name='ios-refresh'
                size={iconSize}
                color={Colors.textPrimary}
              />
            </Buttons.ButtonCircle>
          </View>

          <Ionicons
            name='ios-body'
            size={iconSize}
            color={Colors.textPrimary}
          />

          <View style={{ marginLeft: 20 }}>
            <TxtNormal
              style={
                selectFirstLanguage
                  ? { color: Colors.accent }
                  : { color: Colors.inactive }
              }>
              {actLngFrst}
            </TxtNormal>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 30,
            marginTop: 10,
          }}>
          <View style={{ width: 80 }}>
            <Buttons.ButtonCircle action={handleSecondLng}>
              <Ionicons
                name='ios-refresh'
                size={iconSize}
                color={Colors.textPrimary}
              />
            </Buttons.ButtonCircle>
          </View>
          <Ionicons
            name='ios-globe'
            size={iconSize}
            color={Colors.textPrimary}
          />
          <View style={{ marginLeft: 20 }}>
            <TxtNormal>{actLngScnd}</TxtNormal>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          flexWrap: 'wrap',
          alignContent: 'center',
          height: '70%',
        }}>
        {selectFirstLanguage ? <SelectFirstLanguage /> : null}
        {selectSecondLanguage ? <SelectSecondLanguage /> : null}
      </View>
      <View style={{ height: '10%' }}>
        <Buttons.ButtonBox>extra</Buttons.ButtonBox>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Options;
  return {
    headerTitle: `${txtfrst.header}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='HowTo'
          iconName={'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OptionsScreen;
