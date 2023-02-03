import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

export default function LevelBar(props) {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  const [level, setLevel] = useState(props.level)

  const styles = StyleSheet.create({
    barContainer: {
      backgroundColor: '#1A2232',
      width: '70%',
      height: '100%',
      borderColor: '#8EB8E5',
      borderWidth: 1
    },
    level: {
      backgroundColor: '#8EB8E5',
      width: `${level}%`,
      height: '100%'
    }
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={styles.barContainer}>
        <View style={styles.level}>
            <Text></Text>
        </View>
      </View>
  );
}



