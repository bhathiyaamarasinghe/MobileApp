import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    PanResponder
} from 'react-native';
import MapView from 'react-native-maps'; 
import {Marker} from 'react-native-maps'; 


// import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
             <MapView
    
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
          <Marker
            coordinate={{
                latitude: 37.78825,
                longitude:-122.4324,
            }}
    
                    image={require('../assets/mark.png')}
                    title="KFC"
                    >
                       
                        </Marker>
     </MapView>       

            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connect with us!</Text>
                <Text style={styles.text}>Please sign in with account</Text>
                    <View style={styles.button1}>
                        <TouchableOpacity
                                onPress={() => navigation.navigate('SignInScreen')}
                                style={[styles.signIn, {
                                borderColor: '#FFC300',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor:'#FFC300'
                                    }]}
                            >
                            <Text style={[styles.textSign, {
                                color: 'black'
                            }]}>Sign In</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.button2}>
                        <TouchableOpacity
                                onPress={() => navigation.navigate('SignUpScreen')}
                                style={[styles.signIn, {
                                borderColor: '#FFC300',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor:'#FFC300'
                                    }]}
                            >
                            <Text style={[styles.textSign, {
                                color: 'black'
                            }]}>Sign Up </Text>
                        </TouchableOpacity> 
                    </View>
            </View>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       height: 400,
//       width: 400,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });

export default SplashScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // backgroundColor: '#F3EC0'
  },
  header: {
   
    height: 400,
        width: 450,
         justifyContent: 'flex-end',
          alignItems: 'center',
  },

  map: {
         ...StyleSheet.absoluteFillObject,
        },
  
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 30,
      paddingHorizontal: 30,
      height: 500
  },
  logo: {
      width: 500,
      height: 500
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button1: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  button2: {
    alignItems: 'flex-end',
    marginTop: 10
},
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold'
  }
});

