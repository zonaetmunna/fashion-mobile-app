import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // For the back button

export default function ForgotVerificationCodeScreen() {
	const router = useRouter();
	const [code, setCode] = useState(['', '', '', '']);

	// Function to handle when the user inputs a code
	const handleInputChange = (text: string, index: number) => {
		let newCode = [...code];
		newCode[index] = text;
		setCode(newCode);
	};

	const handleVerifyCode = () => {
		// Add code verification logic here
		Alert.alert('Success', 'Code Verified!');
		router.push('/new-password');
	};

	return (
		<View style={styles.container}>
			{/* Header Section with Back Button and Image */}
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.backButton}>
					<Link href='/forgotPassword' style={styles.backButton}>
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

			{/* Enter Code Section */}
			<View style={styles.content}>
				<Text style={styles.title}>Enter Code</Text>
				<Text style={styles.subtitle}>
					An Authentication Code Has Sent To <Text style={styles.email}>testing@gmail.com</Text>
				</Text>

				{/* Code Input Section */}
				<View style={styles.codeInputContainer}>
					{code.map((digit, index) => (
						<TextInput
							key={index}
							style={styles.codeInput}
							value={digit}
							keyboardType='numeric'
							maxLength={1}
							onChangeText={(text) => handleInputChange(text, index)}
						/>
					))}
				</View>

				{/* Resend Code */}
				<Text style={styles.resendText}>
					If you don’t receive code! <Text style={styles.resendLink}>Resend</Text>
				</Text>

				{/* Verify Button */}
				<TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
					<Text style={styles.buttonText}>Verify And Proceed</Text>
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
		marginBottom: 20,
	},
	email: {
		color: '#007bff',
		fontWeight: 'bold',
	},
	codeInputContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 20,
	},
	codeInput: {
		width: 50,
		height: 50,
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 10,
		textAlign: 'center',
		fontSize: 18,
		color: '#333',
		marginHorizontal: 5,
	},
	resendText: {
		color: '#666',
		fontSize: 14,
		marginBottom: 20,
	},
	resendLink: {
		color: '#007bff',
		fontWeight: 'bold',
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
