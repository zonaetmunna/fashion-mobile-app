import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CategoriesProps {
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
	categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({
	selectedCategory,
	onSelectCategory,
	categories,
}) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
			{categories.map((category) => (
				<TouchableOpacity
					key={category}
					onPress={() => onSelectCategory(category)}
					style={[
						styles.categoryButton,
						selectedCategory === category && styles.activeCategoryButton,
					]}>
					<Text
						style={[
							styles.categoryText,
							selectedCategory === category && styles.activeCategoryText,
						]}>
						{category}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	categories: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 20,
		paddingBottom: 20,
	},
	categoryButton: {
		marginRight: 10,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 20,
		backgroundColor: '#f3f3f3',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeCategoryButton: {
		backgroundColor: '#333',
	},
	categoryText: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'normal',
	},
	activeCategoryText: {
		color: '#fff',
	},
});

export default Categories;
