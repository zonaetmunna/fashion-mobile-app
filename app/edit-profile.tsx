import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation
import { router } from 'expo-router';
import { Container } from '@/components/container';

export default function EditProfileScreen() {
	// State for profile information
	const [name, setName] = useState('Roopa');
	const [email, setEmail] = useState('roopa@example.com');
	const [phone, setPhone] = useState('123-456-7890');

	const navigation = useNavigation(); // Use navigation hook

	return (
		<Container>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name='chevron-back-outline' size={28} color='#333' />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Edit Profile</Text>
				</View>

				{/* Profile Section */}
				<View style={styles.profileSection}>
					<Image style={styles.avatar} source={{ uri: 'https://example.com/avatar.jpg' }} />
					<TouchableOpacity style={styles.editPhotoButton}>
						<Ionicons name='camera-outline' size={18} color='#fff' />
						<Text style={styles.editPhotoText}>Change Photo</Text>
					</TouchableOpacity>
				</View>

				{/* Form Section */}
				<View style={styles.formSection}>
					<Text style={styles.label}>Name</Text>
					<TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />

					<Text style={styles.label}>Email</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(text) => setEmail(text)}
						keyboardType='email-address'
					/>

					<Text style={styles.label}>Phone</Text>
					<TextInput
						style={styles.input}
						value={phone}
						onChangeText={(text) => setPhone(text)}
						keyboardType='phone-pad'
					/>
				</View>

				{/* Button Section */}
				<View style={styles.buttonSection}>
					<TouchableOpacity style={styles.saveButton}>
						<Text style={styles.saveButtonText}>Save Changes</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.cancelButton}>
						<Text style={styles.cancelButtonText}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 20,
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
		marginLeft: 10, // Add some space between the icon and title
	},

	profileSection: {
		alignItems: 'center',
		marginBottom: 30,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 10,
	},
	editPhotoButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#007bff',
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: 20,
	},
	editPhotoText: {
		color: '#fff',
		fontSize: 14,
		marginLeft: 5,
	},
	formSection: {
		marginBottom: 40,
	},
	label: {
		fontSize: 14,
		color: '#333',
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		fontSize: 16,
		marginBottom: 20,
	},
	buttonSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	saveButton: {
		backgroundColor: '#28a745',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 10,
		flex: 1,
		marginRight: 10,
		alignItems: 'center',
	},
	saveButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	cancelButton: {
		backgroundColor: '#dc3545',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 10,
		flex: 1,
		alignItems: 'center',
	},
	cancelButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
