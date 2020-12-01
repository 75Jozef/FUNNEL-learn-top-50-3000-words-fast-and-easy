import React, { useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Colors from '../constants/Colors';
import {
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
  TxtBold,
} from '../components/UI/Txt';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

import { useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

const InstructionsScreen = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setTheme(actTheme);
  }, []);

  const data = useSelector((state) => state.words.words);
  const lngfrst = useSelector((state) => state.language.lngfrst);

  return (
    <ScreenFrame>
      <View
        style={{
          height: '20%',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TxtNormal>
            {' '}
            {data[758][lngfrst]} - {data[451][lngfrst]}
          </TxtNormal>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <TxtNormal>
            {data[1206][lngfrst]} - {data[451][lngfrst]}
          </TxtNormal>
        </View>
      </View>

      <View
        style={{
          height: '47%',
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <TxtNormal> </TxtNormal>
        <TxtNormal> </TxtNormal>
        <TxtNormal>
          {data[2403][lngfrst]} {data[2470][lngfrst]}
        </TxtNormal>
        <TxtNormal> </TxtNormal>
        <TxtNormal> </TxtNormal>
        <TxtNormal>
          {data[2966][lngfrst]} {data[1545][lngfrst]}
        </TxtNormal>
        <TxtNormal>
          {data[2309][lngfrst]} {'   '} {data[1262][lngfrst]} /{' '}
          {data[785][lngfrst]}
        </TxtNormal>
      </View>

      <View
        style={{
          height: '25%',
          justifyContent: 'space-between',

          width: '90%',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <TxtNormal>
          {data[1206][lngfrst]} - {data[40][lngfrst]} {data[2966][lngfrst]}
        </TxtNormal>

        <TxtNormal>{data[2345][lngfrst]}</TxtNormal>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TxtNormal>{data[1360][lngfrst]}</TxtNormal>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: '?',
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
