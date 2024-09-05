import { Link } from 'expo-router';
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TextInput,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from 'react-native';

// Expanded placeholder data for fashion items
const productData = [
	{ id: '1', name: 'Summer Outfit', image: 'https://example.com/summer.jpg', price: '$25' },
	{ id: '2', name: 'Winter Coat', image: 'https://example.com/winter.jpg', price: '$80' },
	{ id: '3', name: 'Sports Gear', image: 'https://example.com/sports.jpg', price: '$45' },
	{ id: '4', name: 'Evening Dress', image: 'https://example.com/evening.jpg', price: '$95' },
];

// Categories for the filter bar
const categories = ['All', 'Men', 'Women', 'Kids', 'Sale'];

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Make Your Fashion Look Amazing</Text>
				</View>
				<View style={styles.searchSection}>
					<TextInput style={styles.searchInput} placeholder='Search Something...' />
					<TouchableOpacity style={styles.searchButton}>
						<Text style={styles.searchButtonText}>🔍</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
					{categories.map((category, index) => (
						<TouchableOpacity key={index} style={styles.filterButton}>
							<Text style={styles.filterText}>{category}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>

				<TouchableOpacity style={styles.searchButton}>
					<Link href='/products' style={styles.searchButton}>
						<Text style={styles.searchButtonText}>All</Text>
					</Link>
				</TouchableOpacity>

				<Text style={styles.sectionTitle}>Featured</Text>
				<FlatList
					data={productData}
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
				<Text style={styles.sectionTitle}>New Arrival</Text>
				<FlatList
					data={productData}
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
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		padding: 20,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	searchSection: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	searchInput: {
		flex: 1,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
		marginRight: 10,
		borderRadius: 20,
	},
	searchButton: {
		padding: 10,
		backgroundColor: '#eee',
		borderRadius: 20,
	},
	searchButtonText: {
		fontSize: 24,
	},
	filterBar: {
		marginVertical: 10,
	},
	filterButton: {
		backgroundColor: '#f0f0f0',
		padding: 10,
		marginRight: 10,
		borderRadius: 20,
	},
	filterText: {
		fontSize: 16,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 20,
		marginTop: 20,
	},
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
