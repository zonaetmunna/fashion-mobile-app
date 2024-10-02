import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router'; // For navigation

export default function AddCard() {
	const [cardName, setCardName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCvv] = useState('');

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name='chevron-back-outline' size={28} color='#333' />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Add Card</Text>
			</View>

			{/* Card Preview */}
			<View style={styles.cardPreview}>
				<Text style={styles.cardType}>CREDIT CARD</Text>
				<Text style={styles.cardNumber}>
					{cardNumber ? cardNumber.replace(/(.{4})/g, '$1 ') : '**** **** **** 4532'}
				</Text>
				<Text style={styles.cardHolder}>{cardName || 'ROOPA SMITH'}</Text>
				<View style={styles.cardDetails}>
					<Text style={styles.expiry}>{expiryDate ? expiryDate : '14/07'}</Text>
					<Text style={styles.cvv}>{cvv ? cvv : '012'}</Text>
				</View>
			</View>

			{/* Input Fields */}
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder='Card Name'
					value={cardName}
					onChangeText={setCardName}
				/>
				<TextInput
					style={styles.input}
					placeholder='Card Number'
					value={cardNumber}
					onChangeText={setCardNumber}
					keyboardType='numeric'
					maxLength={16}
				/>
				<View style={styles.inputRow}>
					<TextInput
						style={[styles.input, styles.halfInput]}
						placeholder='Expiry Date'
						value={expiryDate}
						onChangeText={setExpiryDate}
						keyboardType='numeric'
						maxLength={5} // For MM/YY format
					/>
					<TextInput
						style={[styles.input, styles.halfInput]}
						placeholder='CVV'
						value={cvv}
						onChangeText={setCvv}
						keyboardType='numeric'
						maxLength={3}
					/>
				</View>
			</View>

			{/* Add Card Button */}
			<TouchableOpacity style={styles.addButton}>
				<Text style={styles.addButtonText}>Add Card</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10, // Add some space between the icon and title
	},
	cardPreview: {
		backgroundColor: '#E74C3C',
		borderRadius: 10,
		padding: 20,
		marginBottom: 20,
	},
	cardType: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardNumber: {
		color: '#fff',
		fontSize: 22,
		letterSpacing: 1.5,
		marginVertical: 20,
	},
	cardHolder: {
		color: '#fff',
		fontSize: 16,
		marginBottom: 10,
	},
	cardDetails: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	expiry: {
		color: '#fff',
		fontSize: 16,
	},
	cvv: {
		color: '#fff',
		fontSize: 16,
	},
	form: {
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		padding: 15,
		fontSize: 16,
		marginBottom: 15,
	},
	inputRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	halfInput: {
		width: '48%',
	},
	addButton: {
		backgroundColor: '#000',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	addButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
