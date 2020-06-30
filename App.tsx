import * as React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';

const cacheImages = (images: Array<string>) =>
	images.map((image: string) => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});

const cacheFonts = (fonts: Array<{ 'ionicons': number }>) =>
	fonts.map((font: { 'ionicons': number }) => Font.loadAsync(font));

const App: React.FC = () => {
	const [ isReady, setIsReady ] = React.useState<boolean>(false);
	const loadAssets = () => {
		const images = cacheImages([
			'https://images.unsplash.com/photo-1593359393721-8c301de4bf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			require('./assets/splash.png')
		]);

		const fonts = cacheFonts([ Ionicons.font ]);

		return Promise.all([ ...images, ...fonts ]);
	};

	const onFinish = () => setIsReady(true);

	const onError = () => console.error;

	return isReady ? (
		<NavigationContainer>
			<Stack />
		</NavigationContainer>
	) : (
		<AppLoading startAsync={loadAssets} onFinish={onFinish} onError={onError} />
	);
};

export default App;
