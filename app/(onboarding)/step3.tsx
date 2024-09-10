import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // To navigate between screens
import AsyncStorage from '@react-native-async-storage/async-storage'; // To store onboarding status

export default function OnboardingThirdScreen() {
	const router = useRouter();

	const completeOnboarding = async () => {
		// Mark onboarding as complete in AsyncStorage
		await AsyncStorage.setItem('onboardingComplete', 'true');
		// Redirect to main app (tabs)
		router.push('/login');
	};

	return (
		<View style={styles.container}>
			{/* Final Image or Illustration */}
			{/* <Image
				source={require('../assets/onboarding3.png')} // Example image
				style={styles.image}
				resizeMode='contain'
			/> */}

			{/* Final Message */}
			<Text style={styles.title}>You're All Set!</Text>

			{/* Final Description */}
			<Text style={styles.description}>
				Thank you for joining! You’re now ready to explore the best features of our app.
			</Text>

			{/* Button to complete onboarding and go to main app */}
			<TouchableOpacity
				style={styles.button}
				onPress={completeOnboarding} // Marks onboarding complete and navigates to main app
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
