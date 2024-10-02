import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // For the back button

export default function NewPasswordScreen() {
	const router = useRouter();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleContinue = () => {
		if (password !== confirmPassword) {
			Alert.alert('Error', 'Passwords do not match');
		} else {
			Alert.alert('Success', 'Password has been changed successfully!');
			// Navigate or perform other actions
			router.push('/login');
		}
	};

	return (
		<View style={styles.container}>
			{/* Header Section with Back Button and Image */}
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.backButton}>
					<Link href='/login' style={styles.backButton}>
						<Ionicons name='chevron-back' size={28} color='#333' />
					</Link>
				</TouchableOpacity>
				<Image
					source={{
						uri: 'https://i.ibb.co.com/28F6tpR/image.png', // Replace with your image URL
					}}
					style={styles.image}
				/>
			</View>

			{/* Enter New Password Section */}
			<View style={styles.content}>
				<Text style={styles.title}>Enter New Password</Text>
				<Text style={styles.subtitle}>
					Your new password must be different from previously used password.
				</Text>

				{/* Password Input */}
				<Text style={styles.inputLabel}>Password *</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter new password'
					placeholderTextColor='#999'
					value={password}
					onChangeText={setPassword}
					secureTextEntry={true}
					autoCapitalize='none'
				/>

				{/* Confirm Password Input */}
				<Text style={styles.inputLabel}>Confirm Password *</Text>
				<TextInput
					style={styles.input}
					placeholder='Confirm new password'
					placeholderTextColor='#999'
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					secureTextEntry={true}
					autoCapitalize='none'
				/>

				{/* Continue Button */}
				<TouchableOpacity style={styles.button} onPress={handleContinue}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>

				{/* Back to Sign In */}
				<View style={styles.backToSignIn}>
					<Text style={styles.backText}>Back To</Text>
					<Link href='/login' style={styles.signInLink}>
						Sign In
					</Link>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	headerContainer: {
		position: 'relative',
		width: '100%',
		height: 200,
		borderBottomRightRadius: 50,
		overflow: 'hidden',
		backgroundColor: '#f3f3f3',
	},
	backButton: {
		position: 'absolute',
		top: 40,
		left: 20,
		zIndex: 10,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
		marginBottom: 30,
	},
	inputLabel: {
		width: '100%',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 5,
	},
	input: {
		width: '100%',
		height: 50,
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		fontSize: 16,
		color: '#333',
	},
	button: {
		backgroundColor: '#000',
		paddingVertical: 15,
		borderRadius: 10,
		width: '100%',
		alignItems: 'center',
		marginBottom: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	backToSignIn: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	backText: {
		fontSize: 14,
		color: '#666',
	},
	signInLink: {
		color: '#007bff',
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 5,
	},
});
