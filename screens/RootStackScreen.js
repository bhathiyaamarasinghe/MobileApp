import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
// import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';
import ShopRegistrationScreen from './ShopRegistrationScreen';
import DeliveryPersonregistrationScreen from './DeliveryPersonregistrationScreen';
import LoadingScreen from './LoadingScreen';
import AboutScreen from './AboutScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import MainTabScreen from './MainTabScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';


// const RootStack = createStackNavigator();

// const RootStackScreen = ({navigation}) => (
//     <RootStack.Navigator headerMode='none'>
//         <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
//         <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
//         <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
//         <RootStack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen}/>
//         <RootStack.Screen name="ShopRegistrationScreen" component={ShopRegistrationScreen}/>
//         <RootStack.Screen name="DeliveryPersonregistrationScreen" component={DeliveryPersonregistrationScreen}/>
//         <RootStack.Screen name="LoadingScreen" component={LoadingScreen}/>
//     </RootStack.Navigator>
// );

class RootStackScreen extends Component {
    render() {
      return (
        <Router>
          <Scene key="root">
            <Scene key="SplashScreen" component={SplashScreen}  hideNavBar={true}></Scene>
            <Scene key="SignInScreen" component={SignInScreen} hideNavBar={true}></Scene>
            <Scene key="SignUpScreen" component={SignUpScreen} hideNavBar={true}></Scene>
            <Scene key="CustomerRegistrationScreen" component={CustomerRegistrationScreen} hideNavBar={true}></Scene>
            <Scene key="ShopRegistrationScreen" component={ShopRegistrationScreen} hideNavBar={true}></Scene>
            <Scene key="DeliveryPersonregistrationScreen" component={DeliveryPersonregistrationScreen} hideNavBar={true}></Scene>
            <Scene key="LoadingScreen" component={LoadingScreen} initial={true} hideNavBar={true}></Scene>
            <Scene key="AboutScreen" component={AboutScreen}  hideNavBar={true}></Scene>
            <Scene key="DetailsScreen" component={DetailsScreen}  hideNavBar={true}></Scene>
            <Scene key="ExploreScreen" component={ExploreScreen}  hideNavBar={true}></Scene>
            <Scene key="HomeScreen" component={HomeScreen}  hideNavBar={true}></Scene>
            <Scene key="MainTabScreen" component={ MainTabScreen}  hideNavBar={true}></Scene>
            <Scene key="ProfileScreen" component={ ProfileScreen}  hideNavBar={true}></Scene>
            <Scene key="SettingsScreen" component={SettingsScreen}  hideNavBar={true}></Scene>
          </Scene>
        </Router>
      );
    }
  }

export default RootStackScreen;