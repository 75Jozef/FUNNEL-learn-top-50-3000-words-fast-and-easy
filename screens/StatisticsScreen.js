import React, { useState, useEffect } from 'react';
import { Dimensions, View, ScrollView, FlatList } from 'react-native';
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
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector, useDispatch } from 'react-redux';
import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';
import * as lngActions from '../store/actions/lang';
import { InfoLine } from '../components/UI/InfoLine';
import Fonts from '../constants/Fonts';

const StatisticsScreen = () => {
  const [countVZero, setCountVZero] = useState();
  const [countVOne, setCountVOne] = useState();
  const [countVTwo, setCountVTwo] = useState();
  const [countAZero, setCountAZero] = useState();
  const [countAOne, setCountAOne] = useState();
  const [countATwo, setCountATwo] = useState();
  const [countNZero, setCountNZero] = useState();
  const [countNOne, setCountNOne] = useState();
  const [countNTwo, setCountNTwo] = useState();
  const [countHZero, setCountHZero] = useState();
  const [countHOne, setCountHOne] = useState();
  const [countHTwo, setCountHTwo] = useState();
  const [countFZero, setCountFZero] = useState();
  const [countFOne, setCountFOne] = useState();
  const [countFTwo, setCountFTwo] = useState();
  const [countTZero, setCountTZero] = useState();
  const [countTOne, setCountTOne] = useState();
  const [countTTwo, setCountTTwo] = useState();
  const [countXZero, setCountXZero] = useState();
  const [countXOne, setCountXOne] = useState();
  const [countXTwo, setCountXTwo] = useState();

  const [selectZero, setSelectZero] = useState(0);
  const [selectOne, setSelectOne] = useState(0);
  const [selectTwo, setSelectTwo] = useState(0);

  const [select, setSelect] = useState();

  const [levelA, setLevelA] = useState(false);
  const [levelN, setLevelN] = useState(false);
  const [levelV, setLevelV] = useState(false);
  const [levelH, setLevelH] = useState(false);
  const [levelF, setLevelF] = useState(false);
  const [levelT, setLevelT] = useState(false);
  const [levelX, setLevelX] = useState(false);

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtscnd = Languages[lngscnd].Statistics;
  const txtfrst = Languages[lngfrst].Statistics;

  const data = useSelector((state) => state.words.words);

  const word = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = word[0][lngscnd];
  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];

  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

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

  useEffect(() => {
    counter();
  });

  const counter = () => {
    let cntZero = 0;
    let cntOne = 0;
    let cntTwo = 0;
    let cntVZero = 0;
    let cntAZero = 0;
    let cntNZero = 0;
    let cntHZero = 0;
    let cntFZero = 0;
    let cntTZero = 0;
    let cntXZero = 0;
    let cntVOne = 0;
    let cntAOne = 0;
    let cntNOne = 0;
    let cntHOne = 0;
    let cntFOne = 0;
    let cntTOne = 0;
    let cntXOne = 0;
    let cntVTwo = 0;
    let cntATwo = 0;
    let cntNTwo = 0;
    let cntHTwo = 0;
    let cntFTwo = 0;
    let cntTTwo = 0;
    let cntXTwo = 0;

    selectedWords.forEach((word) => {
      switch (word['st' + lngscnd]) {
        case 0:
          cntZero++;
          if (word['userlvl'] === 'v') {
            cntVZero++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntAZero++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNZero++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHZero++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFZero++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTZero++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXZero++;
            break;
          }
          break;
        case 1:
          cntOne++;
          if (word['userlvl'] === 'v') {
            cntVOne++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntAOne++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNOne++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHOne++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFOne++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTOne++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXOne++;
            break;
          }
          break;
        case 2:
          cntTwo++;
          if (word['userlvl'] === 'v') {
            cntVTwo++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntATwo++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNTwo++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHTwo++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFTwo++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTTwo++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXTwo++;
            break;
          }
          break;
      }
    });

    setSelectZero(cntZero);
    setSelectOne(cntOne);
    setSelectTwo(cntTwo);
    setCountVZero(cntVZero);
    setCountVOne(cntVOne);
    setCountVTwo(cntVTwo);
    setCountAZero(cntAZero);
    setCountAOne(cntAOne);
    setCountATwo(cntATwo);
    setCountNZero(cntNZero);
    setCountNOne(cntNOne);
    setCountNTwo(cntNTwo);
    setCountHZero(cntHZero);
    setCountHOne(cntHOne);
    setCountHTwo(cntHTwo);
    setCountFZero(cntFZero);
    setCountFOne(cntFOne);
    setCountFTwo(cntFTwo);
    setCountTZero(cntTZero);
    setCountTOne(cntTOne);
    setCountTTwo(cntTTwo);
    setCountXZero(cntXZero);
    setCountXOne(cntXOne);
    setCountXTwo(cntXTwo);
  };

  const handleSecondLng = (props) => {
    setSelectSecondLanguage((prev) => !prev);
  };

  const setLanguageSecond = (props) => {
    dispatch(lngActions.setLngScnd(props));
    setSelectSecondLanguage(false);
  };

  const SelectSecondLanguage = (props) => {
    return (
      <ScrollView>
        {languages.map((lng, index) => {
          return (
            <View key={index}>
              <Buttons.ButtonBox
                bodyStyle={
                  lng === lngscnd
                    ? {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 25,
                        backgroundColor: Colors.inactive,
                        padding: 3,
                      }
                    : {
                        width: Dimensions.get('window').width / 1.5,
                        height: Dimensions.get('window').height / 25,
                        borderColor: Colors.base,
                        padding: 3,
                      }
                }
                action={() => setLanguageSecond(lng)}
                insideStyle={
                  lng === lngscnd
                    ? {
                        color: Colors.backSecond,
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
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Ionicons name='ios-menu' size={40} color={Colors.textPrimary} />
        <Ionicons name='ios-infinite' size={40} color={Colors.accent} />
        <Ionicons name='ios-attach' size={40} color={Colors.backSecond} />
        <Ionicons name='md-checkmark' size={40} color={Colors.backPrimary} />
      </View>
    );
  };

  const WordsWindow = (props) => {
    return (
      <View>
        <FlatList
          data={selectedWords}
          keyExtractor={(item) => item['id' + lngscnd].toString()}
          renderItem={({ item }) => {
            return (
              <Buttons.ButtonBox
                bodyStyle={{
                  width: Dimensions.get('window').width / 1.5,
                  height: Dimensions.get('window').height / 25,
                  borderColor: Colors.base,
                }}
                insideStyle={{
                  color:
                    item['st' + lngscnd] === 0
                      ? Colors.accent
                      : item['st' + lngscnd] === 1
                      ? Colors.backSecond
                      : item['st' + lngscnd] === 2
                      ? Colors.backPrimary
                      : Colors.base,
                  fontSize: Dimensions.get('window').height / 30,
                }}>
                {item[lngscnd]}
              </Buttons.ButtonBox>
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
          height: '18%',
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
            alignItems: 'center',
          }}>
          <View
            style={{
              width: Dimensions.get('window').width / 6,
            }}>
            <Buttons.ButtonCircle bodyStyle={{ borderColor: Colors.base }}>
              <Ionicons name='ios-body' size={25} color={Colors.surround} />
            </Buttons.ButtonCircle>
          </View>

          <View style={{ marginLeft: 20 }}>
            <ComboAround>
              <TxtNormal style={{ color: Colors.surround }}>
                Nick: {'Cabbage Head'}
              </TxtNormal>
            </ComboAround>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <View style={{ width: Dimensions.get('window').width / 6 }}>
            <Buttons.ButtonCircle
              touchColor={Colors.backSecond}
              bodyStyle={
                selectSecondLanguage
                  ? { borderColor: Colors.surround, borderWidth: 2 }
                  : { borderColor: Colors.surround }
              }
              action={() => handleSecondLng()}>
              <Ionicons
                name='ios-globe'
                size={25}
                color={
                  selectSecondLanguage ? Colors.backSecond : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
          </View>

          <View style={{ marginLeft: 20, alignItems: 'center' }}>
            <ComboAround>
              <TxtNormal
                style={
                  selectSecondLanguage
                    ? { color: Colors.backSecond }
                    : { color: Colors.surround }
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
          height: '22%',
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
          height: '55%',
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
          ) : null}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '5%',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          borderColor: Colors.inactive,
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View
          style={{
            width: '90%',

            justifyContent: 'center',
          }}></View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Statistics;
  return {
    headerTitle: `${txtfrst.header}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName={'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default StatisticsScreen;
