import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const mockOrder = {
	id: '1',
	name: 'Bluebell Hand Block Tiered Dress',
	price: '$80',
	originalPrice: '$95',
	quantity: 4,
	status: 'In Delivery',
	discount: '40% Off',
	image: 'https://randomuser.me/api/portraits/women/1.jpg',
	trackOrder: [
		{
			status: 'Order Placed',
			date: '27 Dec 2023',
			description: 'We have received your order',
			isCompleted: true,
		},
		{
			status: 'Order Confirmed',
			date: '27 Dec 2023',
			description: 'We have been confirmed',
			isCompleted: true,
		},
		{
			status: 'Order Processed',
			date: '28 Dec 2023',
			description: 'We are preparing your order',
			isCompleted: false,
		},
		{
			status: 'Ready To Ship',
			date: '29 Dec 2023',
			description: 'Your order is ready for shipping',
			isCompleted: false,
		},
		{
			status: 'Out For Delivery',
			date: '31 Dec 2023',
			description: 'Your order is out for delivery',
			isCompleted: false,
		},
	],
};

export default function TrackOrder() {
	const router = useRouter(); // Hook to navigate back
	const { id } = useLocalSearchParams(); // Get the dynamic `id` from the URL

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{/* Header with Back Button */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
					<Ionicons name='chevron-back-outline' size={28} color='#333' />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Track Order</Text>
			</View>

			{/* Order Summary */}
			<View style={styles.orderSummary}>
				<Image source={{ uri: mockOrder.image }} style={styles.productImage} />
				<View style={styles.orderDetails}>
					<Text style={styles.productName}>{mockOrder.name}</Text>
					<View style={styles.priceRow}>
						<Text style={styles.price}>{mockOrder.price}</Text>
						<Text style={styles.originalPrice}>{mockOrder.originalPrice}</Text>
					</View>
					<Text style={styles.status}>{mockOrder.status}</Text>
					<Text style={styles.discount}>{mockOrder.discount}</Text>
					<Text style={styles.quantity}>Qty: {mockOrder.quantity}</Text>
				</View>
			</View>

			{/* Track Order Section */}
			<View style={styles.trackOrderContainer}>
				<Text style={styles.trackOrderTitle}>Track Order</Text>

				{/* Timeline */}
				{mockOrder.trackOrder.map((stage, index) => (
					<View key={index} style={styles.timelineItem}>
						<View style={styles.timelineIconContainer}>
							{stage.isCompleted ? (
								<Ionicons name='checkmark-circle' size={24} color='#E74C3C' />
							) : (
								<Ionicons name='ellipse-outline' size={24} color='#ccc' />
							)}
						</View>
						<View style={styles.timelineContent}>
							<Text style={[styles.statusText, stage.isCompleted && styles.completedText]}>
								{stage.status} <Text style={styles.dateText}>{stage.date}</Text>
							</Text>
							<Text style={styles.descriptionText}>{stage.description}</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	backButton: {
		marginRight: 10,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
	},
	orderSummary: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	productImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginRight: 20,
	},
	orderDetails: {
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
		marginVertical: 5,
	},
	price: {
		fontSize: 18,
		color: '#E74C3C',
		fontWeight: 'bold',
		marginRight: 10,
	},
	originalPrice: {
		fontSize: 16,
		color: '#999',
		textDecorationLine: 'line-through',
	},
	status: {
		color: '#27ae60',
		marginTop: 5,
	},
	discount: {
		color: '#E74C3C',
		marginTop: 5,
	},
	quantity: {
		color: '#333',
		marginTop: 5,
	},
	trackOrderContainer: {
		marginTop: 20,
	},
	trackOrderTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 20,
	},
	timelineItem: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	timelineIconContainer: {
		width: 30,
		alignItems: 'center',
	},
	timelineContent: {
		marginLeft: 10,
	},
	statusText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	completedText: {
		color: '#E74C3C',
	},
	dateText: {
		fontSize: 14,
		color: '#999',
	},
	descriptionText: {
		fontSize: 14,
		color: '#666',
	},
});
