import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      //style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FFC300',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#F411BC',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#11F4F0',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#D011F4',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-apertore" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#FFC300',
      },
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft:()=>(
          <Icon.Button name='ios-menu'
            size={25} 
            backgroundColor='#FFC300' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
      
    </HomeStack.Navigator>
  );
  const DetailsStackScreen = ({navigation}) => (
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#F411BC',
      },
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} 
      options={{
        headerLeft:()=>(
          <Icon.Button name='ios-menu'
            size={25} 
            backgroundColor='#F411BC' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
      
    </DetailsStack.Navigator>
  );
  