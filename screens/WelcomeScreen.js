import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import * as Device from 'expo-device';

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
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Welcome;
  const txtscnd = Languages[lngscnd].Welcome;

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  const data = useSelector((state) => state.words.words);
  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];
  const actLngFrstEng = wordEng[0][lngfrst];
  const wordLocal = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScndLocal = wordLocal[0][lngscnd];
  const actLngFrstLocal = wordLocal[0][lngfrst];

  return (
    <ScreenFrame>
      <View
        style={{
          height: '20%',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
        }}>
        <Ionicons name='ios-funnel' size={60} color={Colors.backSecond} />
        <TxtHeader>F|U|N|N|E|L</TxtHeader>
      </View>
      <View
        style={{
          height: '30%',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-evenly',
        }}>
        <TxtNormal>
          Hello{' \n'}
          <Ionicons name='ios-person' size={22} color={Colors.textPrimary} />
          {'  '}
          {Device.deviceName} !{'\n'}
        </TxtNormal>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Ionicons name='ios-body' size={55} color={Colors.backSecond} />
            <View style={{ marginLeft: 20, marginBottom: 10 }}>
              <TxtNormal>
                {actLngFrstLocal}
                {'\n'}({actLngFrstEng})
              </TxtNormal>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Ionicons name='ios-globe' size={55} color={Colors.backSecond} />
            <View style={{ marginLeft: 20 }}>
              <TxtNormal>
                {actLngScndLocal}
                {'\n'}({actLngScndEng})
              </TxtNormal>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          height: '30%',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-evenly',
          }}>
          <Ionicons name='ios-book' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-bulb' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-cafe' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-people' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-fitness' size={40} color={Colors.backPrimary} />
        </View>
        <View
          style={{
            height: '30%',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-evenly',
          }}>
          <Ionicons name='ios-pulse' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-thumbs-up' size={40} color={Colors.backPrimary} />
          <Ionicons name='md-beer' size={40} color={Colors.backPrimary} />
          <Ionicons name='ios-hand' size={40} color={Colors.backPrimary} />
          <Ionicons name='md-bed' size={40} color={Colors.backPrimary} />
        </View>
        <Ionicons name='ios-happy' size={50} color={Colors.backPrimary} />
      </View>
      <View
        style={{
          height: '10%',
          width: '90%',
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
          <Ionicons name='ios-heart' size={25} color={'red'} />
          <Ionicons name='logo-android' size={30} color={'lightgreen'} />
          <TxtNormal> v{Device.osVersion}</TxtNormal>
        </View>
        <View>
          <TxtNormal>
            {'   '}
            {Device.brand}
          </TxtNormal>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Welcome;
  return {
    headerTitle: '',
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
