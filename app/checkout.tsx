import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function CheckoutScreen() {
	const [notes, setNotes] = useState('');

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name='chevron-back-outline' size={28} color='#333' />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Checkout</Text>
				</View>

				{/* Delivery Address */}
				<TouchableOpacity style={styles.section} onPress={() => router.push('/delivery-address')}>
					<View style={styles.sectionContent}>
						<Ionicons name='location-outline' size={24} color='#333' />
						<View style={styles.sectionTextWrapper}>
							<Text style={styles.sectionTitle}>Delivery Address</Text>
							<Text style={styles.sectionSubtitle}>123 Main Street, Anytown, USA 12345</Text>
						</View>
					</View>
					<Ionicons name='chevron-forward-outline' size={24} color='#333' />
				</TouchableOpacity>

				{/* Payment */}
				<TouchableOpacity style={styles.section} onPress={() => router.push('/payment')}>
					<View style={styles.sectionContent}>
						<Ionicons name='card-outline' size={24} color='#333' />
						<View style={styles.sectionTextWrapper}>
							<Text style={styles.sectionTitle}>Payment</Text>
							<Text style={styles.sectionSubtitle}>XXXX XXXX XXXX 3456</Text>
						</View>
					</View>
					<Ionicons name='chevron-forward-outline' size={24} color='#333' />
				</TouchableOpacity>

				{/* Additional Notes */}
				<View style={styles.notesSection}>
					<Text style={styles.notesLabel}>Additional Notes:</Text>
					<TextInput
						placeholder='Write Here'
						placeholderTextColor='#aaa'
						style={styles.notesInput}
						value={notes}
						onChangeText={setNotes}
						multiline
					/>
				</View>

				{/* Order Summary */}
				<View style={styles.summarySection}>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryItem}>Bluebell Hand Block Tiered</Text>
						<Text style={styles.summaryPrice}>2 X $2000.00</Text>
					</View>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryItem}>Men Black Grey Allover Printed</Text>
						<Text style={styles.summaryPrice}>2 X $1699.00</Text>
					</View>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryItem}>Discount</Text>
						<Text style={styles.discountPrice}>-$100.00</Text>
					</View>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryItem}>Shipping</Text>
						<Text style={styles.shippingText}>FREE Delivery</Text>
					</View>
				</View>

				{/* Total Amount */}
				<View style={styles.totalContainer}>
					<Text style={styles.totalLabel}>My Order</Text>
					<Text style={styles.totalAmount}>$3,599.00</Text>
				</View>
			</ScrollView>

			{/* Submit Order Button */}
			<View style={styles.fixedFooter}>
				<TouchableOpacity style={styles.submitButton}>
					<Text style={styles.submitButtonText}>Submit Order</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 100, // Give space for the fixed footer
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	section: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	sectionContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	sectionTextWrapper: {
		marginLeft: 15,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	sectionSubtitle: {
		fontSize: 14,
		color: '#888',
		marginTop: 3,
	},
	notesSection: {
		marginVertical: 20,
	},
	notesLabel: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	notesInput: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		padding: 15,
		fontSize: 16,
		color: '#333',
		backgroundColor: '#f3f3f3',
	},
	summarySection: {
		marginVertical: 20,
	},
	summaryRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
	},
	summaryItem: {
		fontSize: 16,
		color: '#333',
	},
	summaryPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	discountPrice: {
		fontSize: 16,
		color: 'red',
	},
	shippingText: {
		fontSize: 16,
		color: 'green',
	},
	totalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
		borderTopWidth: 1,
		borderTopColor: '#ddd',
	},
	totalLabel: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	totalAmount: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#333',
	},
	fixedFooter: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 20,
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
	submitButton: {
		backgroundColor: '#333',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	submitButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
