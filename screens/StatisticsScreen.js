import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  TouchableNativeFeedback,
  Platform,
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
  const [iconSize] = useState(20);

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

  return (
    <ScreenFrame>
      <View style={{ backgroundColor: 'pink', height: '10%', width: '90%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
          }}>
          <View style={{ width: Dimensions.get('window').width / 8 }}>
            <Buttons.ButtonCircle>
              <Ionicons
                name='ios-globe'
                size={iconSize}
                color={Colors.backSecond}
              />
            </Buttons.ButtonCircle>
          </View>

          <View style={{ marginLeft: 20 }}>
            <ComboAround>
              <TxtNormal>{actLngScnd}</TxtNormal>
              <TxtNormal>({actLngScndEng})</TxtNormal>
            </ComboAround>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: '10%',
          width: '90%',
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          height: '70%',
          justifyContent: 'flex-start',
          width: '90%',
        }}>
        <View
          style={{
            width: '30%',
            backgroundColor: 'blue',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'black',
              height: '16%',
              flexDirection: 'column',
            }}>
            <Buttons.ButtonBox
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
                  : null
              }>
              50v
            </Buttons.ButtonBox>
            <TxtBold>kuk</TxtBold>
            <InfoLine
              infoStyle={{
                backgroundColor: Colors.accent,
                width: (countVZero / 50) * 100 + '%',
              }}
            />
            <InfoLine
              infoStyle={{
                backgroundColor: Colors.backSecond,
                width: (countVOne / 50) * 100 + '%',
              }}
            />
            <InfoLine
              infoStyle={{
                backgroundColor: Colors.backPrimary,
                width: (countVTwo / 50) * 100 + '%',
              }}
            />
          </View>

          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              50n
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countNZero / 48) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countNOne / 48) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countNTwo / 48) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              50a
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countAZero / 47) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countAOne / 47) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countATwo / 47) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              100
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countHZero / 70) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countHOne / 70) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countHTwo / 70) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              500
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countFZero / 280) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countFOne / 280) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countFTwo / 280) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              1000
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countTZero / 553) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countTOne / 553) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countTTwo / 553) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
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
                  : null
              }>
              3000
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countXZero / 1951) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countXOne / 1951) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countXTwo / 1951) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',

            width: '70%',
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          justifyContent: 'flex-start',
          backgroundColor: 'brown',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'brown',
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
