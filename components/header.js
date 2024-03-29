import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

export default function Header() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Portfolio</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#3A7CA5',
    paddingLeft: 10,
    fontSize: 26,
    fontFamily: 'Kanit_400Regular'
  },
  headerContainer: {
    paddingTop: 5,
  }
});
