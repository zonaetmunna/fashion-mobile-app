import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // To navigate between screens

export default function OnboardingSecScreen() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			{/* Image or Illustration */}
			{/* <Image
				source={require('../assets/onboarding2.png')} // Example image
				style={styles.image}
				resizeMode='contain'
			/> */}

			{/* Title */}
			<Text style={styles.title}>Track Your Progress</Text>

			{/* Description */}
			<Text style={styles.description}>
				Stay on top of your goals and monitor your achievements with our tracking tools.
			</Text>

			{/* Button to move to the next screen */}
			<TouchableOpacity
				style={styles.button}
				onPress={() => router.push('/(onboarding)/step3')} // Navigate to the third step
			>
				<Text style={styles.buttonText}>Next</Text>
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
