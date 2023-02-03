import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Presentation from './components/presentation';
import Skills from './components/skills';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView styles={styles.scrollView}>
        <Presentation />
        <Skills/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2232',
  },
  scrollView: {
    flex: 1
  }
});
