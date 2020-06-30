import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type HomeProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
	const navigateFunc = React.useCallback(
		(screenName: string) => () => {
			return navigation.navigate(screenName);
		},
		[]
	);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button onPress={navigateFunc('Detail')} title="Go Detail" />
		</View>
	);
};

export default Home;
