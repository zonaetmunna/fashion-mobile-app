import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ForgotPasswordScreen() {
	const [email, setEmail] = useState('');

	const handleResetPassword = () => {
		// Logic for sending the reset link goes here (API call)
		if (email === '') {
			Alert.alert('Error', 'Please enter your email address');
		} else {
			Alert.alert('Success', 'Password reset link sent to your email!');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Forgot Password</Text>

			<Text style={styles.description}>
				Enter your email address below to receive a password reset link.
			</Text>

			<TextInput
				style={styles.input}
				placeholder='Email'
				placeholderTextColor='#999'
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
				autoCapitalize='none'
			/>

			<TouchableOpacity style={styles.button} onPress={handleResetPassword}>
				<Text style={styles.buttonText}>Send Reset Link</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.backToLoginLink} onPress={() => Alert.alert('Back to Login')}>
				<Text style={styles.backToLoginText}>Back to Login</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 20,
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
		backgroundColor: '#007bff',
		paddingVertical: 15,
		paddingHorizontal: 80,
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 3,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
	},
	backToLoginLink: {
		marginTop: 20,
	},
	backToLoginText: {
		color: '#007bff',
		fontSize: 16,
		fontWeight: '500',
	},
});
