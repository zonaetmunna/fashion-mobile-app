import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // Importing the Ionicons for the back button

export default function ForgotPasswordScreen() {
	const [email, setEmail] = useState('');
	const router = useRouter();

	const handleSendMail = () => {
		// Add logic to send reset password email
		Alert.alert('Success', 'Password reset email sent!');
		router.push('/forgot-verification-code');
	};

	return (
		<View style={styles.container}>
			{/* Header Section with Image and Back Button */}
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

			{/* Forgot Password Title */}
			<View style={styles.content}>
				<Text style={styles.title}>Forgot Password</Text>
				<Text style={styles.subtitle}>
					Enter the email associated with your account and we’ll send an email to reset your
					password.
				</Text>

				{/* Email Address Input */}
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

				{/* Send Mail Button */}
				<TouchableOpacity style={styles.button} onPress={handleSendMail}>
					<Text style={styles.buttonText}>Send Mail</Text>
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
