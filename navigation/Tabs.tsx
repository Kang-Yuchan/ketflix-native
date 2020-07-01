import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { NavigationStackProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

type TabsNavigatorProps = {
	Movies: React.FC;
	TV: React.FC;
	Search: React.FC;
	Favorites: React.FC;
};

type TabBarIconProps = {
  focused: boolean;
}

const Tabs = createBottomTabNavigator<TabsNavigatorProps>();

const getRouteName = (route: NavigationStackProp<{}>): string => {
  return route?.state?.routeNames[route.state.index] || 'Movies'
}

export default ({ navigation, route }: NavigationStackProp<{}>) => {
	React.useLayoutEffect(
		() => {
      const name = getRouteName(route);
			navigation.setOptions({
         title: name,
      });
		},
		[ route ]
  );
  
  const screenOptions = React.useCallback(({ route })  => ({
    tabBarIcon: ({ focused }: TabBarIconProps) => {
      let iconName = Platform.OS === "ios" ? "ios-" : "md-";
      if (route.name === "Movies") {
       iconName += "film";
      } else if(route.name === "TV") {
       iconName += "tv";
      } else if(route.name === "Search") {
       iconName += "search";
      } else if (route.name === "Favorites") {
       iconName += "heart";
      }
      return (
        <Ionicons name={iconName} color={focused ? "white" : "grey"} size={26} />
      )
    }
  }), [])

	return (
    <Tabs.Navigator
    screenOptions={screenOptions} 
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: 'black',
        borderTopColor: 'black'
      }
    }}>
			<Tabs.Screen name="Movies" component={Movies} />
			<Tabs.Screen name="TV" component={Tv} />
			<Tabs.Screen name="Search" component={Search} />
			<Tabs.Screen name="Favorites" component={Favs} />
		</Tabs.Navigator>
	);
};
