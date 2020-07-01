import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from '@react-navigation/stack';
import { moviesAPI } from '../api';

type HomeProps = {
	navigation: NavigationStackProp<{}>;
};

const Movies: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
	const getApiData = async () => {
		const [ nowPlaying, nowPlayingError ] = await moviesAPI.nowPlaying();
		const [ popular, popularError ] = await moviesAPI.popular();
		const [ upComing, upComingError ] = await moviesAPI.upComing();
	};

	React.useEffect(() => {
		getApiData();
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<Text>Movies</Text>
		</View>
	);
};

export default Movies;
