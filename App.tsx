import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [ count, setCount ] = React.useState(0);
	const onPressCount = React.useCallback(
		() => {
			setCount(count + 1);
		},
		[ count ]
	);
	return (
		<View style={styles.container}>
			<Text>{count}</Text>
			<Button onPress={onPressCount} title="count" color="#841584" accessibilityLabel="COUNT BUTTON" />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
