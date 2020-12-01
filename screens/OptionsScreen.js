import React, { useState, useEffect, useCallback } from 'react';

import {
  View,
  Dimensions,
  TouchableNativeFeedback,
  ScrollView,
  Alert,
  DevSettings,
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

import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';

import * as lngActions from '../store/actions/lang';
import * as themeActions from '../store/actions/theme';
import * as wordActions from '../store/actions/words';

import ComboAround from '../components/UI/ComboAround';

const OptionsScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);

  const [selectFirstLanguage, setSelectFirstLanguage] = useState(false);
  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);
  const [resetStatuses, setResetStatuses] = useState(false);
  const [locker, setLocker] = useState(true);

  const data = useSelector((state) => state.words.words);

  const wordFrst = data.filter((word) => word['id' + lngfrst] === 2999);

  const actLngFrst = wordFrst[0][lngfrst];
  const actLngScnd = wordFrst[0][lngscnd];

  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngFrstEng = wordEng[0][lngfrst];
  const actLngScndEng = wordEng[0][lngscnd];

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
      setSelectFirstLanguage(false);
      setLocker(true);
      setResetStatuses(false);
      return;
    }

    if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      setLocker(true);
      setResetStatuses(false);
      return;
    }
    setLocker(true);
    setResetStatuses(false);
    setSelectFirstLanguage(true);
  };

  const handleSecondLng = (props) => {
    if (selectFirstLanguage) {
      setSelectFirstLanguage(false);
      setSelectSecondLanguage(false);
      setLocker(true);
      setResetStatuses(false);
      return;
    }

    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      setLocker(true);
      setResetStatuses(false);
      return;
    }
    setLocker(true);
    setResetStatuses(false);
    setSelectSecondLanguage(true);
  };

  const SelectFirstLanguage = (props) => {
    return (
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 7,
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View style={{ alignItems: 'center' }}>
                <Buttons.ButtonBox
                  bodyStyle={
                    lng === lngfrst
                      ? {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 22,
                          backgroundColor: Colors.inactive,
                          marginBottom: 1,
                        }
                      : {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 22,
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
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 7,
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View style={{ alignItems: 'center' }}>
                <Buttons.ButtonBox
                  bodyStyle={
                    lng === lngscnd
                      ? {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 22,
                          backgroundColor: Colors.inactive,
                          marginBottom: 5,
                        }
                      : {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 22,
                          borderColor: Colors.base,
                          marginBottom: 5,
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

  const setLanguageFirst = (lngfrst) => {
    dispatch(lngActions.setLngFrst(lngfrst, lngscnd));
    setSelectFirstLanguage(false);
  };

  const setLanguageSecond = (lngscnd) => {
    dispatch(lngActions.setLngScnd(lngfrst, lngscnd));
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
      'Application RESET',
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
            DevSettings.reload();
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
              touchColor={locker ? Colors.accent : Colors.backPrimary}>
              <Ionicons
                name={locker ? 'ios-lock' : 'ios-unlock'}
                size={25}
                color={Colors.accent}
              />
            </Buttons.ButtonCircle>
            {locker ? null : <TxtBold> {data[222][lngfrst]}</TxtBold>}
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
              <TxtBold> {data[2244][lngfrst]}</TxtBold>
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
          <TxtItalic>
            {' '}
            <Ionicons name='md-settings' size={100} color={Colors.inactive} />
          </TxtItalic>
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
              <Ionicons name='ios-moon' size={25} color={Colors.surround} />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={{
                    color: Colors.surround,
                  }}>
                  {data[1753][lngfrst]}
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
              <Ionicons name='ios-sunny' size={25} color={Colors.surround} />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal style={{ color: Colors.surround }}>
                  {data[682][lngfrst]}
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
                color={!resetStatuses ? Colors.surround : Colors.backSecond}
              />
            </Buttons.ButtonCircle>
            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    !resetStatuses
                      ? { color: Colors.surround }
                      : { color: Colors.backSecond }
                  }>
                  {data[2244][lngfrst]}
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
        {selectFirstLanguage && !resetStatuses && <SelectFirstLanguage />}
        {selectSecondLanguage && !resetStatuses && <SelectSecondLanguage />}
        {resetStatuses && <ResetStatuses />}
        {!selectFirstLanguage && !selectSecondLanguage && <InfoBox />}
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
  const data = useSelector((state) => state.words.words);
  const lngfrst = useSelector((state) => state.language.lngfrst);
  return {
    headerTitle: data[45][lngfrst],
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
