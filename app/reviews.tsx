import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

// Mock Data for Reviews
const reviewsData = [
	{
		id: '1',
		reviewerName: 'John Doe',
		rating: 5,
		reviewTitle: 'Great product!',
		reviewDescription:
			'I absolutely loved this dress. The quality is amazing, and it fits perfectly.',
		recommend: true,
		date: '1st Jan 2024',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		id: '2',
		reviewerName: 'Jane Smith',
		rating: 4,
		reviewTitle: 'Good but pricey',
		reviewDescription:
			'The dress is beautiful, but I found it a bit too expensive for the quality.',
		recommend: false,
		date: '5th Jan 2024',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		id: '3',
		reviewerName: 'Emily Johnson',
		rating: 4,
		reviewTitle: 'Loved the color!',
		reviewDescription:
			'The color of the dress is exactly what I was looking for. Great for casual wear!',
		recommend: true,
		date: '10th Jan 2024',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	// Add more review data here
];

export default function ReviewsScreen() {
	const router = useRouter();
	const [reviews] = useState(reviewsData);

	const renderReviewItem = ({ item }) => (
		<View style={styles.reviewItem}>
			{/* Reviewer Profile */}
			<View style={styles.reviewerInfo}>
				<Image source={{ uri: item.image }} style={styles.reviewerImage} />
				<View style={styles.reviewerDetails}>
					<Text style={styles.reviewerName}>{item.reviewerName}</Text>
					<View style={styles.ratingRow}>
						{[...Array(5)].map((_, index) => (
							<Ionicons
								key={index}
								name={index < item.rating ? 'star' : 'star-outline'}
								size={16}
								color='#F1C40F'
							/>
						))}
					</View>
					<Text style={styles.reviewDate}>{item.date}</Text>
				</View>
			</View>

			{/* Review Content */}
			<View style={styles.reviewContent}>
				<Text style={styles.reviewTitle}>{item.reviewTitle}</Text>
				<Text style={styles.reviewDescription}>{item.reviewDescription}</Text>
				<Text style={styles.recommendation}>
					{item.recommend ? 'Recommended' : 'Not Recommended'}
				</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Ionicons
					name='chevron-back-outline'
					size={28}
					color='#333'
					onPress={() => router.back()}
				/>
				<Text style={styles.headerTitle}>Reviews</Text>
			</View>

			{/* Reviews List */}
			<FlatList
				data={reviews}
				keyExtractor={(item) => item.id}
				renderItem={renderReviewItem}
				contentContainerStyle={styles.reviewList}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	reviewList: {
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	reviewItem: {
		backgroundColor: '#f9f9f9',
		padding: 15,
		borderRadius: 10,
		marginBottom: 20,
	},
	reviewerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	reviewerImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 15,
	},
	reviewerDetails: {
		flex: 1,
	},
	reviewerName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	ratingRow: {
		flexDirection: 'row',
		marginVertical: 5,
	},
	reviewDate: {
		color: '#999',
		fontSize: 12,
	},
	reviewContent: {
		marginTop: 10,
	},
	reviewTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 5,
	},
	reviewDescription: {
		fontSize: 14,
		color: '#666',
		marginBottom: 10,
	},
	recommendation: {
		fontSize: 14,
		fontWeight: 'bold',
		color: (item) => (item.recommend ? '#27ae60' : '#e74c3c'),
	},
});
