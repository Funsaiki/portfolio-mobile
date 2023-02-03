import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import { useState } from 'react';

export default function SectionTitle(props) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    const [title] = useState(props.title)

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 26,
        color: '#42D6D3',
        fontFamily: 'Kanit_400Regular',
        fontWeight: 'bold',
    },
    headerContainer: {
        paddingTop: 5,
    }
});
