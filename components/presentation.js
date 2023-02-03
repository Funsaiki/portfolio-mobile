import { StyleSheet, Image, View, Text } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

export default function Presentation() {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image contentFit="contain" style={styles.image} source={require('./../assets/photo.jpg')} />
            <Text style={styles.title}>Johnny HU</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 175,
        height: 175,
        borderRadius: 200 / 2,
        margin: 10
    },
    title: {
        fontFamily: 'Kanit_400Regular',
        fontSize: 30,
        color: '#8EB8E5',
        fontWeight: 'bold',
        margin: 5
    },
    text: {
        color: '#7C99B4',
        margin: 10,
        textAlign: 'center',
    }
});
