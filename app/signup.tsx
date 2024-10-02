import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	Alert,
	CheckBox,
} from 'react-native';
import { Link } from 'expo-router';

export default function SignUpScreen() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [agreeToTerms, setAgreeToTerms] = useState(false);

	const handleSignUp = () => {
		if (!agreeToTerms) {
			Alert.alert('Error', 'You must agree to the terms and conditions');
			return;
		}

		// Perform sign-up logic here
		Alert.alert('Success', 'Account created successfully!');
	};

	return (
		<View style={styles.container}>
			{/* Top Image with Curved Bottom */}
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: 'https://i.ibb.co.com/28F6tpR/image.png', // Add your image URL here
					}}
					style={styles.image}
				/>
			</View>

			{/* Rest of the content with padding */}
			<View style={styles.contentContainer}>
				<Text style={styles.title}>Create Your Account</Text>
				<Text style={styles.subtitle}>Welcome back! Please enter your details</Text>

				{/* Name Input */}
				<Text style={styles.inputLabel}>Name *</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter your name'
					placeholderTextColor='#999'
					value={name}
					onChangeText={setName}
					autoCapitalize='words'
				/>

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

				{/* Agree to Terms Checkbox */}
				<View style={styles.checkboxContainer}>
					<CheckBox value={agreeToTerms} onValueChange={setAgreeToTerms} style={styles.checkbox} />
					<Text style={styles.checkboxLabel}>I agree to all Terms, Privacy and Fees</Text>
				</View>

				{/* Sign Up Button */}
				<TouchableOpacity style={styles.button} onPress={handleSignUp}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>

				{/* Or Continue With Divider */}
				<View style={styles.dividerContainer}>
					<View style={styles.divider} />
					<Text style={styles.dividerText}>Or Continue With</Text>
					<View style={styles.divider} />
				</View>

				{/* Google Sign Up */}
				<TouchableOpacity style={styles.googleButton}>
					<Text style={styles.googleButtonText}>Sign Up With Google</Text>
				</TouchableOpacity>

				{/* Apple Sign Up */}
				<TouchableOpacity style={styles.appleButton}>
					<Text style={styles.appleButtonText}>Sign Up With Apple</Text>
				</TouchableOpacity>

				{/* Already have an account? */}
				<View style={styles.signInContainer}>
					<Text style={styles.signInText}>Already have an account?</Text>
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
	imageContainer: {
		width: '100%',
		height: 200,
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
		paddingHorizontal: 20, // Padding for all content inside the screen
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
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	checkbox: {
		marginRight: 10,
	},
	checkboxLabel: {
		fontSize: 14,
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
	signInContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	signInText: {
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
