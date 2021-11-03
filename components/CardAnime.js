import React from 'react'
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native-elements';

const CardAnime = ({ image, title, id, navigation }) => {

    const handlePress = (id) => {
        console.log('handle', id)
        navigation.navigate('Details', { id })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => handlePress(id)}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
                resizeMode="cover"
            />
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20,
    },
    text: {
        width: 120,
    }
})

export default CardAnime