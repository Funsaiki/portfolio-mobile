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
            <Text style={styles.text}>Bonjour, je suis un étudiant en 5ème année à l'ESTIAM. 
            Actuellement, je suis en alternance chez Galigeo en tant que développeur Web. 
            Au cours de mes études, j'ai acquis une solide formation en développement Web et en programmation. 
            Je suis passionné par la création de solutions innovantes et je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences. 
            Chez Galigeo, je travaille sur des projets intéressants et je suis en mesure de mettre en pratique mes connaissances acquises lors de mes études. 
            Je suis déterminé à continuer à développer mes compétences et à m'engager à fond dans chaque projet auquel je participe. 
            Merci de prendre le temps de consulter mon portfolio. 
            (ChatGPT)</Text>
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
