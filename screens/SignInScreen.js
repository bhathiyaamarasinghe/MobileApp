import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
// var jwtDecode = require("jwt-decode");
export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  // componentDidMount() {
  //   this._loadInitialState().done();
  // }
  // _loadInitialState = async () => {
  //   var value = await AsyncStorage.getItem("ProfileScreen");
  //   if (value !== null) {
  //     this.props.navigation.navigate("HomeScreen");
  //   }
  // };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}> Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            underlineColorAndriod="transparent"
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            underlineColorAndriod="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text style={styles.bt}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
    const { navigate } = this.props.navigation;
    fetch("http://192.168.8.147:8000/user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(function(response) {
        if (response.status === 201) {
          var token = response.headers.get("Authorization");
          // var decoded = jwtDecode(token);
          // AsyncStorage.setItem("MyStoreUser", decoded.sub);
          navigate("SignUpScreen");
        }
         else {
          alert("Wrong email or password");
          return;
        }
      })
      .catch(function(err) {
        console.log("Fetch Error", err);
      });
  };
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#FFC300",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC300",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 35,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "black",
    padding: 20,
    alignItems: "center"
  },
  bt: {
    color: "#fff",
    fontSize: 20,
    
  }
});