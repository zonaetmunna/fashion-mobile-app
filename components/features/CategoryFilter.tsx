// src/components/CategoryFilter.js
import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
			{categories.map((category, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.filterButton,
						selectedCategory === category && styles.filterButtonSelected,
					]}
					onPress={() => onCategorySelect(category)}>
					<Text
						style={[styles.filterText, selectedCategory === category && styles.filterTextSelected]}>
						{category}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
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
});
