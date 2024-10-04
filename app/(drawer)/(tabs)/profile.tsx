import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import ProfileHeader from '@/components/features/profile/ProfileHeader';
import ProfileMenu from '@/components/features/profile/ProfileMenu';
import ProfileOption from '@/components/features/profile/ProfileOption';
import { Container } from '@/components/container';

export default function ProfileScreen() {
	return (
		<Container>
			{/* Profile Header with Notification Icon */}
			<View style={styles.headerContainer}>
				<ProfileHeader />
				{/* Notification Button */}
				<TouchableOpacity style={styles.notificationButton}>
					<Link href='/notification'>
						<Ionicons name='notifications-outline' size={28} color='#333' />
					</Link>
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.container}>
				<ProfileMenu />

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Account Settings</Text>
					<ProfileOption title='Edit Profile' icon='person-circle-outline' href='/edit-profile' />
					<ProfileOption title='Saved Cards & Wallet' icon='card-outline' href='/add-card' />
					<ProfileOption title='Saved Addresses' icon='home-outline' href='/add-delivery-address' />
					<ProfileOption title='Select Language' icon='language-outline' href='/language' />
					<ProfileOption
						title='Notifications Settings'
						icon='notifications-outline'
						href='/notifications-settings'
					/>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>My Activity</Text>
					<ProfileOption title='Reviews' icon='star-outline' href='/reviews' />
					<ProfileOption
						title='Questions & Answers'
						icon='chatbubble-ellipses-outline'
						href='/questions'
					/>
				</View>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#f1f1f1',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	container: {
		flex: 1,
	},
	notificationButton: {
		padding: 10,
	},
	section: {
		marginTop: 10,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		paddingLeft: 20,
		paddingVertical: 10,
	},
});
