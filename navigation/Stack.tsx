import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

type StackNavigatorProps = {
	Home: React.ReactElement;
	Detail: React.ReactElement;
};

const Stack = createStackNavigator<StackNavigatorProps>();

export default () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};
