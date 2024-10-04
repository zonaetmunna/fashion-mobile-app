import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container } from '@/components/container';

const mockProduct = {
	id: '1',
	name: 'Bluebell Hand Block Tiered Dress',
	brand: 'Thivi Blouse',
	price: 270,
	originalPrice: 310,
	rating: 4.5,
	reviews: 470,
	images: [
		'https://randomuser.me/api/portraits/women/1.jpg',
		'https://randomuser.me/api/portraits/women/2.jpg',
		'https://randomuser.me/api/portraits/women/3.jpg',
		'https://randomuser.me/api/portraits/women/4.jpg',
	],
};

export default function ProductDetails() {
	const { id } = useLocalSearchParams(); // Get the dynamic `id` from the URL
	const router = useRouter();
	const [quantity, setQuantity] = useState(1);
	const [selectedImage, setSelectedImage] = useState(mockProduct.images[0]);

	const increaseQuantity = () => setQuantity(quantity + 1);
	const decreaseQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	return (
		<Container>
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.scrollContent}>
					{/* Header */}
					<View style={styles.header}>
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons name='chevron-back-outline' size={28} color='#333' />
						</TouchableOpacity>
						<Text style={styles.headerTitle}>Product Details</Text>
						<Ionicons name='cart-outline' size={28} color='#333' />
						<View style={styles.cartBadge}>
							<Text style={styles.cartBadgeText}>14</Text>
						</View>
					</View>

					{/* Product Image Section */}
					<View style={styles.productImageSection}>
						{/* Thumbnails */}
						<View style={styles.thumbnailContainer}>
							{mockProduct.images.map((image, index) => (
								<TouchableOpacity key={index} onPress={() => setSelectedImage(image)}>
									<Image source={{ uri: image }} style={styles.thumbnail} />
								</TouchableOpacity>
							))}
						</View>

						{/* Main Image */}
						<Image source={{ uri: selectedImage }} style={styles.mainImage} />
					</View>

					{/* Product Information */}
					<View style={styles.productDetails}>
						<Text style={styles.brandName}>{mockProduct.brand}</Text>
						<View style={styles.productTitleContainer}>
							<Text style={styles.productName}>{mockProduct.name}</Text>
							<View style={styles.ratingContainer}>
								<Ionicons name='star' size={16} color='#f1c40f' />
								<Text style={styles.rating}>{mockProduct.rating}</Text>
								<Text style={styles.reviews}>({mockProduct.reviews})</Text>
							</View>
						</View>

						{/* Price */}
						<View style={styles.priceContainer}>
							<Text style={styles.price}>${mockProduct.price}</Text>
							<Text style={styles.originalPrice}>${mockProduct.originalPrice}</Text>
						</View>

						{/* Quantity Selector */}
						<View style={styles.quantityContainer}>
							<Text style={styles.quantityLabel}>Quantity:</Text>
							<View style={styles.quantitySelector}>
								<TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
									<Ionicons name='remove-outline' size={16} color='#333' />
								</TouchableOpacity>
								<Text style={styles.quantityValue}>{quantity}</Text>
								<TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
									<Ionicons name='add-outline' size={16} color='#333' />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>

				{/* Add To Cart Button */}
				<View style={styles.fixedFooter}>
					<TouchableOpacity style={styles.addToCartButton}>
						<Ionicons name='cart-outline' size={20} color='#fff' />
						<Text style={styles.addToCartText}>Add To Cart</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
	},
	scrollContent: {
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
	},
	cartBadge: {
		position: 'absolute',
		top: -5,
		right: -10,
		backgroundColor: 'red',
		borderRadius: 10,
		paddingHorizontal: 5,
	},
	cartBadgeText: {
		color: '#fff',
		fontSize: 12,
	},
	productImageSection: {
		flexDirection: 'row',
		gap: 5,

		marginTop: 20,
	},
	thumbnailContainer: {
		width: '20%',
		marginRight: 10,
	},
	thumbnail: {
		width: '100%',
		height: 60,
		borderRadius: 5,
		marginBottom: 10,
		borderColor: '#ddd',
		borderWidth: 1,
	},
	mainImage: {
		width: '70%',
		height: 350,
		borderRadius: 10,
	},
	productDetails: {
		marginTop: 40,
	},
	brandName: {
		fontSize: 14,
		color: '#e74c3c',
		fontWeight: 'bold',
	},
	productTitleContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	productName: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rating: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 5,
	},
	reviews: {
		fontSize: 14,
		color: '#888',
		marginLeft: 5,
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	price: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#e74c3c',
		marginRight: 10,
	},
	originalPrice: {
		fontSize: 18,
		color: '#999',
		textDecorationLine: 'line-through',
	},
	quantityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	quantityLabel: {
		fontSize: 16,
		fontWeight: 'bold',
		marginRight: 10,
	},
	quantitySelector: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 5,
	},
	quantityButton: {
		padding: 5,
	},
	quantityValue: {
		padding: 5,
		fontSize: 16,
		fontWeight: 'bold',
	},
	// Footer with Add to Cart button at the bottom of the screen
	fixedFooter: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 20,
		backgroundColor: '#f1f1f1',
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
	addToCartButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#333',
		paddingVertical: 15,
		borderRadius: 5,
	},
	addToCartText: {
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: 10,
		fontSize: 16,
	},
});
