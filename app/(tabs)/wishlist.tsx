import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const wishlistData = [
	{
		id: 1,
		name: 'Bluebell Hand Block Tiered Dress',
		price: 80,
		originalPrice: 95,
		imageUrl: 'https://example.com/dress1.jpg',
		reviews: 2000,
	},
	{
		id: 2,
		name: 'Bluebell Hand Block Tiered Dress',
		price: 80,
		originalPrice: 95,
		imageUrl: 'https://example.com/dress2.jpg',
		reviews: 2000,
	},
	{
		id: 3,
		name: 'Bluebell Hand Block Tiered Dress',
		price: 80,
		originalPrice: 95,
		imageUrl: 'https://example.com/dress3.jpg',
		reviews: 2000,
	},
	{
		id: 4,
		name: 'Bluebell Hand Block Tiered Dress',
		price: 80,
		originalPrice: 95,
		imageUrl: 'https://example.com/dress4.jpg',
		reviews: 2000,
	},
];

const categories = ['All', 'Child', 'Man', 'Woman', 'Dress', 'Underwear'];

export default function WishlistScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Wishlist</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.filterContainer}>
				{categories.map((category, index) => (
					<TouchableOpacity key={index} style={styles.filterButton}>
						<Text style={styles.filterText}>{category}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<FlatList
				data={wishlistData}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<TouchableOpacity style={styles.closeButton}>
							<Ionicons name='close-circle' size={24} color='red' />
						</TouchableOpacity>
						<Image source={{ uri: item.imageUrl }} style={styles.image} />
						<Text style={styles.name}>{item.name}</Text>
						<Text style={styles.price}>
							${item.price} <Text style={styles.originalPrice}>${item.originalPrice}</Text>
						</Text>
						<Text style={styles.reviews}>{item.reviews} Review</Text>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Add To Cart</Text>
						</TouchableOpacity>
					</View>
				)}
				contentContainerStyle={styles.listContainer}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	pageTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 10,
	},
	filterContainer: {
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	filterButton: {
		backgroundColor: '#f0f0f0',
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginRight: 10,
	},
	filterText: {
		color: '#000',
		fontSize: 16,
	},
	listContainer: {
		paddingHorizontal: 5,
		paddingBottom: 50,
	},
	card: {
		flex: 1,
		margin: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		paddingBottom: 10,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		zIndex: 1,
	},
	image: {
		width: '100%',
		height: 150,
		borderRadius: 5,
		alignSelf: 'center',
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		marginHorizontal: 5,
	},
	price: {
		fontSize: 16,
		fontWeight: 'bold',
		marginHorizontal: 5,
	},
	originalPrice: {
		textDecorationLine: 'line-through',
		color: 'grey',
	},
	reviews: {
		fontSize: 14,
		color: 'grey',
		marginHorizontal: 5,
	},
	button: {
		backgroundColor: 'black',
		borderRadius: 5,
		padding: 10,
		margin: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
});
