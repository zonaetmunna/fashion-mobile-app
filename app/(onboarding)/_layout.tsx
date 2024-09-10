import { Stack } from 'expo-router';

export default function OnboardingLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false, // Hides header for onboarding screens
			}}>
			<Stack.Screen
				name='index'
				options={{
					title: 'Welcome',
				}}
			/>
			<Stack.Screen
				name='step2'
				options={{
					title: 'Step 2',
				}}
			/>
			<Stack.Screen
				name='step3'
				options={{
					title: 'Step 3',
				}}
			/>
		</Stack>
	);
}
