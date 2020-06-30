import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type FavsProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Favs: React.FC<FavsProps> = ({ navigation }: FavsProps) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Favorites Screen</Text>
		</View>
	);
};

export default Favs;
