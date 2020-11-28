import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Dimensions } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import * as Device from 'expo-device';
import * as Buttons from './../components/UI/Buttons';
import * as Speech from 'expo-speech';

import Colors from '../constants/Colors';

import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
} from '../components/UI/Txt';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';

import * as Languages from '../data/languages';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Welcome;
  const lngscnd = useSelector((state) => state.language.lngscnd);
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
        <Buttons.ButtonCircle
          action={() => {
            Speech.speak(
              data[1252][lngscnd].concat(', ').concat(Device.deviceName),
              {
                language: lngscnd,
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
            width: Dimensions.get('window').width / 1.5,
            height: Dimensions.get('window').height / 11,
          }}>
          <TxtNormal>
            {data[1252][lngfrst]}
            {' \n'}
            {Device.deviceName}
            {'\n'}
          </TxtNormal>
        </Buttons.ButtonCircle>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Buttons.ButtonCircle
              action={() => {
                Speech.speak(actLngFrstLocal, {
                  language: lngfrst,
                  voice: Speech.VoiceQuality.Enhanced,
                  pitch: 1.0,
                  rate: 0.6,
                });
              }}
              touchColor={Colors.base}
              bodyStyle={{
                borderWidth: 1,
                backgroundColor: Colors.base,
                width: Dimensions.get('window').width / 6,
                height: Dimensions.get('window').height / 11,
              }}>
              <Ionicons name='ios-body' size={55} color={Colors.backSecond} />
            </Buttons.ButtonCircle>
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
            <Buttons.ButtonCircle
              action={() => {
                Speech.speak(actLngScndLocal, {
                  language: lngscnd,
                  voice: Speech.VoiceQuality.Enhanced,
                  pitch: 1.0,
                  rate: 0.6,
                });
              }}
              touchColor={Colors.base}
              bodyStyle={{
                borderWidth: 1,
                backgroundColor: Colors.base,
                width: Dimensions.get('window').width / 6,
                height: Dimensions.get('window').height / 11,
              }}>
              <Ionicons name='ios-globe' size={55} color={Colors.backSecond} />
            </Buttons.ButtonCircle>
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
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[310][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-book' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1229][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-happy' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[491][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-cafe' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1910][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-people' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1069][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-fitness' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-evenly',
          }}>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1243][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-heart' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1537][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons
              name='ios-thumbs-up'
              size={40}
              color={Colors.backPrimary}
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[258][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='md-beer' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[1224][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='ios-hand' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              Speech.speak(data[256][lngscnd], {
                language: lngscnd,
                voice: Speech.VoiceQuality.Enhanced,
                pitch: 1.0,
                rate: 0.6,
              });
            }}
            touchColor={Colors.backPrimary}
            bodyStyle={{
              borderWidth: 0,
              backgroundColor: Colors.base,
            }}>
            <Ionicons name='md-bed' size={40} color={Colors.backPrimary} />
          </Buttons.ButtonCircle>
        </View>
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
