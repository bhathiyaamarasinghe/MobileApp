import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
  } from 'react-native';

  const SettingsScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <Text> Settings Screen</Text>
            <Button
                title='click me'
                onPress={()=>alert('Button click')}
            />
        </View>
    );

  };

  export default SettingsScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  });