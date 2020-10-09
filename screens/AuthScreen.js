import React, { useCallback } from 'react';

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

const AuthScreen = () => {
  const inputChangeHandler = useCallback(() => {
    console.log('welcome');
  }, []);

  return (
    <ScreenFrame>
      <TxtHeader>HEADER</TxtHeader>
      <TxtLabel>LABEL</TxtLabel>
      <TxtBold>BOLD</TxtBold>
      <TxtNormal>NORMAL</TxtNormal>
      <TxtItalic>ITALIC</TxtItalic>
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
    </ScreenFrame>
  );
};

export default AuthScreen;
