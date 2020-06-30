import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';

type NavigateProps = {};

type SearchProps = {
	navigation: NavigationStackProp<NavigateProps>;
};

const Search: React.FC<SearchProps> = ({ navigation }: SearchProps) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Search Screen</Text>
		</View>
	);
};

export default Search;
