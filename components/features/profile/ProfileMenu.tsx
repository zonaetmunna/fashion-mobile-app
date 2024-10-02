// src/components/ProfileMenu.tsx
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileMenu: React.FC = () => {
	return (
		<View style={styles.menu}>
			<TouchableOpacity style={styles.menuItem} onPress={() => router.push('/my-orders')}>
				<Text style={styles.menuItemText}>Your Order</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.menuItem} onPress={() => router.push('/wishlist')}>
				<Text style={styles.menuItemText}>Wishlist</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.menuItem}>
				<Text style={styles.menuItemText}>Coupons</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.menuItem}>
				<Text style={styles.menuItemText}>Track Order</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProfileMenu;

const styles = StyleSheet.create({
	menu: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	menuItem: {
		alignItems: 'center',
		padding: 10,
		flexBasis: '48%',
		backgroundColor: '#f0f0f0',
		marginBottom: 10,
	},
	menuItemText: {
		fontSize: 16,
		color: 'black',
	},
});
