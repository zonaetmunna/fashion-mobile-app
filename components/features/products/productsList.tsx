import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Product {
	id: string;
	name: string;
	price: string;
	originalPrice: string;
	reviews: string;
	image: string;
}

interface ProductsListProps {
	products: Product[];
	onProductSelect: (productId: string) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, onProductSelect }) => {
	const renderProduct = ({ item }: { item: Product }) => (
		<View style={styles.productCard}>
			<Image source={{ uri: item.image }} style={styles.productImage} />
			<TouchableOpacity style={styles.favoriteButton} onPress={() => onProductSelect(item.id)}>
				<Ionicons name='heart-outline' size={24} color='#999' />
			</TouchableOpacity>
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.productPrice}>{item.price}</Text>
					<Text style={styles.originalPrice}>{item.originalPrice}</Text>
				</View>
				<Text style={styles.reviews}>({item.reviews})</Text>
			</View>
			<TouchableOpacity style={styles.addToCartButton}>
				<Text style={styles.addToCartText}>Add To Cart</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			renderItem={renderProduct}
			numColumns={2}
			contentContainerStyle={styles.productList}
		/>
	);
};

const styles = StyleSheet.create({
	productList: {
		paddingHorizontal: 10,
	},
	productCard: {
		flex: 1,
		backgroundColor: '#fff',
		margin: 10,
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#eee',
	},
	productImage: {
		width: '100%',
		height: 150,
		borderRadius: 10,
	},
	favoriteButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		backgroundColor: '#fff',
		borderRadius: 50,
		padding: 5,
	},
	productInfo: {
		marginVertical: 10,
	},
	productName: {
		fontSize: 14,
		color: '#333',
		fontWeight: 'bold',
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	productPrice: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'bold',
	},
	originalPrice: {
		fontSize: 14,
		color: '#999',
		textDecorationLine: 'line-through',
		marginLeft: 10,
	},
	reviews: {
		fontSize: 12,
		color: '#999',
		marginTop: 5,
	},
	addToCartButton: {
		backgroundColor: '#000',
		paddingVertical: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	addToCartText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default ProductsList;
