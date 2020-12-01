import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Dimensions, ScrollView } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import * as Device from 'expo-device';
import * as Buttons from './../components/UI/Buttons';
import * as Speech from 'expo-speech';
import * as lngActions from '../store/actions/lang';

import Colors from '../constants/Colors';

import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
  TxtError,
} from '../components/UI/Txt';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';

import * as Languages from '../data/languages';
import { Ionicons } from '@expo/vector-icons';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

const WelcomeScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  const data = useSelector((state) => state.words.words);
  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);

  const wordLocal = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScndLocal = wordLocal[0][lngscnd];
  const actLngFrstLocal = wordLocal[0][lngfrst];
  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);

  const [actlngfrst, setActLngFrst] = useState(lngfrst);
  const [actlngscnd, setActLngScnd] = useState(lngscnd);
  const [selectFirstLanguage, setSelectFirstLanguage] = useState(false);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

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

  const dispatch = useDispatch();

  const setLanguageFirst = (lngfrst) => {
    dispatch(lngActions.setLngFrst(lngfrst, lngscnd));
    setActLngFrst(lngfrst);
    setSelectFirstLanguage(false);
  };

  const setLanguageSecond = (lngscnd) => {
    dispatch(lngActions.setLngScnd(lngfrst, lngscnd));
    setActLngScnd(lngscnd);
    setSelectSecondLanguage(false);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <ScrollView horizontal={true}>
        {languages.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 7,
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: Colors.inactive,
                borderWidth: 0.5,
                borderStyle: 'dotted',
                borderRadius: 25,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Buttons.ButtonBox
                  bodyStyle={
                    lng === lngfrst
                      ? {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          backgroundColor: Colors.inactive,
                          marginBottom: 1,
                        }
                      : {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                          marginBottom: 1,
                        }
                  }
                  action={() => setLanguageFirst(lng)}>
                  <TxtLabel
                    style={{
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {wordFrst[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.inactive }}>
                  {wordEng[0][lng]}
                </TxtButton>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };
  const SelectSecondLanguage = (props) => {
    return (
      <ScrollView horizontal={true}>
        {languages.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 7,
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: Colors.inactive,
                borderWidth: 0.5,
                borderStyle: 'dotted',
                borderRadius: 25,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Buttons.ButtonBox
                  bodyStyle={
                    lng === lngscnd
                      ? {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          backgroundColor: Colors.inactive,
                          marginBottom: 1,
                        }
                      : {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                          marginBottom: 1,
                        }
                  }
                  action={() => setLanguageSecond(lng)}>
                  <TxtLabel
                    style={{
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {wordFrst[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.inactive }}>
                  {wordEng[0][lng]}
                </TxtButton>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const handleFirstLng = (props) => {
    if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      return;
    }
    setSelectFirstLanguage(true);
    setSelectSecondLanguage(false);
  };

  const handleSecondLng = (props) => {
    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      return;
    }
    setSelectSecondLanguage(true);
    setSelectFirstLanguage(false);
  };

  return (
    <ScreenFrame>
      <View
        style={{
          height: '15%',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
        }}>
        <Ionicons name='ios-funnel' size={60} color={Colors.backSecond} />
        <TxtHeader>F|U|N|N|E|L</TxtHeader>
      </View>
      <View
        style={{
          height: '15%',
          alignItems: 'center',
          width: '95%',
          justifyContent: 'space-evenly',
        }}>
        <Buttons.ButtonCircle
          action={() => {
            Speech.speak(
              data[1252][lngfrst].concat(', ').concat(Device.deviceName),
              {
                language: lngfrst,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              }
            );
          }}
          touchColor={Colors.base}
          bodyStyle={{
            borderWidth: 0,
            backgroundColor: Colors.base,
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 10,
          }}>
          <TxtNormal>
            {data[1252][lngfrst]}
            {' \n'}{' '}
          </TxtNormal>
          <TxtButton>
            {Device.deviceName}
            {'\n'}
          </TxtButton>
        </Buttons.ButtonCircle>
      </View>
      <View
        style={{
          width: '95%',
          height: '35%',
          overflow: 'hidden',
          justifyContent: 'space-evenly',
          paddingLeft: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name='ios-arrow-round-back'
            size={20}
            color={selectFirstLanguage ? Colors.backSecond : Colors.base}
          />

          <Buttons.ButtonCircle
            action={() => {
              handleFirstLng();
            }}
            touchColor={Colors.base}
            bodyStyle={{
              borderWidth: 1,
              backgroundColor: Colors.base,
              width: Dimensions.get('window').width / 6,
              height: Dimensions.get('window').height / 9,
            }}>
            <Ionicons
              name='ios-body'
              size={45}
              color={selectFirstLanguage ? Colors.backSecond : Colors.inactive}
            />
          </Buttons.ButtonCircle>
          <Ionicons
            name='ios-arrow-round-forward'
            size={20}
            color={selectFirstLanguage ? Colors.backSecond : Colors.base}
          />

          <View
            style={{
              marginLeft: 15,
              marginBottom: 10,
              justifyContent: 'center',
            }}>
            {selectFirstLanguage ? (
              <SelectFirstLanguage />
            ) : (
              <View
                style={{
                  marginTop: 7,
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Buttons.ButtonBox
                    bodyStyle={{
                      width: Dimensions.get('window').width / 2,
                      height: Dimensions.get('window').height / 18,
                      marginBottom: 1,
                      borderWidth: 0,
                    }}>
                    <TxtLabel
                      style={{
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').height / 35,
                      }}>
                      {wordFrst[0][lngfrst]}
                    </TxtLabel>
                  </Buttons.ButtonBox>
                  <TxtButton style={{ color: Colors.inactive }}>
                    {wordEng[0][lngfrst]}
                  </TxtButton>
                </View>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name='ios-arrow-round-back'
            size={20}
            color={selectSecondLanguage ? Colors.backSecond : Colors.base}
          />
          <Buttons.ButtonCircle
            action={() => {
              handleSecondLng();
            }}
            touchColor={Colors.base}
            bodyStyle={{
              borderWidth: 1,
              backgroundColor: Colors.base,
              width: Dimensions.get('window').width / 6,
              height: Dimensions.get('window').height / 9,
            }}>
            <Ionicons
              name='ios-globe'
              size={35}
              color={selectSecondLanguage ? Colors.backSecond : Colors.inactive}
            />
          </Buttons.ButtonCircle>
          <Ionicons
            name='ios-arrow-round-forward'
            size={20}
            color={selectSecondLanguage ? Colors.backSecond : Colors.base}
          />

          <View
            style={{
              marginLeft: 15,
              marginBottom: 10,
              justifyContent: 'center',
            }}>
            {selectSecondLanguage ? (
              <SelectSecondLanguage />
            ) : (
              <View
                style={{
                  marginTop: 7,
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Buttons.ButtonBox
                    bodyStyle={{
                      width: Dimensions.get('window').width / 2,
                      height: Dimensions.get('window').height / 18,
                      borderWidth: 0,
                      marginBottom: 1,
                    }}>
                    <TxtLabel
                      style={{
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').height / 35,
                      }}>
                      {wordFrst[0][lngscnd]}
                    </TxtLabel>
                  </Buttons.ButtonBox>
                  <TxtButton style={{ color: Colors.inactive }}>
                    {wordEng[0][lngscnd]}
                  </TxtButton>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          height: '15%',
          alignItems: 'center',
          width: '95%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '40%',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{ width: '30%' }}>
            <Ionicons name='md-globe' size={25} color={Colors.backPrimary} />
          </View>
          <View style={{ width: '40%' }}>
            <TxtNormal>43</TxtNormal>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '40%',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{ width: '30%' }}>
            <Ionicons
              name='ios-chatbubbles'
              size={25}
              color={Colors.backPrimary}
            />
          </View>
          <View style={{ width: '40%' }}>
            <TxtNormal>3000</TxtNormal>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '95%',
          justifyContent: 'space-evenly',
          height: '15%',
          alignItems: 'center',
          padding: 10,
        }}>
        <TxtError style={{ color: Colors.surround }}>50</TxtError>
        <TxtError style={{ color: Colors.surround }}>100</TxtError>
        <TxtError style={{ color: Colors.surround }}>500</TxtError>
        <TxtError style={{ color: Colors.surround }}>1000</TxtError>
        <TxtError style={{ color: Colors.surround }}>3000</TxtError>
      </View>
      <View
        style={{
          height: '5%',
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name='ios-heart' size={20} color={'red'} />
          <Ionicons name='logo-android' size={25} color={'lightgreen'} />
          <TxtButton> v{Device.osVersion}</TxtButton>
        </View>
        <View>
          <TxtButton>
            {'   '}
            (c)2020 75Jozef Drha
          </TxtButton>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const data = useSelector((state) => state.words.words);
  const lngfrst = useSelector((state) => state.language.lngfrst);
  return {
    headerTitle: data[1282][lngfrst],
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
