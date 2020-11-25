import React, { useState, useEffect } from 'react';
import { Restart } from 'fiction-expo-restart';

import {
  View,
  Dimensions,
  TouchableNativeFeedback,
  ScrollView,
  Alert,
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

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

import { useSelector, useDispatch } from 'react-redux';
import * as Languages from '../data/languages';

import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';

import * as lngActions from '../store/actions/lang';
import * as themeActions from '../store/actions/theme';
import * as wordActions from '../store/actions/words';

import ComboAround from '../components/UI/ComboAround';
import Fonts from '../constants/Fonts';

const OptionsScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Options;
  const txtscnd = Languages[lngscnd].Options;

  const [selectFirstLanguage, setSelectFirstLanguage] = useState(false);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);
  const [resetStatuses, setResetStatuses] = useState(false);
  const [locker, setLocker] = useState(true);

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

  const handleFirstLng = (props) => {
    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      setSelectFirstLanguage(true);
      return;
    }

    if (selectFirstLanguage) {
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
    }

    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      return;
    }
    setSelectSecondLanguage(true);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View key={index} style={{ marginTop: 7 }}>
              <Buttons.ButtonBox
                bodyStyle={
                  lng === lngfrst
                    ? {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 28,
                        backgroundColor: Colors.inactive,
                        padding: 3,
                      }
                    : {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 28,
                        borderColor: Colors.base,
                        padding: 3,
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
            <View key={index} style={{ marginTop: 7 }}>
              <Buttons.ButtonBox
                bodyStyle={
                  lng === lngscnd
                    ? {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 28,
                        backgroundColor: Colors.inactive,
                        padding: 3,
                      }
                    : {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 28,
                        borderColor: Colors.base,
                        padding: 3,
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
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const setLanguageFirst = (props) => {
    dispatch(lngActions.setLngFrst(props, lngscnd, data));
    setSelectFirstLanguage(false);
  };
  const setLanguageSecond = (props) => {
    dispatch(lngActions.setLngScnd(lngfrst, props, data));
    setSelectSecondLanguage(false);
  };

  const handleTheme = (props) => {
    dispatch(themeActions.theme(props));
    setTheme(props);
  };

  const [theme, setTheme] = useState();
  const [thm, setThm] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setThm(actTheme);
  });

  const handleReset = (props) => {
    Alert.alert(
      'Reset all words to unknown?',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            setResetStatuses((prev) => !prev);
            setLocker((prev) => !prev);
          },
          style: 'cancel',
        },
        {
          text: 'RESET',
          style: 'destructive',
          onPress: () => {
            dispatch(wordActions.resetStatuses());
            setLocker((prev) => !prev);
            setResetStatuses((prev) => !prev);
            Restart();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const ResetStatuses = (props) => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => setLocker((prev) => !prev)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => setLocker((prev) => !prev)}
              touchColor={Colors.backSecond}>
              <Ionicons
                name={locker ? 'ios-lock' : 'ios-unlock'}
                size={25}
                color={locker ? Colors.accent : Colors.backPrimary}
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectFirstLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }></TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>
        {!locker ? (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
            delayPressIn={0}
            onPress={() => setLocker((prev) => !prev)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Buttons.ButtonCircle
                action={() => handleReset()}
                touchColor={Colors.backSecond}>
                <Ionicons
                  name={'ios-refresh'}
                  size={25}
                  color={locker ? Colors.accent : Colors.backPrimary}
                />
              </Buttons.ButtonCircle>
              <View style={{ marginLeft: 20 }}>
                <ComboAround>
                  <TxtNormal
                    style={
                      selectFirstLanguage
                        ? { color: Colors.textPrimary }
                        : { color: Colors.surround }
                    }></TxtNormal>
                </ComboAround>
              </View>
            </View>
          </TouchableNativeFeedback>
        ) : (
          <></>
        )}
      </View>
    );
  };

  const InfoBox = (props) => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <TxtItalic>options information</TxtItalic>
          <TxtItalic>options information</TxtItalic>
        </View>
      </View>
    );
  };

  return (
    <ScreenFrame>
      <View
        style={{
          height: '50%',
          width: '80%',
          justifyContent: 'space-evenly',
          backgroundColor: Colors.base,
        }}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => handleFirstLng()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => handleFirstLng()}
              touchColor={Colors.backSecond}>
              <Ionicons
                name='ios-body'
                size={25}
                color={
                  selectFirstLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectFirstLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }>
                  {actLngFrst}
                  {'\n'}({actLngFrstEng})
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => handleSecondLng()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => handleSecondLng()}
              touchColor={Colors.backSecond}>
              <Ionicons
                name='ios-globe'
                size={25}
                color={
                  selectSecondLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }>
                  {actLngScnd}
                  {'\n'}({actLngScndEng})
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => handleTheme('dark')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => handleTheme('dark')}
              touchColor={Colors.backSecond}>
              <Ionicons
                name='ios-moon'
                size={25}
                color={
                  selectSecondLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }>
                  dark theme
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => handleTheme('light')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => handleTheme('light')}
              touchColor={Colors.backSecond}>
              <Ionicons
                name='ios-sunny'
                size={25}
                color={
                  selectSecondLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }>
                  light theme
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
          delayPressIn={0}
          onPress={() => setResetStatuses((prev) => !prev)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => setResetStatuses((prev) => !prev)}
              touchColor={Colors.backSecond}>
              <Ionicons
                name='ios-refresh'
                size={25}
                color={
                  selectSecondLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.textPrimary }
                      : { color: Colors.surround }
                  }>
                  reset all words
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View
        style={{
          backgroundColor: Colors.base,
          height: '45%',
          alignItems: 'center',
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
          borderColor: Colors.inactive,
          width: '90%',
        }}>
        {selectFirstLanguage ? (
          <SelectFirstLanguage />
        ) : selectSecondLanguage ? (
          <SelectSecondLanguage />
        ) : resetStatuses ? (
          <ResetStatuses />
        ) : (
          <InfoBox />
        )}
      </View>
      <View
        style={{
          marginTop: 10,
          height: '5%',
          alignItems: 'center',
        }}></View>
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
