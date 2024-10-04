import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Container } from '@/components/container';

const notifications = [
	{
		id: '1',
		title: 'New Arrivals Alert!',
		date: '15 July 2023',
		image: 'https://randomuser.me/api/portraits/women/1.jpg',
	},
	{
		id: '2',
		title: 'Flash Sale Announcement',
		date: '15 July 2023',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		id: '3',
		title: 'Exclusive Discounts Inside',
		date: '15 July 2023',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	{
		id: '4',
		title: 'Limited Stock – Act Fast!',
		date: '15 July 2023',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	// Add more notifications here...
];

const NotificationScreen = () => {
	// Render a swipeable delete button
	const renderRightActions = (itemId: string) => {
		return (
			<TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(itemId)}>
				<Ionicons name='trash-outline' size={24} color='#fff' />
			</TouchableOpacity>
		);
	};

	const router = useRouter();

	const handleDelete = (itemId: string) => {
		Alert.alert('Deleted', `Notification ${itemId} deleted`);
	};

	// Render individual notification item
	const renderItem = ({ item }: { item: any }) => {
		return (
			<Swipeable renderRightActions={() => renderRightActions(item.id)}>
				<View style={styles.notificationItem}>
					<Image source={{ uri: item.image }} style={styles.notificationImage} />
					<View style={styles.notificationTextContainer}>
						<Text style={styles.notificationTitle}>{item.title}</Text>
						<Text style={styles.notificationDate}>{item.date}</Text>
					</View>
				</View>
			</Swipeable>
		);
	};

	return (
		<Container>
			<View style={styles.container}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name='chevron-back-outline' size={28} color='#333' />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Notifications (12)</Text>
					<Ionicons name='search-outline' size={24} color='#333' />
				</View>

				{/* FlatList to render notifications */}
				<FlatList
					data={notifications}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					contentContainerStyle={styles.listContent}
				/>
			</View>
		</Container>
	);
};

export default NotificationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		backgroundColor: '#f1f1f1',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	listContent: {
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	notificationItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		backgroundColor: '#fff',
		marginVertical: 5,
		borderRadius: 20,
	},
	notificationImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 15,
	},
	notificationTextContainer: {
		flex: 1,
	},
	notificationTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	notificationDate: {
		fontSize: 14,
		color: '#888',
	},
	deleteButton: {
		width: 70,
		backgroundColor: '#ff5252',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
