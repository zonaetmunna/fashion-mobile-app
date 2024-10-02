import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // For the back arrow
import { useRouter } from 'expo-router'; // For navigation

export default function AddDeliveryAddress() {
	const [fullName, setFullName] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [address, setAddress] = useState('');
	const [locality, setLocality] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	const router = useRouter();

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name='chevron-back-outline' size={28} color='#333' />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Add Delivery Address</Text>
			</View>

			{/* Contact Details */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Contact Details</Text>
				<TextInput
					style={styles.input}
					placeholder='Full Name'
					value={fullName}
					onChangeText={setFullName}
				/>
				<TextInput
					style={styles.input}
					placeholder='Mobile No.'
					keyboardType='phone-pad'
					value={mobileNo}
					onChangeText={setMobileNo}
				/>
			</View>

			{/* Address Details */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Address</Text>
				<TextInput
					style={styles.input}
					placeholder='Pin Code'
					keyboardType='numeric'
					value={pinCode}
					onChangeText={setPinCode}
				/>
				<TextInput
					style={styles.input}
					placeholder='Address'
					value={address}
					onChangeText={setAddress}
				/>
				<TextInput
					style={styles.input}
					placeholder='Locality/Town'
					value={locality}
					onChangeText={setLocality}
				/>
				<TextInput
					style={styles.input}
					placeholder='City/District'
					value={city}
					onChangeText={setCity}
				/>
				<TextInput style={styles.input} placeholder='State' value={state} onChangeText={setState} />
			</View>

			{/* Save Button */}
			<TouchableOpacity style={styles.saveButton}>
				<Text style={styles.saveButtonText}>Save Address</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		padding: 15,
		fontSize: 16,
		marginBottom: 15,
		backgroundColor: '#f9f9f9',
	},
	saveButton: {
		backgroundColor: '#000',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		position: 'absolute',
		bottom: 20,
		left: 20,
		right: 20,
	},
	saveButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
