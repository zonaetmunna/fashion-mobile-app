import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Perform login logic here
		Alert.alert('Success', 'Logged in successfully!');
		router.push('/(tabs)');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome Back</Text>

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

			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.signUpLink} onPress={() => Alert.alert('Sign Up')}>
				<Text style={styles.signUpText}>
					Don't have an account? <Link href='/signup'> Sign Up </Link>
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
	signUpLink: {
		marginTop: 20,
	},
	signUpText: {
		color: '#007bff',
		fontSize: 16,
		fontWeight: '500',
	},
});
