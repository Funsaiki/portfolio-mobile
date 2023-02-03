import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import LevelBar from './levelBar';
import { languages } from './../data/languages'

export default function Skills() {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    const [languagesInfo] = useState(languages)
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            {
                languagesInfo.map((element, index) => {
                    return (
                        <View key={index} style={styles.skillContainer}>
                            <LevelBar level={element.level} />
                            <Image style={styles.image} source={element.image}/>
                            <Text style={styles.text}>{element.lang}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    text: {
        color: '#ffffff',
        paddingLeft: 10
    },
    skillContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    image: {
        height: 13.33333333,
        width: 20,
        marginLeft: 10,
    }
});
