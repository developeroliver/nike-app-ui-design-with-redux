import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/navigation';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
