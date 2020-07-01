import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type HomeProps = {
	navigation: NavigationStackProp<{}>;
};

const Movies: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
	const navigateFunc = React.useCallback(
		(screenName: string) => () => {
			return navigation.navigate(screenName);
		},
		[]
	);

	return (
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<Button onPress={navigateFunc('Detail')} title="Movie Detail" />
		</View>
	);
};

export default Movies;
