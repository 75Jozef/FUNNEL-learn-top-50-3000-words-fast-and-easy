import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
   
  } from 'react-native-safe-area-context';


const ScreenFrame = props => {
    
    <SafeAreaView style={styles.screen}>
        <StatusBar style='auto' />
        <View>{props.children}</View>
    </SafeAreaView>

}


const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    text: {
        color: '#fff'
    }
})

export default ScreenFrame;
