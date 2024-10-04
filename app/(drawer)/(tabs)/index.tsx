import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons for the drawer icon
import CategoryFilter from '@/components/features/CategoryFilter';
import Header from '@/components/features/Header';
import SearchBar from '@/components/features/SearchBar';
import ImageSlider from '@/components/features/ImageSlider';
import ProductList from '@/components/features/ProductList';
import { Container } from '@/components/container';

// Placeholder data for fashion items
const productData = [
	{
		id: '1',
		name: 'Summer Outfit',
		category: 'Women',
		image: 'https://source.unsplash.com/featured/?fashion,women',
		price: '$25',
		featured: true,
		newArrivals: false,
	},
	{
		id: '2',
		name: 'Winter Coat',
		category: 'Men',
		image: 'https://i.ibb.co.com/XCZT2vQ/young-handsome.jpg',
		price: '$80',
		featured: false,
		newArrivals: true,
	},
	{
		id: '3',
		name: 'Sports Gear',
		category: 'Men',
		image: 'https://i.ibb.co.com/XCZT2vQ/young-handsome.jpg',
		price: '$45',
		featured: true,
		newArrivals: true,
	},
	{
		id: '4',
		name: 'Evening Dress',
		category: 'Women',
		image: 'https://i.ibb.co.com/xHQFp5x/Clothing-Shop.jpg',
		price: '$95',
		featured: true,
		newArrivals: false,
	},
	{
		id: '5',
		name: 'Kids Jacket',
		category: 'Kids',
		image: 'https://i.ibb.co.com/xHQFp5x/Clothing-Shop.jpg',
		price: '$50',
		featured: false,
		newArrivals: true,
	},
];

const fashionImages = [
	'https://i.ibb.co.com/VvhWD2Y/model.jpg', // Add your image URLs here
	'https://i.ibb.co.com/9wK2vHk/assecsoris.jpg',
	'https://i.ibb.co.com/XCZT2vQ/young-handsome.jpg',
];

// Categories for the filter bar
const categories = ['All', 'Men', 'Women', 'Kids', 'Sale', 'New Arrivals', 'Featured'];

export default function HomeScreen() {
	const scrollX = useRef(new Animated.Value(0)).current;
	const [selectedCategoryFeatured, setSelectedCategoryFeatured] = useState('All');
	const [selectedCategoryNewArrivals, setSelectedCategoryNewArrivals] = useState('All');
	const [isFocused, setIsFocused] = useState(false); // State to track focus of the search input

	// Function to handle category selection for Featured Products
	const handleFeaturedCategorySelect = (category: string) => {
		setSelectedCategoryFeatured(category);
	};

	// Function to handle category selection for New Arrivals
	const handleNewArrivalsCategorySelect = (category: string) => {
		setSelectedCategoryNewArrivals(category);
	};

	// Filter featured products based on selected category
	const filteredFeaturedProducts = productData.filter((item) =>
		selectedCategoryFeatured === 'All'
			? item.featured
			: item.category === selectedCategoryFeatured && item.featured
	);

	// Filter new arrivals products based on selected category
	const filteredNewArrivalProducts = productData.filter((item) =>
		selectedCategoryNewArrivals === 'All'
			? item.newArrivals
			: item.category === selectedCategoryNewArrivals && item.newArrivals
	);

	return (
		<Container>
			<Header />

			{/* Scrollable body */}
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<SearchBar />
				<ImageSlider images={fashionImages} />

				{/* Featured Products */}
				<Text style={styles.sectionTitle}>Featured Products</Text>
				<CategoryFilter
					categories={categories}
					selectedCategory={selectedCategoryFeatured}
					onCategorySelect={handleFeaturedCategorySelect}
				/>
				<ProductList products={filteredFeaturedProducts} />

				{/* New Arrivals */}
				<Text style={styles.sectionTitle}>New Arrivals</Text>
				<CategoryFilter
					categories={categories}
					selectedCategory={selectedCategoryNewArrivals}
					onCategorySelect={handleNewArrivalsCategorySelect}
				/>
				<ProductList products={filteredNewArrivalProducts} />
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 20,
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 20, // Add padding to avoid cutting off content at the bottom
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 20,
		marginTop: 20,
	},
});
