import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type HomeProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Movies: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
	const navigateFunc = React.useCallback(
		(screenName: string) => () => {
			return navigation.navigate(screenName);
		},
		[]
	);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Movies Screen</Text>
		</View>
	);
};

export default Movies;
