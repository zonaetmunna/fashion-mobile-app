// src/components/ProductList.js
import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

export default function ProductList({ products }) {
	return (
		<FlatList
			data={products}
			horizontal
			showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View style={styles.productCard}>
					<Image source={{ uri: item.image }} style={styles.productImage} />
					<Text style={styles.productName}>{item.name}</Text>
					<Text style={styles.productPrice}>{item.price}</Text>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	productCard: {
		marginHorizontal: 10,
		alignItems: 'center',
		width: 150,
	},
	productImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},
	productName: {
		fontSize: 16,
		marginTop: 5,
	},
	productPrice: {
		fontSize: 16,
		color: '#333',
	},
});
