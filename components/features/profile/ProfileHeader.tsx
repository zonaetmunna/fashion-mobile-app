import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader: React.FC = () => {
	return (
		<View style={styles.header}>
			<Image style={styles.avatar} source={{ uri: 'https://example.com/avatar.jpg' }} />
			<Text style={styles.name}>Hello, Roopa</Text>
		</View>
	);
};

export default ProfileHeader;

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		padding: 20,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 10,
	},
});
