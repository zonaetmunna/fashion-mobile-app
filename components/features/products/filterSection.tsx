import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FooterProps {
	onFilterPress: () => void;
}

const FilterSection: React.FC<FooterProps> = ({ onFilterPress }) => {
	return (
		<View style={styles.footer}>
			<TouchableOpacity style={styles.footerButton}>
				<Ionicons name='male-female-outline' size={20} color='#333' />
				<Text style={styles.footerText}>GENDER</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.footerButton}>
				<Ionicons name='swap-vertical-outline' size={20} color='#333' />
				<Text style={styles.footerText}>SORT</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.footerButton} onPress={onFilterPress}>
				<Ionicons name='filter-outline' size={20} color='#333' />
				<Text style={styles.footerText}>FILTER</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default FilterSection;
