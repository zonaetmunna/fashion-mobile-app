import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	FlatList,
	SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const cartData = [
	{
		id: 1,
		name: 'Bluebell Hand Block Tiered',
		price: 80,
		originalPrice: 95,
		quantity: 14,
		imageUrl: 'https://example.com/product1.jpg',
	},
	{
		id: 2,
		name: 'Bluebell Hand Block Tiered',
		price: 80,
		originalPrice: 95,
		quantity: 14,
		imageUrl: 'https://example.com/product2.jpg',
	},
	{
		id: 3,
		name: 'Bluebell Hand Block Tiered',
		price: 80,
		originalPrice: 95,
		quantity: 14,
		imageUrl: 'https://example.com/product3.jpg',
	},
];

export default function CartScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<View style={styles.header}>
						<Text style={styles.headerText}>My Cart</Text>
						<Text style={styles.itemCount}>8 Items • Deliver to: London</Text>
						<Ionicons name='ios-location-outline' size={20} style={styles.locationIcon} />
						<Text style={styles.changeText}>Change</Text>
					</View>
					<Text style={styles.subtotal}>Subtotal $3,599</Text>
					<Text style={styles.deliveryStatus}>Your Order Is Eligible For Free Delivery</Text>

					<FlatList
						data={cartData}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<View style={styles.product}>
								<Image source={{ uri: item.imageUrl }} style={styles.productImage} />
								<View style={styles.productDetails}>
									<Text style={styles.productName}>{item.name}</Text>
									<Text style={styles.productPrice}>
										${item.price} <Text style={styles.originalPrice}>${item.originalPrice}</Text>
									</Text>
									<Text style={styles.freeDelivery}>FREE Delivery</Text>
									<View style={styles.quantityContainer}>
										<TouchableOpacity style={styles.quantityButton}>
											<Ionicons name='remove-outline' size={24} color='black' />
										</TouchableOpacity>
										<Text style={styles.quantity}>{item.quantity}</Text>
										<TouchableOpacity style={styles.quantityButton}>
											<Ionicons name='add-outline' size={24} color='black' />
										</TouchableOpacity>
										<TouchableOpacity style={styles.removeButton}>
											<Text style={styles.removeText}>Remove</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						)}
					/>
				</ScrollView>
				<TouchableOpacity style={styles.proceedButton} onPress={() => router.push('/checkout')}>
					<Text style={styles.proceedButtonText}>Proceed to Buy (8 items)</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		flex: 1,
	},
	itemCount: {
		color: 'gray',
	},
	locationIcon: {
		marginHorizontal: 5,
	},
	changeText: {
		color: 'red',
	},
	subtotal: {
		fontSize: 18,
		fontWeight: 'bold',
		padding: 15,
	},
	deliveryStatus: {
		fontSize: 16,
		color: 'green',
		paddingLeft: 15,
	},
	product: {
		flexDirection: 'row',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	productImage: {
		width: 100,
		height: 100,
		marginRight: 10,
	},
	productDetails: {
		flex: 1,
		justifyContent: 'space-around',
	},
	productName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	productPrice: {
		fontSize: 16,
		color: 'black',
	},
	originalPrice: {
		textDecorationLine: 'line-through',
		color: 'gray',
	},
	freeDelivery: {
		color: 'green',
	},
	quantityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	quantityButton: {
		padding: 10,
	},
	quantity: {
		fontSize: 16,
		width: 40,
		textAlign: 'center',
	},
	removeButton: {
		marginLeft: 10,
	},
	removeText: {
		color: 'red',
	},
	proceedButton: {
		backgroundColor: 'black',
		alignItems: 'center',
		padding: 15,
		marginTop: 10,
		marginVertical: 10,
		marginHorizontal: 15,
		borderRadius: 10,
	},
	proceedButtonText: {
		color: 'white',
		fontSize: 18,
	},
});
