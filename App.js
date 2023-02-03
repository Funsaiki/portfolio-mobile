import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Presentation from './components/presentation';
import Skills from './components/skills';
import { languages } from './data/languages'
import { programs } from './data/programs';
import { useState } from 'react';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import Experiences from './components/experiences';
import SectionTitle from './components/sectionTitle';

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  const [languageInfo, setLanguageInfo] = useState(languages)
  const [programInfo] = useState(programs)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView styles={styles.scrollView}>
        <Presentation />
        <SectionTitle title="Expériences" />
        <Experiences />
        <SectionTitle title="Compétences" />
        <Skills infos={programInfo} />
        <SectionTitle title="Langues" />
        <Skills infos={languageInfo} />
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
