import React from "react";
import { useState, useContext, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput, Switch, TouchableOpacity, Text, Button} from "react-native";
import { loginAPI } from "../API.js";
import AuthContext from "../secureToken.js";
import * as SecureStore from 'expo-secure-store';
import HomePage from "./HomePage.js";

const Login = ({ navigation }) => {
  const [userMail, setEmail] = React.useState("");
  const [userPassword, setPassword] = React.useState("");
  const [token, setToken] = useContext(AuthContext);
  const [remember, setRemember] = useState(false);
  const toggleSwitch = () => setRemember(previousState => !previousState);
  
  return (
    useEffect(() => {
      token, console.log({token})
    }, [setToken]),

    <View style={styles.container}>
      <MaterialCommunityIcons name="snapchat" size={100} color="#ffdd00" />
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.emailInput}
        onChangeText={setEmail}
        value={userMail}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={userPassword}
        placeholder="Mot de passe"
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity
      style={styles.loginButton}
      onPress={() => { 
        loginAPI(userMail, userPassword)
        .then(async (res) => {
          setToken(res.data.token)
          if(remember){
            await SecureStore.setItemAsync('token',res.data.token)
          } 
          navigation.navigate('HomePage')
        })
        }}
      >
      <Text>Se connecter</Text>
      </TouchableOpacity>
      <Text>Se souvenir de moi?</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={remember ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={remember}
        />
        </View>
  );
};

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
	},
	input: {
	height: 40,
	width: '75%',
	margin: 12,
	borderWidth: 0.5,
	padding: 10,
	},
	emailInput: {
	height: 40,
	width: '75%',
	margin: 12,
	borderWidth: 0.5,
	padding: 10,
	borderTopLeftRadius: 15,
	borderTopRightRadius: 15,
	},
	loginButton: {
	height: 40,
	width: '75%',
	alignItems: "center",
	backgroundColor: "#ffdd00",
	borderBottomLeftRadius: 15,
	borderBottomRightRadius: 15,
	padding: 10,
	margin: 12
	},
	text: {
	margin: 0,
	padding: 9,
	}
});

export default Login;