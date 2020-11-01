import React, { useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
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

import { useSelector, useDispatch } from 'react-redux';
import * as Languages from '../data/languages';

import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';

import * as lngActions from '../store/actions/lang';
import ComboAround from '../components/UI/ComboAround';

const OptionsScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Options;
  const txtscnd = Languages[lngscnd].Options;

  const [iconSize] = useState(20);
  const [textSize] = useState(Dimensions.get('window').width / 22);
  const [buttonSize] = useState(Dimensions.get('window').width / 5);
  const [buttonBodyColor] = useState(Colors.surround);
  const [buttonTextColor] = useState(Colors.textPrimary);
  const [selectFirstLanguage, setSelectFirstLanguage] = useState(true);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

  const data = useSelector((state) => state.words.words);

  const wordScnd = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = wordScnd[0][lngscnd];
  const actLngFrst = wordScnd[0][lngfrst];

  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];
  const actLngFrstEng = wordEng[0][lngfrst];

  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);

  const dispatch = useDispatch();

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

  console.log(wordFrst[0]['cs']);

  const handleFirstLng = (props) => {
    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      setSelectFirstLanguage(true);
      return;
    }
    setSelectFirstLanguage(true);
  };
  const handleSecondLng = (props) => {
    if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      setSelectSecondLanguage(true);
      return;
    }
    setSelectSecondLanguage(true);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View key={index}>
              <Buttons.ButtonBox
                bodyStyle={
                  lng === lngfrst
                    ? {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 10,
                        borderColor: Colors.textPrimary,
                        backgroundColor: Colors.inactive,
                        padding: 3,
                      }
                    : {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 10,
                        borderColor: Colors.inactive,
                        padding: 3,
                      }
                }
                action={() => setLanguageFirst(lng)}>
                <TxtButton style={{ fontSize: textSize }}>
                  {wordFrst[0][lng]}
                </TxtButton>
              </Buttons.ButtonBox>
            </View>
          );
        })}
      </ScrollView>
    );
  };
  const SelectSecondLanguage = (props) => {
    return (
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View key={index}>
              <Buttons.ButtonBox
                bodyStyle={
                  lng === lngscnd
                    ? {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 10,
                        borderColor: Colors.textPrimary,
                        backgroundColor: Colors.inactive,
                        padding: 3,
                      }
                    : {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 10,
                        borderColor: Colors.inactive,
                        padding: 3,
                      }
                }
                action={() => setLanguageSecond(lng)}>
                <TxtButton style={{ fontSize: textSize }}>
                  {wordFrst[0][lng]}
                </TxtButton>
              </Buttons.ButtonBox>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const setLanguageFirst = (props) => {
    dispatch(lngActions.setLngFrst(props));
  };
  const setLanguageSecond = (props) => {
    dispatch(lngActions.setLngScnd(props));
  };

  return (
    <ScreenFrame>
      <View>
        <TouchableNativeFeedback
          background={
            Platform.Version >= 21
              ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
              : TouchableNativeFeedback.SelectableBackground()
          }
          delayPressIn={0}
          onPress={() => handleFirstLng()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
              marginTop: 5,
            }}>
            <View>
              <Buttons.ButtonCircle action={() => handleFirstLng()}>
                <Ionicons
                  name='ios-body'
                  size={iconSize}
                  color={
                    selectFirstLanguage ? Colors.textPrimary : Colors.inactive
                  }
                />
              </Buttons.ButtonCircle>
            </View>

            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectFirstLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.inactive }
                  }>
                  {actLngFrst}
                </TxtNormal>
                <TxtNormal
                  style={
                    selectFirstLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.inactive }
                  }>
                  ({actLngFrstEng})
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={
            Platform.Version >= 21
              ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
              : TouchableNativeFeedback.SelectableBackground()
          }
          delayPressIn={0}
          onPress={() => handleSecondLng()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
              marginTop: 10,
            }}>
            <View>
              <Buttons.ButtonCircle action={() => handleSecondLng()}>
                <Ionicons
                  name='ios-globe'
                  size={iconSize}
                  color={
                    selectSecondLanguage ? Colors.textPrimary : Colors.inactive
                  }
                />
              </Buttons.ButtonCircle>
            </View>

            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.inactive }
                  }>
                  {actLngScnd}
                </TxtNormal>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.inactive }
                  }>
                  ({actLngScndEng})
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <SafeAreaView>
        <View
          style={{
            marginTop: 20,
            height: '80%',
            alignItems: 'center',
          }}>
          {selectFirstLanguage ? <SelectFirstLanguage /> : null}
          {selectSecondLanguage ? <SelectSecondLanguage /> : null}
        </View>
      </SafeAreaView>
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
