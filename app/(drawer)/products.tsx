import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Container } from '@/components/container';

import FilterModal from '@/components/features/products/FilterModal';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Categories from '@/components/features/products/categories';
import ProductsList from '@/components/features/products/productsList';
import FilterSection from '@/components/features/products/filterSection';

export default function ProductsScreen() {
	const [selectedCategory, setSelectedCategory] = useState('Crazy Deals');
	const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
	const router = useRouter();

	const toggleFilterModal = () => setIsFilterModalVisible(!isFilterModalVisible);

	return (
		<Container>
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

				{/* Categories */}
				<Categories
					categories={categories}
					selectedCategory={selectedCategory}
					onSelectCategory={setSelectedCategory}
				/>

				{/* Products List */}
				<ProductsList
					products={products}
					onProductSelect={(id) => router.push(`/products-details/${id}`)}
				/>

				{/* Footer */}
				<FilterSection onFilterPress={toggleFilterModal} />

				{/* Filter Modal */}
				<FilterModal visible={isFilterModalVisible} onClose={toggleFilterModal} />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
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
});
