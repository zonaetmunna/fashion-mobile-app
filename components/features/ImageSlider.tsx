import React, { useRef } from 'react';
import { ScrollView, View, StyleSheet, Animated, Image } from 'react-native';

export default function ImageSlider({ images }: { images: string[] }) {
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<View style={styles.sliderContainer}>
			<ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: false,
				})}
				scrollEventThrottle={16}>
				{images?.map((image, index) => (
					<Image
						key={index}
						source={{ uri: 'https://i.ibb.co.com/VvhWD2Y/model.jpg' }}
						style={styles.fashionImage}
					/>
				))}
			</ScrollView>

			<View style={styles.dotsContainer}>
				{images?.map((_, index) => {
					const inputRange = [(index - 1) * 300, index * 300, (index + 1) * 300];
					const dotOpacity = scrollX.interpolate({
						inputRange,
						outputRange: [0.3, 1, 0.3],
						extrapolate: 'clamp',
					});
					return <Animated.View key={index} style={[styles.dot, { opacity: dotOpacity }]} />;
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	sliderContainer: {
		marginTop: 20,
	},
	fashionImage: {
		width: 300,
		height: 200,
		borderRadius: 15,
		marginHorizontal: 10,
	},
	dotsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#007bff',
		marginHorizontal: 5,
	},
});
