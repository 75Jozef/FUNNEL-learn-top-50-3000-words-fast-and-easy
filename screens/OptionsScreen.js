import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
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

import { useSelector } from 'react-redux';
import * as Languages from '../data/languages';

import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';

const OptionsScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Options;
  const txtscnd = Languages[lngscnd].Options;

  const [iconSize] = useState(20);
  const [textSize] = useState(Dimensions.get('window').width / 25);
  const [buttonSize] = useState(Dimensions.get('window').width / 5);
  const [buttonBodyColor] = useState(Colors.surround);
  const [buttonTextColor] = useState(Colors.textPrimary);

  const data = useSelector((state) => state.words.words);

  const wordScnd = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = wordScnd[0][lngscnd];

  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);
  const actLngFrst = wordFrst[0][lngfrst];

  useEffect(() => {});

  return (
    <ScreenFrame>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 30,
            marginTop: 30,
          }}>
          <View style={{ width: 80 }}>
            <Buttons.ButtonCircle>
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
            <TxtNormal>{actLngFrst}</TxtNormal>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 30,
            marginTop: 30,
          }}>
          <View style={{ width: 80 }}>
            <Buttons.ButtonCircle>
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

      <View style={{ flex: 2 }}></View>
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
