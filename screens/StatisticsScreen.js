import React, { useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from './../components/UI/Input';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector } from 'react-redux';
import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';

const StatisticsScreen = () => {
  const [iconSize] = useState(20);
  const [textSize] = useState(Dimensions.get('window').width / 25);
  const [buttonSize] = useState(Dimensions.get('window').width / 5);
  const [buttonBodyColor] = useState(Colors.surround);
  const [buttonTextColor] = useState(Colors.textPrimary);

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

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtscnd = Languages[lngscnd].Statistics;
  const txtfrst = Languages[lngfrst].Statistics;

  const data = useSelector((state) => state.words.words);

  const word = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = word[0][lngscnd];

  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];

  useEffect(() => {
    counter();
  });

  const counter = () => {
    const countZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 ? (counter += 1) : counter,
      0
    );

    setSelectZero(countZero);

    const countOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 ? (counter += 1) : counter,
      0
    );
    setSelectOne(countOne);

    const countTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 ? (counter += 1) : counter,
      0
    );
    setSelectTwo(countTwo);

    const countVZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVZero(countVZero);

    const countVOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVOne(countVOne);

    const countVTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVTwo(countVTwo);

    const countNZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNZero(countNZero);

    const countNOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNOne(countNOne);

    const countNTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNTwo(countNTwo);

    const countAZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountAZero(countAZero);

    const countAOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountAOne(countAOne);

    const countATwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountATwo(countATwo);

    const countHZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHZero(countHZero);

    const countHOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHOne(countHOne);

    const countHTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHTwo(countHTwo);

    const countFZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFZero(countFZero);

    const countFOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFOne(countFOne);

    const countFTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFTwo(countFTwo);

    const countTZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTZero(countTZero);

    const countTOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTOne(countTOne);

    const countTTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTTwo(countTTwo);

    const countXZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXZero(countXZero);

    const countXOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXOne(countXOne);

    const countXTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXTwo(countXTwo);
  };

  return (
    <ScreenFrame>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
          }}>
          <Ionicons
            name='ios-globe'
            size={iconSize}
            color={Colors.textPrimary}
          />
          <ComboAround>
            <TxtNormal>{actLngScnd}</TxtNormal>
            <TxtNormal>({actLngScndEng})</TxtNormal>
          </ComboAround>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            all
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{selectZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{selectOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{selectTwo}</TxtNormal>
          </ComboAround>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            50 verbs
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countVZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countVOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countVTwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            50 nouns
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countNZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countNOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countNTwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            50 adjc
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countAZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countAOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countATwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            100
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countHZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countHOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countHTwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            500
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countFZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countFOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countFTwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            1000
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countTZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countTOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countTTwo}</TxtNormal>
          </ComboAround>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 3,
            borderBottomColor: Colors.inactive,
            borderTopColor: Colors.inactive,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Buttons.ButtonBox
            bodyStyle={{
              width: buttonSize,
              borderColor: buttonBodyColor,
              borderWidth: 1,
            }}
            insideStyle={{ color: buttonTextColor }}>
            3000
          </Buttons.ButtonBox>
          <ComboAround>
            <Ionicons
              name='ios-infinite'
              size={iconSize}
              color={Colors.accent}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countXZero}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='ios-attach'
              size={iconSize}
              color={Colors.backSecond}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countXOne}</TxtNormal>
          </ComboAround>
          <ComboAround>
            <Ionicons
              name='md-checkmark'
              size={iconSize}
              color={Colors.backPrimary}
            />
            <TxtNormal style={{ fontSize: textSize }}>{countXTwo}</TxtNormal>
          </ComboAround>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <Ionicons name='md-time' size={iconSize} color={Colors.surround} />
        <TxtButton>
          {'   '}
          {new Date().toDateString().slice(4)}
        </TxtButton>
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
