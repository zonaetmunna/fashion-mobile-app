import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

const CustomDrawerContent = (props: any) => {
	const pathname = usePathname();

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<DrawerContentScrollView {...props}>
			{/* User Profile Section */}
			<View style={styles.userInfoWrapper}>
				{/* <Image
					source={require('../../assets/images/')} // Use your local image path here
					style={styles.userImg}
				/> */}
				<View style={styles.userDetailsWrapper}>
					<Text style={styles.userName}>Roopa</Text>
					<Text style={styles.userEmail}>example@gmail.com</Text>
				</View>
			</View>

			{/* Menu Items */}
			<DrawerItem
				icon={({ size }) => <Ionicons name='home-outline' size={size} color='#E91E63' />}
				label='Home'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/(drawer)/(tabs)')}
			/>

			<DrawerItem
				icon={({ size }) => <Feather name='shopping-bag' size={size} color='#E91E63' />}
				label='Products'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/products')}
			/>

			<DrawerItem
				icon={({ size }) => <Feather name='star' size={size} color='#E91E63' />}
				label='Featured'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/featured')}
			/>

			<DrawerItem
				icon={({ size }) => <Feather name='heart' size={size} color='#E91E63' />}
				label='Wishlist'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/(drawer)/(tabs)/wishlist')}
			/>

			<DrawerItem
				icon={({ size }) => <Feather name='shopping-cart' size={size} color='#E91E63' />}
				label='My Cart'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/cart')}
			/>

			<DrawerItem
				icon={({ size }) => <Ionicons name='person-outline' size={size} color='#E91E63' />}
				label='Profile'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/(drawer)/(tabs)/profile')}
			/>
			{/* notification */}
			<DrawerItem
				icon={({ size }) => <Ionicons name='notifications-outline' size={size} color='#E91E63' />}
				label='Profile'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/(drawer)/(tabs)/profile')}
			/>

			{/* <DrawerItem
				icon={({ size }) => <Feather name='log-out' size={size} color='#E91E63' />}
				label='Logout'
				labelStyle={styles.navItemLabel}
				onPress={() => router.push('/logout')}
			/> */}

			{/* Footer */}
			<View style={styles.footer}>
				<Text style={styles.footerText}>
					<Text style={{ color: '#E91E63', fontWeight: 'bold' }}>LookMe </Text>Fashion Store
				</Text>
				<Text style={styles.footerText}>App Version 1.0</Text>
			</View>
		</DrawerContentScrollView>
	);
};

export default function DrawerLayout() {
	return (
		<Drawer
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{ headerShown: false }}>
			{/* Screens */}
			<Drawer.Screen name='Home' options={{ headerShown: true }} />
			<Drawer.Screen name='Products' options={{ headerShown: true }} />
			<Drawer.Screen name='Wishlist' options={{ headerShown: true }} />
			<Drawer.Screen name='Profile' options={{ headerShown: true }} />
			<Drawer.Screen name='Notification' options={{ headerShown: true }} />
		</Drawer>
	);
}

const styles = StyleSheet.create({
	navItemLabel: {
		marginLeft: -20,
		fontSize: 16,
		color: '#333',
	},
	userInfoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	userImg: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 15,
	},
	userDetailsWrapper: {
		flex: 1,
	},
	userName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	userEmail: {
		fontSize: 14,
		color: '#777',
	},
	footer: {
		marginTop: 20,
		padding: 20,
		borderTopWidth: 1,
		borderTopColor: '#ddd',
	},
	footerText: {
		fontSize: 14,
		color: '#777',
	},
});
