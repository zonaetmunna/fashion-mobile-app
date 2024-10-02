// src/components/SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBar() {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={[styles.searchSection, isFocused && styles.searchSectionFocused]}>
			<Ionicons name='search-outline' size={20} color='#666' style={styles.searchIcon} />
			<TextInput
				style={[styles.searchInput, isFocused && styles.searchInputFocused]}
				placeholder='Search Something...'
				placeholderTextColor='#999'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<TouchableOpacity style={styles.filterIcon}>
				<Ionicons name='options-outline' size={20} color='#666' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
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
});
