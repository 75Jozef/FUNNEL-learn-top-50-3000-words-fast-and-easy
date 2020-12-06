import React, { useState, useEffect } from 'react';
import { Dimensions, View, ScrollView, FlatList } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import * as Device from 'expo-device';

import Colors from '../constants/Colors';
import { TxtBold, TxtNormal, TxtItalic, TxtButton } from '../components/UI/Txt';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';
import * as lngActions from '../store/actions/lang';

import Fonts from '../constants/Fonts';

const StatisticsScreen = () => {
  const [selectZero, setSelectZero] = useState(0);
  const [selectOne, setSelectOne] = useState(0);
  const [selectTwo, setSelectTwo] = useState(0);

  const [select, setSelect] = useState(3);

  const [levelA, setLevelA] = useState(false);
  const [levelN, setLevelN] = useState(false);
  const [levelV, setLevelV] = useState(false);
  const [levelH, setLevelH] = useState(false);
  const [levelF, setLevelF] = useState(false);
  const [levelT, setLevelT] = useState(false);
  const [levelX, setLevelX] = useState(false);

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);

  const data = useSelector((state) => state.words.words);

  const word = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = word[0][lngscnd];
  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];

  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

  const dispatch = useDispatch();

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setTheme(actTheme);
  }, []);

  useEffect(() => {
    counter();
  }, []);

  const languagesSecond = useSelector(
    (state) => state.language.languagesSecond
  );

  const selectedWords = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA) ||
      (word.userlvl === 'n' && levelN) ||
      (word.userlvl === 'v' && levelV) ||
      (word.userlvl === 'h' && levelH) ||
      (word.userlvl === 'f' && levelF) ||
      (word.userlvl === 't' && levelT) ||
      (word.userlvl === 'x' && levelX) ||
      word.userlvl === 'l'
  );

  const words = selectedWords.filter(
    (word) => word['st' + lngscnd] === select || word.userlvl === 'l'
  );

  const counter = () => {
    let cntZero = 0;
    let cntOne = 0;
    let cntTwo = 0;

    selectedWords.forEach((word) => {
      switch (word['st' + lngscnd]) {
        case 0:
          cntZero++;
          break;
        case 1:
          cntOne++;
          break;
        case 2:
          cntTwo++;
          break;
      }
    });

    setSelectZero(cntZero);
    setSelectOne(cntOne);
    setSelectTwo(cntTwo);
  };

  const handleSecondLng = (props) => {
    setSelectSecondLanguage((prev) => !prev);
  };

  const setLanguageSecond = (lngfrst, lngscnd) => {
    dispatch(lngActions.setLng(lngfrst, lngscnd, theme));
    setSelectSecondLanguage(false);
  };

  const SelectSecondLanguage = (props) => {
    return (
      <ScrollView>
        {languagesSecond.map((lng, index) => {
          return (
            <View key={index}>
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
                action={() => setLanguageSecond(lngfrst, lng)}
                insideStyle={
                  lng === lngscnd
                    ? {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').height / 35,
                      }
                    : {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').height / 35,
                      }
                }>
                {word[0][lng]}
              </Buttons.ButtonBox>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const Statistics = () => {
    return (
      <>
        <View
          style={{
            height: '5%',
            width: '80%',
          }}></View>
        <View
          style={{
            width: '100%',
            height: '70%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>
          <ComboAround>
            <Buttons.ButtonCircle
              action={() => setSelect(3)}
              touchColor={Colors.surround}
              bodyStyle={
                select === 3
                  ? { borderWidth: 3, borderColor: Colors.surround }
                  : null
              }>
              <Ionicons name='ios-list' size={40} color={Colors.surround} />
            </Buttons.ButtonCircle>
            <TxtBold style={{ color: Colors.surround }}>{'100%'}</TxtBold>
            <TxtButton>{selectZero + selectOne + selectTwo}</TxtButton>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              action={() => setSelect(0)}
              touchColor={Colors.accent}
              bodyStyle={
                select === 0
                  ? { borderWidth: 3, borderColor: Colors.surround }
                  : null
              }>
              <Ionicons name='ios-book' size={40} color={Colors.accent} />
            </Buttons.ButtonCircle>
            {levelA ||
            levelN ||
            levelV ||
            levelH ||
            levelF ||
            levelT ||
            levelX ? (
              <TxtBold style={{ color: Colors.accent }}>
                {Math.round(
                  (selectZero / (selectZero + selectOne + selectTwo)) * 100
                )}
                {'%'}
              </TxtBold>
            ) : (
              <TxtBold></TxtBold>
            )}

            <TxtButton>{selectZero}</TxtButton>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              action={() => setSelect(1)}
              touchColor={Colors.backSecond}
              bodyStyle={
                select === 1
                  ? { borderWidth: 3, borderColor: Colors.surround }
                  : null
              }>
              <Ionicons name='ios-attach' size={40} color={Colors.backSecond} />
            </Buttons.ButtonCircle>
            {levelA ||
            levelN ||
            levelV ||
            levelH ||
            levelF ||
            levelT ||
            levelX ? (
              <TxtBold style={{ color: Colors.backSecond }}>
                {Math.round(
                  (selectOne / (selectZero + selectOne + selectTwo)) * 100
                )}
                {'%'}
              </TxtBold>
            ) : (
              <TxtBold></TxtBold>
            )}
            <TxtButton>{selectOne}</TxtButton>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              action={() => setSelect(2)}
              touchColor={Colors.backPrimary}
              bodyStyle={
                select === 2
                  ? { borderWidth: 3, borderColor: Colors.surround }
                  : null
              }>
              <Ionicons
                name='ios-trophy'
                size={40}
                color={Colors.backPrimary}
              />
            </Buttons.ButtonCircle>
            {levelA ||
            levelN ||
            levelV ||
            levelH ||
            levelF ||
            levelT ||
            levelX ? (
              <TxtBold style={{ color: Colors.backPrimary }}>
                {Math.round(
                  (selectTwo / (selectZero + selectOne + selectTwo)) * 100
                )}
                {'%'}
              </TxtBold>
            ) : (
              <TxtBold></TxtBold>
            )}
            <TxtButton>{selectTwo}</TxtButton>
          </ComboAround>
        </View>
        <View
          style={{
            height: '10%',
            width: '80%',
            borderColor: Colors.surround,
            borderWidth: 1,
            borderRadius: 25,
            flexDirection: 'row',
            overflow: 'hidden',
          }}>
          <View
            style={{
              backgroundColor: Colors.accent,
              width:
                (selectZero / (selectZero + selectOne + selectTwo)) * 100 + '%',
            }}></View>
          <View
            style={{
              backgroundColor: Colors.backSecond,
              width:
                (selectOne / (selectZero + selectOne + selectTwo)) * 100 + '%',
            }}></View>
          <View
            style={{
              backgroundColor: Colors.backPrimary,
              width:
                (selectTwo / (selectZero + selectOne + selectTwo)) * 100 + '%',
            }}></View>
        </View>
        <View
          style={{
            height: '15%',
            width: '80%',
          }}></View>
      </>
    );
  };

  const WordsWindow = (props) => {
    return (
      <View
        style={{
          width: '99%',
        }}>
        <FlatList
          data={select === 3 ? selectedWords : words}
          keyExtractor={(item) => item['id' + lngscnd].toString()}
          initialNumToRender={50}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: 10,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Buttons.ButtonBox
                  bodyStyle={{
                    width: Dimensions.get('window').width / 1.8,
                    height: Dimensions.get('window').height / 28,
                    borderColor: Colors.base,
                    marginBottom: 3,
                  }}
                  insideStyle={{
                    color:
                      item['st' + lngscnd] === 0 && item[lngscnd] !== lngscnd
                        ? Colors.accent
                        : item['st' + lngscnd] === 1
                        ? Colors.backSecond
                        : item['st' + lngscnd] === 2
                        ? Colors.backPrimary
                        : Colors.base,
                    fontSize: Dimensions.get('window').height / 31,
                  }}>
                  {item[lngscnd]}
                </Buttons.ButtonBox>
                <TxtButton
                  style={
                    item[lngfrst] === lngfrst
                      ? { color: Colors.base }
                      : { color: Colors.surround }
                  }>
                  {item[lngfrst]}
                </TxtButton>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <ScreenFrame>
      <View
        style={{
          height: '10%',
          width: '90%',
          justifyContent: 'space-evenly',
          borderColor: Colors.inactive,
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            overflow: 'hidden',
            alignItems: 'center',
          }}>
          <View
            style={{
              overflow: 'hidden',
              width: Dimensions.get('window').width / 7,
            }}>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              bodyStyle={
                selectSecondLanguage
                  ? {
                      overflow: 'hidden',
                      borderColor: Colors.surround,
                      borderWidth: 2,
                      width: Dimensions.get('window').width / 7,
                      height: Dimensions.get('window').height / 20,
                    }
                  : {
                      overflow: 'hidden',
                      borderColor: Colors.inactive,
                      width: Dimensions.get('window').width / 7,
                      height: Dimensions.get('window').height / 20,
                    }
              }
              action={() => handleSecondLng()}>
              <Ionicons
                name='ios-globe'
                size={20}
                color={
                  selectSecondLanguage ? Colors.textPrimary : Colors.inactive
                }
              />
            </Buttons.ButtonCircle>
          </View>

          <View style={{ marginLeft: 20, alignItems: 'center' }}>
            <ComboAround>
              <TxtNormal
                style={
                  selectSecondLanguage
                    ? {
                        color: Colors.textPrimary,
                        fontSize: Dimensions.get('window').height / 45,
                      }
                    : {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').height / 45,
                      }
                }>
                {actLngScnd}
                {'\n'}({actLngScndEng})
              </TxtNormal>
            </ComboAround>
          </View>
        </View>
      </View>

      <View
        style={{
          height: '30%',
          width: '90%',
          borderColor: Colors.inactive,
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
          alignItems: 'center',
        }}>
        {selectSecondLanguage ? <SelectSecondLanguage /> : <Statistics />}
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '57%',
          justifyContent: 'flex-start',
          width: '90%',
          borderColor: Colors.inactive,
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
          overflow: 'hidden',
        }}>
        <View
          style={{
            width: '30%',
            borderColor: Colors.inactive,
            borderWidth: 1,
            borderStyle: 'dotted',
            borderRadius: 25,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Buttons.ButtonCircle
            touchColor={Colors.backSecond}
            action={() => {
              setLevelV((prev) => !prev);
            }}
            bodyStyle={
              levelV
                ? {
                    borderWidth: 1,
                    borderRadius: 25,
                    borderColor: Colors.surround,
                    marginBottom: null,
                  }
                : { backgroundColor: Colors.base, marginBottom: null }
            }
            insideStyle={
              levelV
                ? {
                    fontFamily: Fonts.bold,
                    color: Colors.surround,
                  }
                : {
                    fontFamily: Fonts.bold,
                    color: Colors.inactive,
                  }
            }>
            50v
          </Buttons.ButtonCircle>

          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelN((prev) => !prev);
              }}
              bodyStyle={
                levelN
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      marginBottom: null,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelN
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              50n
            </Buttons.ButtonCircle>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelA((prev) => !prev);
              }}
              bodyStyle={
                levelA
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelA
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              50a
            </Buttons.ButtonCircle>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelH((prev) => !prev);
              }}
              bodyStyle={
                levelH
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelH
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              100
            </Buttons.ButtonCircle>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelF((prev) => !prev);
              }}
              bodyStyle={
                levelF
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelF
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              500
            </Buttons.ButtonCircle>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelT((prev) => !prev);
              }}
              bodyStyle={
                levelT
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelT
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              1000
            </Buttons.ButtonCircle>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              action={() => {
                setLevelX((prev) => !prev);
              }}
              bodyStyle={
                levelX
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelX
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : {
                      fontFamily: Fonts.bold,
                      color: Colors.inactive,
                    }
              }>
              3000
            </Buttons.ButtonCircle>
          </ComboAround>
        </View>
        <View
          style={{
            width: '70%',
            borderColor: Colors.inactive,
            borderWidth: 1,
            borderStyle: 'dotted',
            borderRadius: 25,
          }}>
          {levelA ||
          levelV ||
          levelN ||
          levelH ||
          levelF ||
          levelT ||
          levelX ? (
            <WordsWindow />
          ) : (
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TxtItalic>
                {data[451][lngfrst]} {data[1966][lngfrst]}
              </TxtItalic>
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '3%',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          borderColor: Colors.inactive,
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View
          style={{
            width: '98%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TxtButton>{new Date().toDateString().slice(4)}</TxtButton>
          <TxtButton> {Device.deviceName} </TxtButton>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const data = useSelector((state) => state.words.words);
  const lngfrst = useSelector((state) => state.language.lngfrst);
  return {
    headerTitle: data[2530][lngfrst],
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

export default StatisticsScreen;
