import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import { TxtNormal } from '../components/UI/Txt';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

import { useSelector } from 'react-redux';

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
      <Image
        source={
          theme === 'light'
            ? require('./../Images/instructions_light.png')
            : require('./../Images/instructions_dark.png')
        }
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'contain',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.5,
        }}
      />
      <View
        style={{
          height: '20%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TxtNormal>
            {data[758][lngfrst]} - {data[451][lngfrst]}
          </TxtNormal>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 15,
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
        }}>
        <TxtNormal> </TxtNormal>

        <TxtNormal>
          {data[2403][lngfrst]} {data[2470][lngfrst]} - {data[451][lngfrst]}
        </TxtNormal>
        <TxtNormal> </TxtNormal>
        <TxtNormal>
          {data[2966][lngfrst]} {data[1545][lngfrst]} - {data[451][lngfrst]}
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
        }}>
        <TxtNormal style={{ paddingTop: 10 }}>
          {data[1206][lngfrst]} - {data[40][lngfrst]} {data[2966][lngfrst]}
        </TxtNormal>

        <TxtNormal style={{ marginTop: 30 }}>{data[2345][lngfrst]}</TxtNormal>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TxtNormal>{data[1360][lngfrst]}</TxtNormal>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: ':)',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Master'
          iconName={'ios-arrow-round-back'}
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default InstructionsScreen;
