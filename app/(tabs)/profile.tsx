import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
} from 'react-native';

export default function ProfileScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.container}>
				<View style={styles.topBar}>
					<Ionicons name='notifications-outline' size={24} style={styles.topIcon} />
					<Ionicons name='search-outline' size={24} style={styles.topIcon} />
				</View>
				<View style={styles.header}>
					<Image style={styles.avatar} source={{ uri: 'https://example.com/avatar.jpg' }} />
					<Text style={styles.name}>Hello, Roopa</Text>
					<View style={styles.menu}>
						<TouchableOpacity style={styles.menuItem}>
							<Text style={styles.menuItemText}>Your Order</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuItem}>
							<Text style={styles.menuItemText}>Wishlist</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuItem}>
							<Text style={styles.menuItemText}>Coupons</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuItem}>
							<Text style={styles.menuItemText}>Track Order</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Account Settings</Text>
					<ProfileOption title='Edit Profile' icon='person-circle-outline' />
					<ProfileOption title='Saved Cards & Wallet' icon='card-outline' />
					<ProfileOption title='Saved Addresses' icon='home-outline' />
					<ProfileOption title='Select Language' icon='language-outline' />
					<ProfileOption title='Notifications Settings' icon='notifications-outline' />
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>My Activity</Text>
					<ProfileOption title='Reviews' icon='star-outline' />
					<ProfileOption title='Questions & Answers' icon='chatbubble-ellipses-outline' />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const ProfileOption = ({ title, icon }) => (
	<TouchableOpacity style={styles.profileOption}>
		<Link href={`/edit-profile`} style={styles.profileOption}>
			<Ionicons name={icon} size={24} style={styles.icon} />
			<Text style={styles.optionTitle}>{title}</Text>
			<Ionicons name='chevron-forward' size={24} style={styles.chevron} />
		</Link>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
	},
	topBar: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 10,
	},
	topIcon: {
		marginLeft: 10,
	},
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
	menu: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	menuItem: {
		alignItems: 'center',
		padding: 10,
		flexBasis: '48%',
		backgroundColor: '#f0f0f0',
		marginBottom: 10,
	},
	menuItemText: {
		fontSize: 16,
		color: 'black',
	},
	section: {
		marginTop: 10,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		paddingLeft: 20,
		paddingVertical: 10,
	},
	profileOption: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	icon: {
		marginRight: 10,
	},
	optionTitle: {
		flex: 1,
		fontSize: 16,
		color: 'black',
	},
	chevron: {
		color: '#ccc',
	},
});
