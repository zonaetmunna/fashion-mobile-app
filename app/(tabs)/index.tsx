import React, { useRef, useState } from 'react';
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
	Animated,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons for the drawer icon

// Placeholder data for fashion items
const productData = [
	{
		id: '1',
		name: 'Summer Outfit',
		category: 'Women',
		image: 'https://example.com/summer.jpg',
		price: '$25',
		featured: true,
		newArrivals: false,
	},
	{
		id: '2',
		name: 'Winter Coat',
		category: 'Men',
		image: 'https://example.com/winter.jpg',
		price: '$80',
		featured: false,
		newArrivals: true,
	},
	{
		id: '3',
		name: 'Sports Gear',
		category: 'Men',
		image: 'https://example.com/sports.jpg',
		price: '$45',
		featured: true,
		newArrivals: true,
	},
	{
		id: '4',
		name: 'Evening Dress',
		category: 'Women',
		image: 'https://example.com/evening.jpg',
		price: '$95',
		featured: true,
		newArrivals: false,
	},
	{
		id: '5',
		name: 'Kids Jacket',
		category: 'Kids',
		image: 'https://example.com/kids.jpg',
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
	const handleFeaturedCategorySelect = (category) => {
		setSelectedCategoryFeatured(category);
	};

	// Function to handle category selection for New Arrivals
	const handleNewArrivalsCategorySelect = (category) => {
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
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* Header with Drawer Icon */}
				<View style={styles.header}>
					<TouchableOpacity style={styles.drawerIcon}>
						<Ionicons name='menu' size={28} color='#333' /> {/* Drawer icon */}
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Fashion Store</Text>
				</View>

				{/* Search Section */}
				<View style={[styles.searchSection, isFocused && styles.searchSectionFocused]}>
					<Ionicons name='search-outline' size={20} color='#666' style={styles.searchIcon} />
					<TextInput
						style={[styles.searchInput, isFocused && styles.searchInputFocused]}
						placeholder='Search Something...'
						placeholderTextColor='#999'
						onFocus={() => setIsFocused(true)} // Set focus state when input is focused
						onBlur={() => setIsFocused(false)} // Remove focus state when input is blurred
					/>
					<TouchableOpacity style={styles.filterIcon}>
						<Ionicons name='options-outline' size={20} color='#666' />
					</TouchableOpacity>
				</View>

				{/* Image Slider */}
				<View style={styles.sliderContainer}>
					<ScrollView
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
							useNativeDriver: false,
						})}
						scrollEventThrottle={16}>
						{fashionImages.map((image, index) => (
							<Image key={index} source={{ uri: image }} style={styles.fashionImage} />
						))}
					</ScrollView>

					{/* Dots Indicator */}
					<View style={styles.dotsContainer}>
						{fashionImages.map((_, index) => {
							const inputRange = [(index - 1) * 300, index * 300, (index + 1) * 300];
							const dotOpacity = scrollX.interpolate({
								inputRange,
								outputRange: [0.3, 1, 0.3],
								extrapolate: 'clamp',
							});
							return <Animated.View key={index} style={[styles.dot, { opacity: dotOpacity }]} />;
						})}
					</View>
				</View>

				{/* Featured Products */}
				<Text style={styles.sectionTitle}>Featured Products</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
					{categories.map((category, index) => (
						<TouchableOpacity
							key={index}
							style={[
								styles.filterButton,
								selectedCategoryFeatured === category && styles.filterButtonSelected,
							]}
							onPress={() => handleFeaturedCategorySelect(category)}>
							<Text
								style={[
									styles.filterText,
									selectedCategoryFeatured === category && styles.filterTextSelected,
								]}>
								{category}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				<FlatList
					data={filteredFeaturedProducts}
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

				{/* New Arrivals */}
				<Text style={styles.sectionTitle}>New Arrivals</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
					{categories.map((category, index) => (
						<TouchableOpacity
							key={index}
							style={[
								styles.filterButton,
								selectedCategoryNewArrivals === category && styles.filterButtonSelected,
							]}
							onPress={() => handleNewArrivalsCategorySelect(category)}>
							<Text
								style={[
									styles.filterText,
									selectedCategoryNewArrivals === category && styles.filterTextSelected,
								]}>
								{category}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				<FlatList
					data={filteredNewArrivalProducts}
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
		paddingHorizontal: 20,
	},
	header: {
		flexDirection: 'row', // Align items in a row
		alignItems: 'center', // Center vertically
		padding: 20,
		backgroundColor: '#fff',
	},
	drawerIcon: {
		marginRight: 10, // Space between the icon and the title
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		flex: 1, // This will take the remaining space in the row
		textAlign: 'center', // Center the title
	},

	searchSection: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f1f1f1',
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 8,
		marginTop: 20,
		marginHorizontal: 20,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	searchSectionFocused: {
		borderColor: '#007bff', // Change border color when focused
	},
	searchIcon: {
		marginRight: 8, // Space between icon and input
	},
	searchInput: {
		flex: 1,
		fontSize: 16,
		color: '#333',
		borderWidth: 0, // Remove the border on focus
	},
	searchInputFocused: {
		borderWidth: 0, // Keep border removed when focused
	},
	filterIcon: {
		marginLeft: 8,
	},

	// slider section
	sliderContainer: {
		marginTop: 20,
	},
	fashionImage: {
		width: 300,
		height: 200,
		borderRadius: 15,
		marginHorizontal: 10,
	},
	dotsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#007bff',
		marginHorizontal: 5,
	},

	// filter section
	filterBar: {
		marginVertical: 10,
		paddingLeft: 20,
	},
	filterButton: {
		backgroundColor: '#f0f0f0',
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginRight: 10,
		borderRadius: 8,
	},
	filterButtonSelected: {
		backgroundColor: '#007bff', // Change background color when selected
	},
	filterText: {
		fontSize: 16,
		color: '#333',
	},
	filterTextSelected: {
		color: '#fff', // Change text color when selected
	},

	// product section
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
