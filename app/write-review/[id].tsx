import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function WriteReview() {
	const router = useRouter();
	const [rating, setRating] = useState(4); // Default rating
	const [reviewTitle, setReviewTitle] = useState('');
	const [review, setReview] = useState('');
	const [recommend, setRecommend] = useState('yes');

	const handleRatingPress = (rate) => {
		setRating(rate);
	};

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
				<Text style={styles.headerTitle}>Write Review</Text>
			</View>

			{/* Product Details */}
			<View style={styles.productDetails}>
				<Image
					source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} // Replace with real image
					style={styles.productImage}
				/>
				<View style={styles.productInfo}>
					<Text style={styles.productName}>Bluebell Hand Block Tiered Dress</Text>
					<View style={styles.priceRow}>
						<Text style={styles.price}>$80</Text>
						<Text style={styles.originalPrice}>$95</Text>
					</View>
					<Text style={styles.status}>In Delivery</Text>
					<Text style={styles.discount}>40% Off</Text>
					<Text style={styles.quantity}>Qty: 4</Text>
				</View>
			</View>

			{/* Rating Section */}
			<View style={styles.ratingSection}>
				<Text style={styles.ratingTitle}>Overall Rating</Text>
				<Text style={styles.ratingDescription}>Your Average Rating Is {rating}.0</Text>
				<View style={styles.starContainer}>
					{[1, 2, 3, 4, 5].map((star) => (
						<TouchableOpacity key={star} onPress={() => handleRatingPress(star)}>
							<Ionicons name={star <= rating ? 'star' : 'star-outline'} size={28} color='#F1C40F' />
						</TouchableOpacity>
					))}
				</View>
			</View>

			{/* Review Title */}
			<TextInput
				style={styles.input}
				placeholder='Review Title'
				value={reviewTitle}
				onChangeText={setReviewTitle}
			/>

			{/* Product Review */}
			<TextInput
				style={[styles.input, styles.textArea]}
				placeholder='Product Review'
				value={review}
				onChangeText={setReview}
				multiline={true}
				numberOfLines={4}
			/>

			{/* Recommend to a Friend */}
			<View style={styles.recommendSection}>
				<Text style={styles.recommendText}>Would you recommend this product to a friend?</Text>
				<View style={styles.recommendOptions}>
					<TouchableOpacity style={styles.radioOption} onPress={() => setRecommend('yes')}>
						<Ionicons
							name={recommend === 'yes' ? 'radio-button-on' : 'radio-button-off'}
							size={24}
							color='#333'
						/>
						<Text style={styles.radioLabel}>Yes</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.radioOption} onPress={() => setRecommend('no')}>
						<Ionicons
							name={recommend === 'no' ? 'radio-button-on' : 'radio-button-off'}
							size={24}
							color='#333'
						/>
						<Text style={styles.radioLabel}>No</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Submit Button */}
			<TouchableOpacity style={styles.submitButton}>
				<Text style={styles.submitButtonText}>Submit Review</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	productDetails: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
		marginRight: 15,
	},
	productInfo: {
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
	ratingSection: {
		marginBottom: 20,
		alignItems: 'center',
	},
	ratingTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	ratingDescription: {
		fontSize: 14,
		color: '#999',
		marginBottom: 10,
	},
	starContainer: {
		flexDirection: 'row',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		padding: 15,
		fontSize: 16,
		marginBottom: 15,
	},
	textArea: {
		height: 100,
	},
	recommendSection: {
		marginBottom: 20,
	},
	recommendText: {
		fontSize: 16,
		marginBottom: 10,
	},
	recommendOptions: {
		flexDirection: 'row',
	},
	radioOption: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 20,
	},
	radioLabel: {
		marginLeft: 5,
		fontSize: 16,
	},
	submitButton: {
		backgroundColor: '#000',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 20,
	},
	submitButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
