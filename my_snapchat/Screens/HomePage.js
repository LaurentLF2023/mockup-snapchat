import React from 'react';
import { useContext } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { registerAPI } from '../API';
import * as SecureStore from 'expo-secure-store';
import AuthContext from "../secureToken.js";
import { receiveSnapAPI } from '../API'
import CameraApp from "./Camera.js";

const HomePage = ({ navigation }) => {
	const [token, setToken] = useContext(AuthContext)
	
	return (
		<View style={styles.container}>
			<View style={styles.header}>

				<TouchableOpacity
				style={styles.logoutButton}
				onPress={async ()=> {
					setToken(null)
					await SecureStore.setItemAsync('token','')
				}}
				>
				<Text>Se deconnecter</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.body}>

				<MaterialCommunityIcons style={styles.logo} name="snapchat" size={100} color="#ffdd00" />
				<TouchableOpacity
				style={styles.cameraButton}
				onPress={() => navigation.navigate('Camera')}
				>
				<Text>Faire un Snap</Text>
				</TouchableOpacity>
				
				
				{/* <Button
				title="Go to Register"
				onPress={() => navigation.navigate('Register')}
				/>
				<Button
				title="Go to Login"
				onPress={() => navigation.navigate('Login')}
				/> */}

				{/* <TouchableOpacity
				style={styles.cameraButton}
				onPress={console.log("token : " + token)}
				title="token"
				>
				<Text>Token</Text>
				</TouchableOpacity> */}
				<TouchableOpacity style={styles.searchButton}
				onPress={() => navigation.navigate('SearchContact')}
				>
				<Text>Recherche contact</Text>
				</TouchableOpacity>
			
			</View>
		</View>  
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffdd00',
		},
	text: {
		margin: 15,
		padding: 9,
		borderWidth: 0.5,
		width: '75%'
	},
	header: {
		flex: 1,
		alignItems: 'flex-end',
		width: '100%',
	},
	logo: {
		paddingTop: 100
	},
	body: {
		flex: 6,
		backgroundColor: 'white',
		alignItems: 'center',
	
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,

		elevation: 24,

	},
	cameraButton: {
		height: 40,
		width: '75%',
		alignItems: "center",
		backgroundColor: "#ffdd00",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		padding: 10,
		marginTop: 100
		},
	searchButton: {
		height: 40,
		width: '75%',
		alignItems: "center",
		backgroundColor: "#ffdd00",
		borderBottomLeftRadius: 15,
	borderBottomRightRadius: 15,
		padding: 10,
		marginTop: 30
	},
	logoutButton: {
		height: 40,
		width: '30%',
		alignItems: "center",
		backgroundColor: "white",
		padding: 10,
		margin: 12,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,

		elevation: 18,
	}
});

export default HomePage;