import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	const router = useRouter();

	const [onboardingComplete, setOnboardingComplete] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(true); // Check if user is signed in

	useEffect(() => {
		const checkAppStatus = async () => {
			// Check if onboarding is completed
			const isOnboardingCompleted = await AsyncStorage.getItem('onboardingComplete');

			// Check if user is authenticated (you can set this during login)
			const isLoggedIn = await AsyncStorage.getItem('isAuthenticated');

			if (!isOnboardingCompleted) {
				router.push('/(onboarding)'); // Redirect to onboarding if not completed
			} else if (!isLoggedIn) {
				router.push('/login'); // Redirect to login if not authenticated
			} else {
				router.push('/(tabs)'); // Redirect to home if signed in
				setIsAuthenticated(true); // Set state if user is authenticated
			}
		};

		checkAppStatus();
	}, []);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
				<Stack.Screen name='login' options={{ headerShown: false }} />
				<Stack.Screen name='signup' options={{ headerShown: false }} />
				<Stack.Screen name='forgot-password' options={{ headerShown: false }} />
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='+not-found' />
			</Stack>
		</ThemeProvider>
	);
}
