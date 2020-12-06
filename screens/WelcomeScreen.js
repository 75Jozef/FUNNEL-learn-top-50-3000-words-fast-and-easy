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
  TxtLabel,
  TxtButton,
} from '../components/UI/Txt';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import Fonts from '../constants/Fonts';

import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setTheme(actTheme);
  }, []);

  const data = useSelector((state) => state.words.words);
  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);

  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);

  const [actlngfrst, setActLngFrst] = useState(lngfrst);
  const [actlngscnd, setActLngScnd] = useState(lngscnd);
  const [selectFirstLanguage, setSelectFirstLanguage] = useState(false);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

  const [selectZeroScnd, setSelectZeroScnd] = useState(0);
  const [selectOneScnd, setSelectOneScnd] = useState(0);
  const [selectTwoScnd, setSelectTwoScnd] = useState(0);

  const languagesFirst = useSelector((state) => state.language.languagesFirst);
  const languagesSecond = useSelector(
    (state) => state.language.languagesSecond
  );

  const dispatch = useDispatch();

  useEffect(() => {
    counter();
  });

  const counter = () => {
    let cntZeroScnd = 0;
    let cntOneScnd = 0;
    let cntTwoScnd = 0;

    data.forEach((word) => {
      switch (word['st' + lngscnd]) {
        case 0:
          cntZeroScnd++;
          break;
        case 1:
          cntOneScnd++;
          break;
        case 2:
          cntTwoScnd++;
          break;
      }
    });

    setSelectZeroScnd(cntZeroScnd);
    setSelectOneScnd(cntOneScnd);
    setSelectTwoScnd(cntTwoScnd);
  };

  const setLanguageFirst = (lngfrst, lngscnd) => {
    dispatch(lngActions.setLng(lngfrst, lngscnd, theme));
    setActLngFrst(lngfrst);
    setSelectFirstLanguage(false);
  };

  const setLanguageSecond = (lngfrst, lngscnd) => {
    dispatch(lngActions.setLng(lngfrst, lngscnd, theme));
    setActLngScnd(lngscnd);
    setSelectSecondLanguage(false);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <ScrollView horizontal={true}>
        {languagesFirst.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: Colors.surround,
                borderWidth: 1,
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
                        }
                      : {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                        }
                  }
                  action={() => setLanguageFirst(lng, lngscnd)}>
                  <TxtLabel
                    style={{
                      color: Colors.textPrimary,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {wordFrst[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.surround }}>
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
        {languagesSecond.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: Colors.surround,
                borderWidth: 1,
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
                        }
                      : {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                        }
                  }
                  action={() => setLanguageSecond(lngfrst, lng)}>
                  <TxtLabel
                    style={{
                      color: Colors.textPrimary,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {wordFrst[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.surround }}>
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
        <TxtHeader style={{ fontFamily: Fonts.normal }}>F|U|N|N|E|L</TxtHeader>
      </View>
      <View
        style={{
          height: '10%',
          alignItems: 'center',
          width: '95%',
          justifyContent: 'center',
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
            height: Dimensions.get('window').height / 15,
          }}>
          <TxtNormal>
            {data[1252][lngfrst]}
            {' \n'}
          </TxtNormal>
          <TxtButton>{Device.deviceName}</TxtButton>
        </Buttons.ButtonCircle>
      </View>
      <View
        style={{
          width: '85%',
          height: '35%',
          overflow: 'hidden',
          justifyContent: 'space-evenly',
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
              height: Dimensions.get('window').height / 8,
            }}>
            <Ionicons
              name='ios-body'
              size={45}
              color={selectFirstLanguage ? Colors.backSecond : Colors.surround}
            />
          </Buttons.ButtonCircle>
          <Ionicons
            name='ios-arrow-round-forward'
            size={20}
            color={selectFirstLanguage ? Colors.backSecond : Colors.base}
          />

          <View
            style={{
              justifyContent: 'center',
            }}>
            {selectFirstLanguage ? (
              <SelectFirstLanguage />
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Buttons.ButtonBox
                    bodyStyle={{
                      width: Dimensions.get('window').width / 2,
                      height: Dimensions.get('window').height / 18,
                      borderWidth: 0,
                    }}
                    touchColor={Colors.base}>
                    <TxtLabel
                      style={{
                        color: Colors.textPrimary,
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
              height: Dimensions.get('window').height / 8,
            }}>
            <Ionicons
              name='ios-globe'
              size={35}
              color={selectSecondLanguage ? Colors.backSecond : Colors.surround}
            />
          </Buttons.ButtonCircle>
          <Ionicons
            name='ios-arrow-round-forward'
            size={20}
            color={selectSecondLanguage ? Colors.backSecond : Colors.base}
          />

          <View
            style={{
              justifyContent: 'center',
            }}>
            {selectSecondLanguage ? (
              <SelectSecondLanguage />
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Buttons.ButtonBox
                    bodyStyle={{
                      width: Dimensions.get('window').width / 2,
                      height: Dimensions.get('window').height / 18,
                      borderWidth: 0,
                    }}
                    touchColor={Colors.base}>
                    <TxtLabel
                      style={{
                        color: Colors.textPrimary,
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
          height: '35%',
          alignItems: 'center',
          width: '95%',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TxtNormal>
              <Ionicons name='ios-book' size={45} color={Colors.accent} />
            </TxtNormal>
            <TxtNormal>{selectZeroScnd}</TxtNormal>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TxtNormal>
              <Ionicons name='ios-attach' size={45} color={Colors.backSecond} />
            </TxtNormal>
            <TxtNormal>{selectOneScnd}</TxtNormal>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TxtNormal>
              <Ionicons
                name='ios-trophy'
                size={45}
                color={Colors.backPrimary}
              />
            </TxtNormal>
            <TxtNormal>{selectTwoScnd}</TxtNormal>
          </View>
        </View>

        <View>
          <View
            style={{
              alignItems: 'center',
              width: '40%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ width: '30%' }}>
              <Ionicons name='md-globe' size={35} color={Colors.surround} />
            </View>
            <View style={{ width: '50%' }}>
              <TxtBold style={{ color: Colors.surround }}>~ 43</TxtBold>
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
                size={35}
                color={Colors.surround}
              />
            </View>
            <View style={{ width: '50%' }}>
              <TxtBold style={{ color: Colors.surround }}>~ 3000</TxtBold>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}></View>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name='logo-android' size={20} color={Colors.inactive} />
          <TxtButton>v{Device.osVersion}</TxtButton>
        </View>
        <View>
          <TxtButton>
            {'   '}
            <Ionicons name='ios-heart' size={20} color={Colors.inactive} />
            2020{'   '}
            <Ionicons name='ios-person' size={20} color={Colors.inactive} />
            75Jozef Drha
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
          iconName={'md-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default WelcomeScreen;
