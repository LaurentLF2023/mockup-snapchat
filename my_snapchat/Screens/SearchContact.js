import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AuthContext from "../secureToken.js";
import { receiveSnapAPI } from '../API'

const SearchContact = ({ navigation }) => {
	const [token, setToken] = useContext(AuthContext)
	const [contact, setContact] = useState(null)
	// const [displayedContact, setdisplayedContact] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		receiveSnapAPI(token).then(result => {
			setUsers(result)
			console.log("Users:", result)

		})
	}, [])

	let B = [<Text>BANANA</Text>, <Text>LAMA</Text>, <Text>Woof</Text>]

	return (
		<View style={styles.container}>
			<Text style={styles.text}>A qui?</Text>
			{
				contact?.map((user, i) => <Text key={i}>{user.email}</Text>)
			}
			<TextInput
				style={styles.text}
				onChangeText={(text) => list(text)}
				placeholder="Chercher des contacts"
				value={contact}
				keyboardType="email-address"
				textContentType="emailAddress"
			/>
			{B}
		</View>
	)

	function list(text) {
		let regex = new RegExp(`.*${text}.*`, 'i')
		setContact(users.filter((user) => user?.email.match(regex))
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		margin: 0,
		padding: 9,
	}
});

export default SearchContact;
