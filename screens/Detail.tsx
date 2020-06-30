import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type DetailProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Detail: React.FC<DetailProps> = ({ navigation }: DetailProps) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Detail Screen</Text>
		</View>
	);
};

export default Detail;
