import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignUpScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSignUp = () => {
		if (password !== confirmPassword) {
			Alert.alert('Error', 'Passwords do not match');
		} else {
			// Perform sign-up logic here
			Alert.alert('Success', 'Account created successfully!');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create an Account</Text>

			<TextInput
				style={styles.input}
				placeholder='Email'
				placeholderTextColor='#999'
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
				autoCapitalize='none'
			/>

			<TextInput
				style={styles.input}
				placeholder='Password'
				placeholderTextColor='#999'
				value={password}
				onChangeText={setPassword}
				secureTextEntry={true}
				autoCapitalize='none'
			/>

			<TextInput
				style={styles.input}
				placeholder='Confirm Password'
				placeholderTextColor='#999'
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry={true}
				autoCapitalize='none'
			/>

			<TouchableOpacity style={styles.button} onPress={handleSignUp}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.signInLink} onPress={() => Alert.alert('Sign In')}>
				<Text style={styles.signInText}>
					Already have an account? <Link href='/login'> Sign In</Link>{' '}
				</Text>
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
		marginBottom: 30,
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
	signInLink: {
		marginTop: 20,
	},
	signInText: {
		color: '#007bff',
		fontSize: 16,
		fontWeight: '500',
	},
});
