import * as React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';

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

export default function App() {
	const [ isReady, setIsReady ] = React.useState<boolean>(false);
	const loadAssets = async () => {
		const images = cacheImages([
			'https://images.unsplash.com/photo-1593359393721-8c301de4bf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			require('./assets/splash.png')
		]);

		const fonts = cacheFonts([ Ionicons.font ]);
		console.log(Ionicons.font);
		return await Promise.all([ ...images, ...fonts ]);
	};

	const onFinish = () => setIsReady(true);

	const onError = () => console.error;

	return isReady ? (
		<Text>App is Ready!</Text>
	) : (
		<AppLoading startAsync={loadAssets} onFinish={onFinish} onError={onError} />
	);
}
