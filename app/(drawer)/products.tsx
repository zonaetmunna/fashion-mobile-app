import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
import FilterModal from '@/components/features/products/FilterModal';

const products = [
	{
		id: '1',
		name: 'Bluebell Hand Block Tiered Dress',
		price: '$80',
		originalPrice: '$95',
		reviews: '2k Review',
		image: 'https://randomuser.me/api/portraits/women/1.jpg',
	},
	{
		id: '2',
		name: 'Sunshine Floral Printed Dress',
		price: '$75',
		originalPrice: '$90',
		reviews: '1.5k Review',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		id: '3',
		name: 'Crimson Red Silk Gown',
		price: '$120',
		originalPrice: '$150',
		reviews: '3k Review',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	{
		id: '4',
		name: 'Elegant Black Evening Dress',
		price: '$100',
		originalPrice: '$130',
		reviews: '4k Review',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		id: '5',
		name: 'Pastel Green Summer Dress',
		price: '$60',
		originalPrice: '$75',
		reviews: '1.2k Review',
		image: 'https://randomuser.me/api/portraits/women/5.jpg',
	},
	{
		id: '6',
		name: 'Ocean Blue Casual Dress',
		price: '$70',
		originalPrice: '$85',
		reviews: '2.8k Review',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
	{
		id: '7',
		name: 'Coral Pink Maxi Dress',
		price: '$95',
		originalPrice: '$110',
		reviews: '3.5k Review',
		image: 'https://randomuser.me/api/portraits/women/7.jpg',
	},
	{
		id: '8',
		name: 'Lavender Embroidered Dress',
		price: '$85',
		originalPrice: '$105',
		reviews: '1.8k Review',
		image: 'https://randomuser.me/api/portraits/women/8.jpg',
	},
	{
		id: '9',
		name: 'Golden Velvet Party Dress',
		price: '$150',
		originalPrice: '$180',
		reviews: '5k Review',
		image: 'https://randomuser.me/api/portraits/women/9.jpg',
	},
	{
		id: '10',
		name: 'Sky Blue Polka Dot Dress',
		price: '$65',
		originalPrice: '$80',
		reviews: '2k Review',
		image: 'https://randomuser.me/api/portraits/women/10.jpg',
	},
];

// Categories list
const categories = ['Crazy Deals', 'Budget Buys', 'Best Offer', 'Women', 'Men'];

export default function ProductsScreen() {
	const [selectedCategory, setSelectedCategory] = useState('Crazy Deals');
	const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

	const router = useRouter();

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		// Implement filter logic based on category
	};
	const toggleFilterModal = () => {
		setIsFilterModalVisible(!isFilterModalVisible);
	};

	// Render product card
	const renderProduct = ({ item }) => {
		return (
			<View style={styles.productCard}>
				<Image source={{ uri: item.image }} style={styles.productImage} />
				<TouchableOpacity
					style={styles.favoriteButton}
					onPress={() => router.push(`/products-details/${item.id}`)}>
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
	};

	return (
		<View style={styles.container}>
			{/* Search and Header Section */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name='chevron-back-outline' size={28} color='#333' />
				</TouchableOpacity>
				<View style={styles.searchBar}>
					<Ionicons name='search-outline' size={24} color='#999' />
					<TextInput
						placeholder='Search Products'
						placeholderTextColor='#999'
						style={styles.searchInput}
					/>
				</View>
				<TouchableOpacity onPress={() => router.push('/(drawer)/cart')}>
					<Ionicons name='cart-outline' size={28} color='#333' />
					<View style={styles.cartBadge}>
						<Text style={styles.cartBadgeText}>14</Text>
					</View>
				</TouchableOpacity>
			</View>

			{/* Scrollable Tab Categories */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
				{categories.map((category) => (
					<TouchableOpacity
						key={category}
						onPress={() => handleCategorySelect(category)}
						style={[
							styles.categoryButton,
							selectedCategory === category && styles.activeCategoryButton,
						]}>
						<Text
							style={[
								styles.categoryText,
								selectedCategory === category && styles.activeCategoryText,
							]}>
							{category}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* Products List */}
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={renderProduct}
				numColumns={2}
				contentContainerStyle={styles.productList}
			/>

			{/* Footer - Gender, Sort, Filter */}
			<View style={styles.footer}>
				<TouchableOpacity style={styles.footerButton}>
					<Ionicons name='male-female-outline' size={20} color='#333' />
					<Text style={styles.footerText}>GENDER</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.footerButton}>
					<Ionicons name='swap-vertical-outline' size={20} color='#333' />
					<Text style={styles.footerText}>SORT</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.footerButton} onPress={toggleFilterModal}>
					<Ionicons name='filter-outline' size={20} color='#333' />
					<Text style={styles.footerText}>FILTER</Text>
				</TouchableOpacity>
			</View>

			{/* Filter Modal */}
			<FilterModal visible={isFilterModalVisible} onClose={toggleFilterModal} />
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
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	searchBar: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f3f3f3',
		borderRadius: 10,
		flex: 1,
		marginHorizontal: 10,
		padding: 10,
	},
	searchInput: {
		marginLeft: 10,
		fontSize: 16,
		color: '#333',
	},
	cartBadge: {
		position: 'absolute',
		top: -5,
		right: -5,
		backgroundColor: 'red',
		borderRadius: 10,
		paddingHorizontal: 5,
	},
	cartBadgeText: {
		color: '#fff',
		fontSize: 12,
	},

	categories: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 20,
		paddingBottom: 20,
	},
	categoryButton: {
		marginRight: 10,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 20, // Rounded corners
		backgroundColor: '#f3f3f3',
		justifyContent: 'center', // Align text vertically
		alignItems: 'center', // Align text horizontally
	},

	activeCategoryButton: {
		backgroundColor: '#333',
	},
	categoryText: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'normal',
	},
	activeCategoryText: {
		color: '#fff',
	},
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
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
	footerButton: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	footerText: {
		marginLeft: 5,
		fontSize: 14,
		fontWeight: 'bold',
		color: '#333',
	},
});
