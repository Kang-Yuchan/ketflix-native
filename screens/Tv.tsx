import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type TvProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Tv: React.FC<TvProps> = ({ navigation }: TvProps) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>TV Screen</Text>
		</View>
	);
};

export default Tv;
