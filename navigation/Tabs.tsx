import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { NavigationStackProp } from '@react-navigation/stack';

type TabsNavigatorProps = {
	Movies: React.FC;
	TV: React.FC;
	Search: React.FC;
	Favorites: React.FC;
};

const Tabs = createBottomTabNavigator<TabsNavigatorProps>();

const getRouteName = (route: NavigationStackProp<{}>) => {
  return route?.state?.routeNames[route.state.index] || 'Movies'
}

export default ({ navigation, route }: NavigationStackProp<{}>) => {
	React.useLayoutEffect(
		() => {
			navigation.setOptions({ title: getRouteName(route) });
		},
		[ route ]
	);
	return (
		<Tabs.Navigator>
			<Tabs.Screen name="Movies" component={Movies} />
			<Tabs.Screen name="TV" component={Tv} />
			<Tabs.Screen name="Search" component={Search} />
			<Tabs.Screen name="Favorites" component={Favs} />
		</Tabs.Navigator>
	);
};
