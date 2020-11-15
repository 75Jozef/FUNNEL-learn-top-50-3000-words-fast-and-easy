import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from './../components/UI/Input';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import * as Languages from '../data/languages';
import { useSelector } from 'react-redux';

const AuthScreen = () => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtscnd = Languages[lngscnd].Auth;
  const txtfrst = Languages[lngfrst].Auth;

  const inputChangeHandler = useCallback(() => {}, []);

  const [thm, setThm] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setThm(actTheme));

  return (
    <ScreenFrame>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View>
      <CardFrame style={{ margin: 15 }}>
        <Input
          id='email'
          label='e-mail'
          keyboartType='default'
          required
          email
          autoCapitalize='none'
          errorText='Enter a valid address.'
          onInputChange={inputChangeHandler}
          initialValue=''
        />
        <Input
          id='password'
          label='password'
          keyboartType='default'
          secureTextEntry
          required
          minLength={5}
          autoCapitalize='none'
          errorText='Enter a valid password of 5+ letters.'
          onInputChange={inputChangeHandler}
          initialValue=''
        />
      </CardFrame>
    </ScreenFrame>
  );
};

export default AuthScreen;
