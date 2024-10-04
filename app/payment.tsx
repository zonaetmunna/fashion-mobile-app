import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Container } from '@/components/container';

const paymentMethods = [
	{
		id: 1,
		type: 'Credit Card',
		cardNumber: '**** **** **** 4532',
		cardHolder: 'Roopa Smith',
		expiry: '14/07',
		cvv: '012',
		isVisa: true,
	},
	{
		id: 2,
		type: 'Debit Card',
		cardNumber: '**** **** **** 1234',
		cardHolder: 'Roopa Smith',
		expiry: '12/05',
		cvv: '234',
		isVisa: false,
	},
];

export default function Payment() {
	const [selectedMethod, setSelectedMethod] = useState<number | null>(1);
	const [selectedPaymentOption, setSelectedPaymentOption] = useState<number | null>(null);
	const [upiId, setUpiId] = useState('');

	const handleMethodSelect = (id: number) => {
		setSelectedMethod(id);
	};

	const handlePaymentOptionSelect = (id: number) => {
		setSelectedPaymentOption(id);
	};

	return (
		<Container>
			<ScrollView contentContainerStyle={styles.container}>
				{/* Header */}
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()}>
						<Ionicons name='chevron-back-outline' size={28} color='#333' />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Payment</Text>
				</View>

				{/* Payment Methods */}
				<View style={styles.paymentMethodSection}>
					<Text style={styles.sectionTitle}>Credit/Debit Card</Text>
					<TouchableOpacity onPress={() => router.push('/add-card')}>
						<Text style={styles.addCardText}>Add Card</Text>
					</TouchableOpacity>
				</View>

				{/* Credit/Debit Card Options */}
				{paymentMethods.map((method) => (
					<TouchableOpacity
						key={method.id}
						style={[styles.cardContainer, selectedMethod === method.id && styles.selectedCard]}
						onPress={() => handleMethodSelect(method.id)}>
						<View style={styles.cardContent}>
							<Ionicons
								name={method.isVisa ? 'card-outline' : 'card-outline'}
								size={24}
								color='#fff'
							/>
							<Text style={styles.cardNumber}>{method.cardNumber}</Text>
							<View style={styles.cardDetails}>
								<Text style={styles.cardHolder}>{method.cardHolder}</Text>
								<Text style={styles.cardExpiry}>EXP {method.expiry}</Text>
								<Text style={styles.cardCvv}>CVV {method.cvv}</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}

				{/* Payment Options */}
				<TouchableOpacity
					style={styles.optionContainer}
					onPress={() => handlePaymentOptionSelect(1)}>
					<Ionicons
						name={selectedPaymentOption === 1 ? 'radio-button-on' : 'radio-button-off'}
						size={24}
						color='#333'
					/>
					<Text style={styles.optionText}>Cash On Delivery (Cash/UPI)</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.optionContainer}
					onPress={() => handlePaymentOptionSelect(2)}>
					<Ionicons
						name={selectedPaymentOption === 2 ? 'radio-button-on' : 'radio-button-off'}
						size={24}
						color='#333'
					/>
					<Text style={styles.optionText}>Google Pay/Phone Pay/BHIM UPI</Text>
				</TouchableOpacity>

				{/* UPI Input */}
				{selectedPaymentOption === 2 && (
					<View style={styles.upiContainer}>
						<TextInput
							placeholder='Enter Your UPI ID'
							value={upiId}
							onChangeText={setUpiId}
							style={styles.upiInput}
						/>
						<TouchableOpacity style={styles.continueButton}>
							<Text style={styles.continueButtonText}>Continue</Text>
						</TouchableOpacity>
						<Text style={styles.upiInfo}>
							Your UPI ID will be encrypted and is 100% safe with us.
						</Text>
					</View>
				)}

				<TouchableOpacity
					style={styles.optionContainer}
					onPress={() => handlePaymentOptionSelect(3)}>
					<Ionicons
						name={selectedPaymentOption === 3 ? 'radio-button-on' : 'radio-button-off'}
						size={24}
						color='#333'
					/>
					<Text style={styles.optionText}>Payments/Wallet</Text>
				</TouchableOpacity>

				{/* Continue Button */}
				<TouchableOpacity style={styles.fixedFooterButton}>
					<Text style={styles.footerButtonText}>Continue</Text>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#f1f1f1',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
		paddingVertical: 20,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 10,
	},
	paymentMethodSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	addCardText: {
		color: '#333',
		fontSize: 16,
		textDecorationLine: 'underline',
	},
	cardContainer: {
		backgroundColor: '#007bff',
		padding: 20,
		borderRadius: 10,
		marginBottom: 10,
	},
	selectedCard: {
		backgroundColor: '#FF4081',
	},
	cardContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	cardNumber: {
		fontSize: 18,
		color: '#fff',
		marginLeft: 10,
		flex: 1,
	},
	cardDetails: {
		alignItems: 'flex-end',
	},
	cardHolder: {
		fontSize: 14,
		color: '#fff',
	},
	cardExpiry: {
		fontSize: 14,
		color: '#fff',
	},
	cardCvv: {
		fontSize: 14,
		color: '#fff',
	},
	optionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	optionText: {
		marginLeft: 10,
		fontSize: 16,
	},
	upiContainer: {
		marginVertical: 20,
	},
	upiInput: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		padding: 10,
		fontSize: 16,
		marginBottom: 10,
	},
	continueButton: {
		backgroundColor: '#333',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	continueButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	upiInfo: {
		marginTop: 10,
		color: '#888',
		fontSize: 14,
	},
	fixedFooterButton: {
		backgroundColor: '#333',
		paddingVertical: 20,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	footerButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
