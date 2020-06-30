import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

type TabsNavigatorProps = {
	Movies: React.FC;
	TV: React.FC;
	Search: React.FC;
	Favs: React.FC;
};

const Tabs = createBottomTabNavigator<TabsNavigatorProps>();

export default () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name="Movies" component={Movies} />
			<Tabs.Screen name="TV" component={Tv} />
			<Tabs.Screen name="Search" component={Search} />
			<Tabs.Screen name="Favs" component={Favs} />
		</Tabs.Navigator>
	);
};
