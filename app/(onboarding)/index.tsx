import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router'; // To navigate between screens

export default function OnboardingFirstScreen() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			{/* Logo or Image */}
			{/* <Image
				source={require('../assets/onboarding1.png')} // Example image
				style={styles.image}
				resizeMode='contain'
			/> */}

			{/* Welcome Title */}
			<Text style={styles.title}>Welcome to MyApp!</Text>

			{/* Description */}
			<Text style={styles.description}>
				Discover the best features of our app, track your progress, and achieve your goals!
			</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={() => router.push('/(onboarding)/step2')} // Relative path without leading '/'
			>
				<Text style={styles.buttonText}>Get Started</Text>
			</TouchableOpacity>
		</View>
	);
}

// Modern styles for the onboarding screen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
		marginBottom: 40,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#333',
		textAlign: 'center',
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 40,
	},
	button: {
		backgroundColor: '#007bff',
		paddingVertical: 15,
		paddingHorizontal: 60,
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
});
