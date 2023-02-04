import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Pressable, Linking, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Presentation from './components/presentation';
import Skills from './components/skills';
import { languages, programs, experiences, hobbies, contact } from './data/data'
import { useState } from 'react';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import Card from './components/card';
import SectionTitle from './components/sectionTitle';
import Contact from './components/contact';

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  const [languageInfo, setLanguageInfo] = useState(languages);
  const [programInfo, setProgramInfo] = useState(programs);
  const [experienceInfo, setExperienceInfo] = useState(experiences);
  const [hobbiesInfo, setHobbiesInfo] = useState(hobbies);
  const [contactInfo, setContactInfo] = useState(contact);

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
        <Card infos={experienceInfo} />
        <SectionTitle title="Compétences" />
        <Skills infos={programInfo} />
        <SectionTitle title="Langues" />
        <Skills infos={languageInfo} />
        <SectionTitle title="Hobbies" />
        <Card infos={hobbiesInfo} />
        <SectionTitle title="Me contacter (cliquer)" />
        <Contact infos={contactInfo} />
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flex: 1
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIcon: {
    width: 40
  }
});
