import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import the hook to navigate
import { DrawerActions } from '@react-navigation/native';
import { Link } from 'expo-router';

const Header: React.FC = () => {
	const navigation = useNavigation(); // Access navigation instance

	// Function to open the drawer
	const openDrawer = () => {
		navigation.dispatch(DrawerActions.openDrawer());
	};

	return (
		<View style={styles.header}>
			{/* Drawer Icon */}
			<TouchableOpacity onPress={openDrawer} style={styles.drawerIcon}>
				<Ionicons name='menu-outline' size={28} color='#333' />
			</TouchableOpacity>

			{/* Title */}
			<Text style={styles.headerTitle}>Fashion Store</Text>

			{/* Notification Icon */}
			<TouchableOpacity style={styles.notificationIcon}>
				<Link href='/notification' style={styles.notificationIcon}>
					<Ionicons name='notifications-outline' size={28} color='#333' />
				</Link>
			</TouchableOpacity>

			{/* Profile Icon */}
			<TouchableOpacity style={styles.profileIcon}>
				<Link href='/profile' style={styles.profileIcon}>
					<Ionicons name='person-outline' size={28} color='#333' />
				</Link>
			</TouchableOpacity>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#fff',
	},
	drawerIcon: {
		marginLeft: 10,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		flex: 1,
		textAlign: 'center',
	},
	notificationIcon: {
		marginRight: 15, // Space between notification and profile icons
	},
	profileIcon: {
		marginRight: 10,
	},
});
