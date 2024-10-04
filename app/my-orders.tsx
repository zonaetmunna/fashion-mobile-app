import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Container } from '@/components/container';

// Sample data for orders
const ongoingOrders = [
	{
		id: '1',
		name: 'Bluebell Hand Block Tiered Dress',
		price: '$80',
		originalPrice: '$95',
		quantity: 2,
		status: 'In Delivery',
		image: 'https://randomuser.me/api/portraits/women/1.jpg',
		discount: '40% Off',
	},
	{
		id: '2',
		name: 'Bluebell Hand Block Tiered Dress',
		price: '$80',
		originalPrice: '$95',
		quantity: 2,
		status: 'In Delivery',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
		discount: '40% Off',
	},
	{
		id: '3',
		name: 'Bluebell Hand Block Tiered Dress',
		price: '$80',
		originalPrice: '$95',
		quantity: 2,
		status: 'In Delivery',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
		discount: '40% Off',
	},
];

const completedOrders = [
	{
		id: '4',
		name: 'Bluebell Hand Block Tiered Dress',
		price: '$80',
		originalPrice: '$95',
		quantity: 2,
		status: 'Delivered',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
		discount: '40% Off',
	},
];

export default function MyOrders() {
	const [activeTab, setActiveTab] = useState('Ongoing');
	const router = useRouter();

	const renderOrderItem = ({ item }: { item: any }) => (
		<View style={styles.orderItem}>
			<Image source={{ uri: item.image }} style={styles.orderImage} />
			<View style={styles.orderInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<View style={styles.priceRow}>
					<Text style={styles.price}>{item.price}</Text>
					<Text style={styles.originalPrice}>{item.originalPrice}</Text>
				</View>
				<Text style={styles.status}>{item.status}</Text>
				<Text style={styles.discount}>{item.discount}</Text>
				<Text style={styles.quantity}>Qty: {item.quantity}</Text>
			</View>
			{activeTab === 'Ongoing' ? (
				<TouchableOpacity
					style={styles.actionButton}
					onPress={() => router.push(`/track-order/${item.id}`)}>
					<Text style={styles.actionButtonText}>Track Order</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={styles.actionButton}
					onPress={() => router.push(`/write-review/${item.id}`)}>
					<Text style={styles.actionButtonText}>Write Review</Text>
				</TouchableOpacity>
			)}
		</View>
	);

	const dataToDisplay = activeTab === 'Ongoing' ? ongoingOrders : completedOrders;

	return (
		<Container>
			<View style={styles.container}>
				{/* Header */}
				<View style={styles.header}>
					<Ionicons
						name='chevron-back-outline'
						size={28}
						color='#333'
						onPress={() => router.back()}
					/>
					<Text style={styles.headerTitle}>My Order</Text>
				</View>

				{/* Tabs */}
				<View style={styles.tabs}>
					<TouchableOpacity
						style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
						onPress={() => setActiveTab('Ongoing')}>
						<Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>
							Ongoing
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
						onPress={() => setActiveTab('Completed')}>
						<Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>
							Completed
						</Text>
					</TouchableOpacity>
				</View>

				{/* Order List */}
				<FlatList
					data={dataToDisplay}
					keyExtractor={(item) => item.id}
					renderItem={renderOrderItem}
					contentContainerStyle={styles.orderList}
				/>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	tabs: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 10,
	},
	tab: {
		flex: 1,
		paddingVertical: 10,
		alignItems: 'center',
		borderBottomWidth: 2,
		borderBottomColor: '#ddd',
	},
	activeTab: {
		borderBottomColor: '#000',
	},
	tabText: {
		fontSize: 16,
		color: '#999',
	},
	activeTabText: {
		color: '#000',
		fontWeight: 'bold',
	},
	orderList: {
		paddingHorizontal: 20,
	},
	orderItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	orderImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
		marginRight: 10,
	},
	orderInfo: {
		flex: 1,
	},
	productName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	priceRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	price: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#000',
		marginRight: 10,
	},
	originalPrice: {
		fontSize: 14,
		color: '#999',
		textDecorationLine: 'line-through',
	},
	status: {
		color: '#27ae60',
		marginTop: 5,
	},
	discount: {
		color: '#e74c3c',
		marginTop: 5,
	},
	quantity: {
		color: '#999',
		marginTop: 5,
	},
	actionButton: {
		backgroundColor: '#000',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 5,
	},
	actionButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});
