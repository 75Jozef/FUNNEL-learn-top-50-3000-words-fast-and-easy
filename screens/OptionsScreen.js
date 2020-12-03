import React, { useState, useEffect } from 'react';

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

  const languageLocal = data.filter((word) => word['iden'] === 2999);
  const actLngFrst = languageLocal[0][lngfrst];
  const actLngScnd = languageLocal[0][lngscnd];

  const languageEng = data.filter((word) => word['iden'] === 3001);
  const actLngFrstEng = languageEng[0][lngfrst];
  const actLngScndEng = languageEng[0][lngscnd];

  const dispatch = useDispatch();

  const languagesFirst = useSelector((state) => state.language.languagesFirst);
  const languagesSecond = useSelector(
    (state) => state.language.languagesSecond
  );

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
        {languagesFirst.map((lng, index) => {
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
                  action={() => setLanguageFirst(lng, lngscnd)}>
                  <TxtLabel
                    style={{
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {languageLocal[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.inactive }}>
                  {languageEng[0][lng]}
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
        {languagesSecond.map((lng, index) => {
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
                  action={() => setLanguageSecond(lngfrst, lng)}>
                  <TxtLabel
                    style={{
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 35,
                    }}>
                    {languageLocal[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
                <TxtButton style={{ color: Colors.inactive }}>
                  {languageEng[0][lng]}
                </TxtButton>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const setLanguageFirst = (lngfrst, lngscnd) => {
    dispatch(lngActions.setLng(lngfrst, lngscnd, theme));
    setSelectFirstLanguage(false);
  };

  const setLanguageSecond = (lngfrst, lngscnd) => {
    dispatch(lngActions.setLng(lngfrst, lngscnd, theme));
    setSelectSecondLanguage(false);
  };

  const handleTheme = (thm, lngfrst, lngscnd) => {
    dispatch(themeActions.theme(lngfrst, lngscnd, thm));
    setTheme(thm);
  };

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setTheme(actTheme);
  }, []);

  const handleReset = (props) => {
    Alert.alert(
      `${data[2244][lngfrst]} ${data[96][lngfrst]}...`,
      `${data[2988][lngfrst]}?`,
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
              touchColor={Colors.accent}>
              <Ionicons
                name={locker ? 'ios-lock' : 'ios-unlock'}
                size={25}
                color={locker ? Colors.accent : Colors.backPrimary}
              />
            </Buttons.ButtonCircle>
            {locker ? null : (
              <TxtBold style={{ color: Colors.backPrimary }}>
                {' '}
                {data[222][lngfrst]}
              </TxtBold>
            )}
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
                  color={locker ? Colors.backPrimary : Colors.accent}
                />
              </Buttons.ButtonCircle>
              <TxtBold style={{ color: Colors.accent }}>
                {' '}
                {data[2244][lngfrst]}
              </TxtBold>
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
        <View style={{ borderRadius: 25, overflow: 'hidden' }}>
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
        </View>

        <View style={{ borderRadius: 25, overflow: 'hidden' }}>
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
        </View>
        <View style={{ borderRadius: 25, overflow: 'hidden' }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
            delayPressIn={0}
            onPress={() => handleTheme('dark', lngfrst, lngscnd)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Buttons.ButtonCircle
                action={() => handleTheme('dark', lngfrst, lngscnd)}
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
        </View>
        <View style={{ borderRadius: 25, overflow: 'hidden' }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
            delayPressIn={0}
            onPress={() => handleTheme('light', lngfrst, lngscnd)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Buttons.ButtonCircle
                action={() => handleTheme('light', lngfrst, lngscnd)}
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
        </View>
        <View style={{ borderRadius: 25, overflow: 'hidden' }}>
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
          iconName={'md-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OptionsScreen;
