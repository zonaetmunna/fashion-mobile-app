import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';

interface ContainerProps {
	children: React.ReactNode;
	style?: ViewStyle; // Optional style prop to customize
}

export const Container = ({ children, style }: ContainerProps) => {
	return (
		<SafeAreaView style={[{ flex: 1, backgroundColor: 'transparent' }, style]}>
			<StatusBar style='dark' translucent backgroundColor='transparent' />
			{children}
		</SafeAreaView>
	);
};
