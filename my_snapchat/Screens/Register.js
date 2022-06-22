import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity  } from 'react-native';
import { registerAPI } from '../API';

const Register = ({ navigation }) => {
	const [setEmail, onChangeText] = React.useState('');
	const [setPassword, onChangePassword] = React.useState('');

	return (

	<View style={styles.container}>
		<MaterialCommunityIcons name="snapchat" size={100} color="#ffdd00" />
		<Text style={styles.text}>My Snapchat</Text>
		<TextInput
			style={styles.emailInput}
			onChangeText={onChangeText}
			placeholder="Email" 
			value={setEmail}
			keyboardType= "email-address"
			textContentType="emailAddress" />
		<TextInput
			style={styles.input}
			onChangeText={onChangePassword}
			value={setPassword}
			placeholder="Mot de passe"
			textContentType="password"
			secureTextEntry
		/>
		<TouchableOpacity
			style={styles.registerButton}
			onPress={() => { registerAPI(setEmail, setPassword).then(()=>navigation.navigate('Login')) }}
			>
			<Text>S'inscrire</Text>
		</TouchableOpacity>
		<TouchableOpacity
			style={styles.loginButton}
			onPress={() => navigation.navigate('Login')}
			>
			<Text>Déjà inscrit ?</Text>
		</TouchableOpacity>
	
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
	registerButton: {
	height: 40,
	width: '75%',
	alignItems: "center",
	backgroundColor: "#ffdd00",
	padding: 10,
	margin: 12
	},
	text: {
	margin: 0,
	padding: 9,
	// fontFamily: 'dimis'
	}
});

export default Register;