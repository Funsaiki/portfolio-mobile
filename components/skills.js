import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import LevelBar from './levelBar';

export default function Skills(props) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    const [languagesInfo] = useState(props.infos)
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
                            <Image resizeMode='contain' style={styles.image} source={element.image}/>
                            <Text style={styles.text}>{element.name}</Text>
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
        color: '#7C99B4',
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
        height: 20,
        width: 30,
        marginLeft: 10,
    }
});
