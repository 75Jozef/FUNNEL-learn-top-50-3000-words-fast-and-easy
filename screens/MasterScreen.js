import React, { useState, useEffect } from 'react';
import { View, Pressable, FlatList, Button } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from '../components/UI/Input';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector } from 'react-redux';

const MasterScreen = () => {
  const [levelA, setLevelA] = useState(false);
  const [levelN, setLevelN] = useState(false);
  const [levelV, setLevelV] = useState(false);
  const [levelH, setLevelH] = useState(false);
  const [levelF, setLevelF] = useState(false);
  const [levelT, setLevelT] = useState(false);
  const [levelX, setLevelX] = useState(false);
  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(0);

  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];

  const data = useSelector((state) => state.words.words);
  const words = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA) ||
      (word.userlvl === 'n' && levelN) ||
      (word.userlvl === 'v' && levelV) ||
      (word.userlvl === 'h' && levelH) ||
      (word.userlvl === 'f' && levelF) ||
      (word.userlvl === 't' && levelT) ||
      (word.userlvl === 'x' && levelX)
  );

  useEffect(() => {
    setRange(words.length);
  }, [words, range]);

  const handleIndex = (jump) => {
    if (range > 0) {
      if (jump === 9999) {
        setIndex(range);
        return;
      }
      if (index + jump > range) {
        setIndex(range);
        return;
      }

      if (index - jump < 0) {
        setIndex(0);
        return;
      }

      setIndex(index + jump);
    }
  };

  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>MASTER SCREEN</TxtLabel>
      </CardFrame>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title='verbs'
          onPress={() => {
            setLevelV((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelV ? 'green' : 'blue'}
        />
        <Button
          title='nouns'
          onPress={() => {
            setLevelN((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelN ? 'green' : 'blue'}
        />
        <Button
          title='adjct'
          onPress={() => {
            setLevelA((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelA ? 'green' : 'blue'}
        />
        <Button
          title='100'
          onPress={() => {
            setLevelH((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelH ? 'green' : 'blue'}
        />
        <Button
          title='500'
          onPress={() => {
            setLevelF((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelF ? 'green' : 'blue'}
        />
        <Button
          title='1000'
          onPress={() => {
            setLevelT((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelT ? 'green' : 'blue'}
        />
        <Button
          title='3000'
          onPress={() => {
            setLevelX((prev) => !prev);
            setRange(0);
            setIndex(0);
          }}
          color={levelX ? 'green' : 'blue'}
        />
      </View>
      <View
        style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtNormal>
          {range > 0 ? data[index].en : <TxtItalic>select range...</TxtItalic>}
        </TxtNormal>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title='|<'
          onPress={() => {
            handleIndex(0);
          }}
          color={Colors.surround}
        />

        <Button
          title='<---'
          onPress={() => {
            handleIndex(-3);
          }}
          color={Colors.surround}
        />
        <Button
          title='<-'
          onPress={() => {
            handleIndex(-1);
          }}
          color={Colors.surround}
        />
        <Button
          title='| |'
          onPress={() => {
            setIndex(Math.floor(range / 2));
          }}
          color={Colors.surround}
        />
        <Button
          title='->'
          onPress={() => {
            handleIndex(1);
          }}
          color={Colors.surround}
        />
        <Button
          title='--->'
          onPress={() => {
            handleIndex(3);
          }}
          color={Colors.surround}
        />
        <Button
          title='>|'
          onPress={() => {
            handleIndex(9999);
          }}
          color={Colors.surround}
        />
      </View>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtItalic>
          index: {index} range: {range}
        </TxtItalic>
        <TxtNormal>
          {range >= 0 ? (
            data[index].sk
          ) : (
            <TxtItalic>vyberte rozsah...</TxtItalic>
          )}
        </TxtNormal>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lng = useSelector((state) => state.language.language);
  const texts = Languages[lng];
  return {
    headerTitle: 'Master Screen Header',
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

export default MasterScreen;
