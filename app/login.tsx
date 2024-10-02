import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

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
			{/* Top Image with Curved Bottom */}
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: 'https://i.ibb.co.com/28F6tpR/image.png', // Replace with your image URL
					}}
					style={styles.image}
				/>
			</View>

			{/* Content Section */}
			<View style={styles.contentContainer}>
				{/* Sign In Title */}
				<Text style={styles.title}>Sign In To Your Account</Text>
				<Text style={styles.subtitle}>Welcome Back You've Been Missed!</Text>

				{/* Email Input */}
				<Text style={styles.inputLabel}>Email Address *</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter your email'
					placeholderTextColor='#999'
					value={email}
					onChangeText={setEmail}
					keyboardType='email-address'
					autoCapitalize='none'
				/>

				{/* Password Input */}
				<Text style={styles.inputLabel}>Password *</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter your password'
					placeholderTextColor='#999'
					value={password}
					onChangeText={setPassword}
					secureTextEntry={true}
					autoCapitalize='none'
				/>

				{/* Forgot Password */}
				<TouchableOpacity style={styles.forgotPassword}>
					<Link href='/forgotPassword'>
						<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
					</Link>
				</TouchableOpacity>

				{/* Sign In Button */}
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>Sign In</Text>
				</TouchableOpacity>

				{/* Or Continue With */}
				<View style={styles.dividerContainer}>
					<View style={styles.divider} />
					<Text style={styles.dividerText}>Or Continue With</Text>
					<View style={styles.divider} />
				</View>

				{/* Google Sign In */}
				<TouchableOpacity style={styles.googleButton}>
					<Text style={styles.googleButtonText}>Sign In With Google</Text>
				</TouchableOpacity>

				{/* Apple Sign In */}
				<TouchableOpacity style={styles.appleButton}>
					<Text style={styles.appleButtonText}>Sign In With Apple</Text>
				</TouchableOpacity>

				{/* Sign Up */}
				<View style={styles.signUpContainer}>
					<Text style={styles.signUpText}>Not a member?</Text>
					<Link href='/signup' style={styles.signUpLink}>
						Create an account
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
	imageContainer: {
		width: '100%',
		height: 200, // Height for a more prominent image
		overflow: 'hidden',
		borderBottomRightRadius: 50,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 20, // Padding for the rest of the content
		marginTop: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		marginBottom: 20,
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
		marginBottom: 15,
		fontSize: 16,
		color: '#333',
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginBottom: 20,
	},
	forgotPasswordText: {
		fontSize: 14,
		color: '#007bff',
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
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	divider: {
		flex: 1,
		height: 1,
		backgroundColor: '#ddd',
	},
	dividerText: {
		marginHorizontal: 10,
		color: '#999',
		fontSize: 14,
	},
	googleButton: {
		backgroundColor: '#4285F4',
		paddingVertical: 15,
		borderRadius: 10,
		width: '100%',
		alignItems: 'center',
		marginBottom: 10,
	},
	googleButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
	appleButton: {
		backgroundColor: '#000',
		paddingVertical: 15,
		borderRadius: 10,
		width: '100%',
		alignItems: 'center',
		marginBottom: 20,
	},
	appleButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
	signUpContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	signUpText: {
		fontSize: 14,
		color: '#666',
	},
	signUpLink: {
		color: '#007bff',
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 5,
	},
});
