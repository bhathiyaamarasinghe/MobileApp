import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    StatusBar,
  } from 'react-native';

  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

  import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function DrawerContent(props){

  const [isDarkTheme,setIsDarkTheme] = React.useState(false);
  
  const toggleTheme = () =>{
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection:'row',marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri:'https://www.google.com/search?q=girls+vector+img&tbm=isch&chips=q:female+vector+image,g_1:business:wYfAa112r2U%3D&bih=526&biw=1093&hl=en&sa=X&ved=2ahUKEwjd4L-UkMDsAhXUSSsKHVxGC78Q4lYoAHoECAEQFA#imgrc=OEuwiNxhDhJbsM'
                    //require:'../assets/Useme.jpeg'
                  }}
                  size={75}
                />
                <View style={{marginLeft:10, flexDirection:'column'}}>
                  <Title style={styles.title}>Dinusha Thrilakshika</Title>
                  <Caption style={styles.caption}>
                    @dthrilakshi
                  </Caption>
                </View>
              </View>
              <View style={styles.row}>
                  <View style={styles.section}>
                    <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                    <Caption style={styles.caption}>Following</Caption>
                  </View>
                  <View style={styles.section}>
                    <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
                    <Caption style={styles.caption}>Followers</Caption>
                  </View>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color,size})=> (
                <Icon
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Home '
              onPress={()=>{props.navigation.navigate('Home')}}
            /> 
             <DrawerItem
              icon={({color,size})=> (
                <Icon
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Profile '
              onPress={()=>{props.navigation.navigate('Profile')}}
            /> 
            <DrawerItem
              icon={({color,size})=> (
                <Icon
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Settings '
              onPress={()=>{props.navigation.navigate('SettingsScreen')}}
            /> 
            <DrawerItem
              icon={({color,size})=> (
                <Icon
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='About us '
              onPress={()=>{props.navigation.navigate('AboutScreen')}}
            />   
            </Drawer.Section>
            <Drawer.Section title='Performanses'>
              <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                          <Text>Dark Theme</Text>
                              <View pointerEvents="none">
                                  <Switch value={isDarkTheme}/>
                              </View>
                    </View>
             </TouchableRipple>
            </Drawer.Section>
          </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
              icon={({color,size})=> (
                <Icon
                  name='exit-to-app'
                  color={color}
                  size={size}
                />
              )}
              label='Sign Out'
              onPress={()=>{}}
          />  
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
