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

  const ProfileScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <Text> Profile Screen</Text>
            <Button
                title='click me'
                onPress={()=>alert('Button click')}
            />
        </View>
    );

  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  });