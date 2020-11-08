
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import logo from '../assets/logo.png';

const switchToAuth = () => {
  Actions.replace('SplashScreen')
};

class LoadingScene extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount() {
    const {LogoAnime} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime,{
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: true
      }).start(),

     
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
        
      });

      setTimeout(switchToAuth, 2000);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            // top: this.state.LogoAnime.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [80, 0],
            // }),
          }}>
          <Image source={logo} style={styles.image}/>

          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#5257f2"
            />
          ) : null}
        </Animated.View>
    
      </View>
    );
  }
}

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },

 
  image: {
     width:150,
     height:150,
  },
});

