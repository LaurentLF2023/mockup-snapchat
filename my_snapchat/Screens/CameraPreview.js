import React, { useState, useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, Image, View} from 'react-native';
import Camera from "./Camera.js";

export default function CameraPreview({ route, navigation }) {

	const [image, setImage] = useState(null);
	const { snap } = route.params
	console.log(snap)
	return (
		<View style={{flex:1}}>
	
		<Image source={{uri : snap}} style={{flex:1}}/>
		<View style={styles.buttonContainer}>
			<TouchableOpacity
			
			onPress={() => navigation.navigate('Camera')}
			>
			<Ionicons style={styles.return} name="return-down-back" size={50} color="#ffdd00" />
			</TouchableOpacity>
			<TouchableOpacity
			
			onPress={() => navigation.navigate('Sendsnap')}
			>
			
			<FontAwesome style={styles.return} name="send-o" size={50} color="#ffdd00" />
			</TouchableOpacity>
		</View>	  
		
	
		</View>
	)
	  
}

const styles = StyleSheet.create({
	return: {
		marginLeft: 15,
		margin :15
	
	},
	send: {
		marginLeft: 15,
		margin :15
	
	},
	buttonContainer: {
		alignItems: "center",
	  	flexDirection: "row",
		justifyContent: "space-between",
	},
});