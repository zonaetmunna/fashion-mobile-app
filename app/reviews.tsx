import { Container } from '@/components/container';
import { reviewsData } from '@/data/reviews';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function ReviewsScreen() {
	const [reviews] = useState(reviewsData);

	const renderReviewItem = ({ item }: { item: any }) => (
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
				<Text
					style={[
						styles.recommendation,
						{ color: item.recommend ? '#27ae60' : '#e74c3c' }, // Dynamic style based on recommendation
					]}>
					{item.recommend ? 'Recommended' : 'Not Recommended'}
				</Text>
			</View>
		</View>
	);

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
	},
});
