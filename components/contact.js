import { StyleSheet, Image, Pressable, Linking, View } from 'react-native';
import { useState } from 'react';

export default function Contact(props) {
    const [contact] = useState(props.infos)

    return (
        <View style={styles.contactContainer}>
            {
                contact.map((element, index) => {
                    return (
                        <View style={styles.container} key={index}>
                            <Pressable style={styles.button} onPress={() => Linking.openURL(element.contact)}>
                                <Image style={styles.contactIcon} resizeMode='contain' source={element.image} />
                            </Pressable>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
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
