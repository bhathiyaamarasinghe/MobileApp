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

  const ExploreScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <Text> Explore Screen</Text>
            <Button
                title='click me'
                onPress={()=>alert('Button click')}
            />
        </View>
    );

  };

  export default ExploreScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  });