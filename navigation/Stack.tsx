import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Detail from '../screens/Detail';
import { TabNavigationState } from '@react-navigation/routers/lib/typescript/src/TabRouter';

type StackNavigatorProps = {
	Tabs: TabNavigationState;
	Detail: React.FC;
};

const Stack = createStackNavigator<StackNavigatorProps>();

export default () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Tabs" component={Tabs} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};
