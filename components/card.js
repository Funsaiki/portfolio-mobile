import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

export default function Card(props) {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  const [infos] = useState(props.infos);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      {
        infos.map((element, index) => {
          if (element.job) {
            return (
              <View key={index} style={styles.card}>
                <Text style={styles.text}>{element.name}</Text>
                <Pressable style={styles.cardBody} onPress={() => Linking.openURL(element.url)}>
                  <Image resizeMode='contain' style={{ width: 100, height: 100 }} source={element.image} />
                  <Text style={styles.text}>{element.job}</Text>
                </Pressable>
              </View>
            )
          }
          else {
            return (
              <View key={index} style={styles.card}>
                <Text style={styles.text}>{element.name}</Text>
                <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={element.image} />
              </View>
            )
          }
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    paddingLeft: 10,
    fontSize: 26,
    fontFamily: 'Kanit_400Regular'
  },
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#7C99B4',
    paddingTop: 5,
    marginBottom: 5
  },
  cardBody: {
    borderColor: '#8EB8E5',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  }
});
