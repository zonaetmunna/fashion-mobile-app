// src/components/ProfileOption.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

interface ProfileOptionProps {
	title: string;
	icon: string;
	href: string;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ title, icon, href }) => {
	return (
		<TouchableOpacity style={styles.profileOption}>
			<Ionicons name={icon} size={24} style={styles.icon} />
			<Text style={styles.optionTitle}>{title}</Text>
			<Link href={href}>
				<Ionicons name='chevron-forward' size={24} style={styles.chevron} />
			</Link>
		</TouchableOpacity>
	);
};

export default ProfileOption;

const styles = StyleSheet.create({
	profileOption: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between', // Aligns the chevron icon to the right
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	optionTitle: {
		fontSize: 16,
		color: 'black',
		flex: 1, // Ensures the text takes up the remaining space
	},
	chevron: {
		color: '#ccc',
		alignSelf: 'flex-end', // This aligns the chevron horizontally to the end of the row
	},
	icon: {
		marginRight: 10,
	},
});
