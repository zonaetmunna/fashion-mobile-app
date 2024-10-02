// src/components/FilterModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FilterModalProps {
	visible: boolean;
	onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
	return (
		<Modal visible={visible} transparent={true} animationType='slide'>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<TouchableOpacity onPress={onClose} style={styles.closeButton}>
						<Ionicons name='close-outline' size={24} color='#333' />
					</TouchableOpacity>
					<Text style={styles.modalTitle}>Filters</Text>

					{/* Brand Section */}
					<View style={styles.filterSection}>
						<Text style={styles.filterLabel}>Brand</Text>
						<View style={styles.filterOptions}>
							<TouchableOpacity style={[styles.filterOption, styles.selectedOption]}>
								<Text style={styles.filterOptionText}>Adidas</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterOption}>
								<Text style={styles.filterOptionText}>Reebok</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterOption}>
								<Text style={styles.filterOptionText}>Zara</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* Categories Section */}
					<View style={styles.filterSection}>
						<Text style={styles.filterLabel}>Categories</Text>
						<View style={styles.filterOptions}>
							<TouchableOpacity style={[styles.filterOption, styles.selectedOption]}>
								<Text style={styles.filterOptionText}>All</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterOption}>
								<Text style={styles.filterOptionText}>Child</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterOption}>
								<Text style={styles.filterOptionText}>Man</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* Price Range Section */}
					<View style={styles.filterSection}>
						<Text style={styles.filterLabel}>Price</Text>
						<View style={styles.priceRange}>
							<Text>$200</Text>
							<Text>$270</Text>
						</View>
					</View>

					{/* Apply and Reset Buttons */}
					<View style={styles.modalFooter}>
						<TouchableOpacity style={styles.resetButton}>
							<Text style={styles.resetButtonText}>Reset</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.applyButton}>
							<Text style={styles.applyButtonText}>Apply</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default FilterModal;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end', // Position the modal at the bottom of the screen
		backgroundColor: 'rgba(0, 0, 0, 0.5)', // For the dim background effect
	},
	modalContent: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	filterSection: {
		marginBottom: 20,
	},
	filterLabel: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	filterOptions: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	filterOption: {
		padding: 10,
		marginRight: 10,
		marginBottom: 10,
		backgroundColor: '#f3f3f3',
		borderRadius: 5,
	},
	selectedOption: {
		backgroundColor: '#000',
	},
	filterOptionText: {
		color: '#333',
	},
	priceRange: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	modalFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	resetButton: {
		padding: 10,
		backgroundColor: '#f3f3f3',
		borderRadius: 5,
	},
	applyButton: {
		padding: 10,
		backgroundColor: '#000',
		borderRadius: 5,
	},
	resetButtonText: {
		color: '#333',
	},
	applyButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
});
