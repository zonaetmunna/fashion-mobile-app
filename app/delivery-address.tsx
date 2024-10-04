import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Container } from '@/components/container';

const addresses = [
	{
		id: 1,
		type: 'Home Address',
		address: '123 Main Street, Anytown, USA 12345',
		icon: 'home-outline', // Make sure this matches Ionicons' valid icons
	},
	{
		id: 2,
		type: 'Office Address',
		address: '456 Elm Avenue, Smallville, CA 98765',
		icon: 'location-outline', // Valid Ionicons icon
	},

	{
		id: 3,
		type: 'Shop Address',
		address: '654 Pine Road, Countryside, FL 34567',
		icon: 'business-outline', // Valid Ionicons icon
	},
];

export default function DeliveryAddress() {
	const [selectedAddress, setSelectedAddress] = useState<number | null>(null);

	const handleAddressSelect = (id: number) => {
		setSelectedAddress(id);
	};

	return (
		<Container>
			<View style={styles.container}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name='chevron-back-outline' size={28} color='#333' />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Delivery Address</Text>
				</View>

				{/* Address List */}
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{addresses.map((item) => (
						<TouchableOpacity
							key={item.id}
							style={styles.addressItem}
							onPress={() => handleAddressSelect(item.id)}>
							<View style={styles.addressContent}>
								{/* Explicitly cast item.icon as a valid Ionicon name */}
								<Ionicons name={item.icon as any} size={24} color='#333' />
								<View style={styles.addressDetails}>
									<Text style={styles.addressType}>{item.type}</Text>
									<Text style={styles.addressText}>{item.address}</Text>
								</View>
							</View>
							{/* Radio button for selected state */}
							<Ionicons
								name={selectedAddress === item.id ? 'radio-button-on' : 'radio-button-off'}
								size={24}
								color='#333'
							/>
						</TouchableOpacity>
					))}

					{/* Add Address Button */}
					<TouchableOpacity
						style={styles.addAddressButton}
						onPress={() => router.push('/add-delivery-address')}>
						<Ionicons name='add-outline' size={24} color='#333' />
						<Text style={styles.addAddressText}>Add Address</Text>
					</TouchableOpacity>
				</ScrollView>

				{/* Save Button */}
				<View style={styles.fixedFooter}>
					<TouchableOpacity style={styles.saveButton}>
						<Text style={styles.saveButtonText}>Save Address</Text>
					</TouchableOpacity>
				</View>
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
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	scrollContainer: {
		paddingHorizontal: 20,
		paddingBottom: 100, // Give space for the fixed footer
	},
	addressItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	addressContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	addressDetails: {
		marginLeft: 15,
	},
	addressType: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	addressText: {
		fontSize: 14,
		color: '#888',
		marginTop: 5,
	},
	addAddressButton: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20,
		borderTopWidth: 1,
		borderTopColor: '#ddd',
	},
	addAddressText: {
		fontSize: 16,
		marginLeft: 10,
		color: '#333',
	},
	fixedFooter: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 20,
		backgroundColor: '#f1f1f1',
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
	saveButton: {
		backgroundColor: '#333',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	saveButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
